import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { X, Upload, Crop } from "lucide-react";
import {
  useController,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";
import { ImageCropInputProps } from "@/types/image-crop-input";
import CropModal from "./crop-modal";

export interface ImageWithPreview extends File {
  preview?: string;
  id: string;
}

export const ImageCropInput = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  maxFiles = 5,
  maxSize = 5242880,
  label = "Arrastra o haz clic para seleccionar imágenes",
  description = "Formato: Imágenes (JPG, PNG, etc.)\nTamaño máximo: 5 MB por archivo",
  disabled = false,
  multiple = true,
  cropAspect = "square",
  enableCrop = false,
}: ImageCropInputProps<TFieldValues>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: [] as PathValue<TFieldValues, Path<TFieldValues>>,
    rules: {
      validate: (files: ImageWithPreview[]) => {
        if (!files || files.length === 0) {
          return "Debes subir al menos una imagen";
        }
        if (multiple && files.length > maxFiles) {
          return `Solo puedes subir hasta ${maxFiles} imágenes`;
        }
        return true;
      },
    },
  });

  const [images, setImages] = useState<ImageWithPreview[]>(
    Array.isArray(value) ? value : []
  );
  const [cropModalData, setCropModalData] = useState<{
    image: string;
    fileName: string;
    fileType: string;
  } | null>(null);

  useEffect(() => {
    setImages(Array.isArray(value) ? value : []);
  }, [value]);

  const aspectRatioMap = {
    square: 1,
    rectangle: 16 / 9,
  };

  const processImage = async (file: File) => {
    if (enableCrop) {
      const preview = URL.createObjectURL(file);
      setCropModalData({
        image: preview,
        fileName: file.name,
        fileType: file.type,
      });
    } else {
      addImageToList(file);
    }
  };

  const addImageToList = (file: File) => {
    const imageWithPreview = Object.assign(file, {
      preview: URL.createObjectURL(file),
      id: `${Date.now()}-${Math.random()}`,
    }) as ImageWithPreview;

    const newImages = multiple
      ? [...images, imageWithPreview]
      : [imageWithPreview];

    setImages(newImages);
    onChange(newImages);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      if (rejectedFiles.length > 0) {
        console.warn("Archivos rechazados");
        return;
      }

      if (acceptedFiles.length > 0) {
        const filesToProcess = multiple
          ? acceptedFiles.slice(0, maxFiles - images.length)
          : [acceptedFiles[0]];

        if (!multiple) {
          images.forEach((img) => {
            if (img.preview) URL.revokeObjectURL(img.preview);
          });
          setImages([]);
        }

        filesToProcess.forEach(processImage);
      }
    },
    [images, maxFiles, multiple, enableCrop]
  );

  const imageCount = images.length;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple,
    maxFiles: multiple ? maxFiles - images.length : 1,
    maxSize,
    disabled:
      disabled ||
      (!multiple && images.length >= 1) ||
      (multiple && images.length >= maxFiles),
    noClick: imageCount > 0,
  });

  const handleRemoveImage = (imageId: string) => {
    const updatedImages = images.filter((img) => img.id !== imageId);
    setImages(updatedImages);
    onChange(updatedImages);

    const imageToRemove = images.find((img) => img.id === imageId);
    if (imageToRemove?.preview) {
      URL.revokeObjectURL(imageToRemove.preview);
    }
  };

  const openFileDialog = () => {
    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (input) input.click();
  };

  const handleCropComplete = (croppedFile: File) => {
    addImageToList(croppedFile);
    if (cropModalData?.image) {
      URL.revokeObjectURL(cropModalData.image);
    }
    setCropModalData(null);
  };

  const handleCropCancel = () => {
    if (cropModalData?.image) {
      URL.revokeObjectURL(cropModalData.image);
    }
    setCropModalData(null);
  };

  return (
    <>
      <div className="flex flex-col gap-2 h-full">
        <div
          {...getRootProps()}
          className={`relative rounded-lg transition-colors shadow-sm overflow-hidden border-2
            ${
              isDragActive
                ? "border-primary bg-default-100"
                : "border-default-300 hover:border-default-400 bg-default-200"
            }
            ${error ? "border-red-500" : ""}
            ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : imageCount > 0
                ? ""
                : "cursor-pointer"
            }
          `}
        >
          <input {...getInputProps()} />

          {imageCount > 0 ? (
            <div className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative group aspect-square rounded-lg overflow-hidden bg-default-400 transition-all hover:shadow-md"
                  >
                    {image.preview ? (
                      <img
                        src={image.preview}
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Upload className="w-10 h-10 text-gray-400" />
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleRemoveImage(image.id);
                      }}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-red-500 text-white rounded-full p-1 hover:scale-110 shadow-lg"
                      disabled={disabled}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {multiple && imageCount < maxFiles && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    openFileDialog();
                  }}
                  className="border-2 border-default-400 rounded-lg p-4 text-center bg-default-300 hover:bg-default-400 transition-colors cursor-pointer"
                >
                  <Upload
                    className={`w-6 h-6 mx-auto mb-1 ${
                      isDragActive ? "text-primary" : "text-gray-400"
                    }`}
                  />
                  <p className="text-sm text-default-600">
                    {isDragActive
                      ? "Suelta las imágenes aquí"
                      : "Agregar más imágenes"}
                  </p>
                  <p className="text-xs text-primary mt-1">
                    {imageCount} de {maxFiles} imagen
                    {imageCount !== 1 ? "es" : ""}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center">
              <Upload
                className={`w-12 h-12 mx-auto mb-3 ${
                  isDragActive
                    ? "text-primary animate-bounce"
                    : "text-default-400"
                }`}
              />
              {enableCrop && (
                <Crop className="w-8 h-8 mx-auto mb-2 text-primary" />
              )}
              <p className="text-default-700 font-medium mb-1">{label}</p>
              <p className="text-default-500 text-xs whitespace-pre-line">
                {description}
              </p>
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm px-1">{error.message}</p>}
      </div>

      {cropModalData && (
        <CropModal
          image={cropModalData.image}
          aspectRatio={aspectRatioMap[cropAspect]}
          onComplete={handleCropComplete}
          onCancel={handleCropCancel}
          fileName={cropModalData.fileName}
        />
      )}
    </>
  );
};
