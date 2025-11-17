import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from "@heroui/react";
import { Edit, Store } from "lucide-react";

export default function StoreSettings() {
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
        <div className="flex gap-2 items-center">
          <Store />
          <div className="flex flex-col">
            <h2 className="text-sm">Información General</h2>
            <p className="text-xs">Información básica y pública de tu tienda</p>
          </div>
        </div>
        <Button size="sm" startContent={<Edit className="size-4" />}>
          Editar información general
        </Button>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            isRequired
            isDisabled
            variant="faded"
            label="Nombre de la tienda"
            placeholder="Mi tienda"
          />

          <Input
            isRequired
            isDisabled
            variant="faded"
            label="Slug (URL)"
            placeholder="Este será parte de tu URL: tienda.com/mi-tienda-online"
          />
        </div>
        <Textarea
          isRequired
          isDisabled
          variant="faded"
          label="Descripción"
          placeholder="Describe tu tienda..."
          rows={4}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            isRequired
            isDisabled
            variant="faded"
            label="Email de contacto"
            placeholder="contacto@tienda.com"
          />

          <Input
            isRequired
            isDisabled
            variant="faded"
            label="Teléfono de contacto"
            placeholder="+56 9 1234 5678"
          />
        </div>
        <Input
          isRequired
          isDisabled
          variant="faded"
          label="Dirección"
          placeholder="Av. Principal 123, Ciudad"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            isRequired
            isDisabled
            variant="faded"
            label="Dirección"
            placeholder="Av. Principal 123, Ciudad"
          />

          <Input
            isRequired
            readOnly
            variant="faded"
            label="Dirección"
            placeholder="Av. Principal 123, Ciudad"
          />
        </div>
      </CardBody>
    </Card>
  );
}
