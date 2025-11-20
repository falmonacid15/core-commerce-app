import { ImageCropInput } from "@/components/ui/image-crop/image-crop-input";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from "@heroui/react";
import { Edit, Settings } from "lucide-react";
import { useForm } from "react-hook-form";

export default function StoreConfig() {
  const { control } = useForm();
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
        <div className="flex gap-2 items-center">
          <Settings />
          <div className="flex flex-col">
            <h2 className="text-sm">Configuración de la Tienda</h2>
            <p className="text-xs">Ajustes adicionales y personalización</p>
          </div>
        </div>
        <Button size="sm" startContent={<Edit className="size-4" />}>
          Editar configuración de la Tienda
        </Button>
      </CardHeader>
      <CardBody className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <ImageCropInput
            control={control}
            name="images"
            enableCrop={true}
            cropAspect="square"
            multiple={true}
            maxFiles={3}
          />
        </div>
        <div className="col-span-2">
          <ImageCropInput
            control={control}
            name="images"
            enableCrop={true}
            cropAspect="rectangle"
            multiple={true}
            maxFiles={3}
          />
        </div>
      </CardBody>
    </Card>
  );
}
