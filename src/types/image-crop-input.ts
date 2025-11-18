import { Control, FieldValues, Path } from "react-hook-form";

export interface CropModalProps {
  image: string;
  aspectRatio: number;
  onComplete: (croppedFile: File) => void;
  onCancel: () => void;
  fileName: string;
}

export interface ImageCropInputProps<
  TFieldValues extends FieldValues = FieldValues
> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  maxFiles?: number;
  maxSize?: number;
  label?: string;
  description?: string;
  disabled?: boolean;
  multiple?: boolean;
  cropAspect?: CropAspectRatio;
  enableCrop?: boolean;
}

export type CropAspectRatio = "square" | "rectangle";
