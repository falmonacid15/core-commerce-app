import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from "@heroui/react";
import { CreditCard, Edit } from "lucide-react";

export default function BillingSettings() {
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
        <div className="flex gap-2 items-center">
          <CreditCard />
          <div className="flex flex-col">
            <h2 className="text-sm">Datos de Facturación</h2>
            <p className="text-xs">
              Información fiscal y de facturación de tu negocio
            </p>
          </div>
        </div>
        <Button size="sm" startContent={<Edit className="size-4" />}>
          Editar datos de Facturación
        </Button>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            isRequired
            variant="faded"
            label="Razón social"
            placeholder="Mi Empresa S.A."
          />

          <Input
            isRequired
            variant="faded"
            label="RUT / NIF / Tax ID"
            placeholder="12.345.678-9"
          />
        </div>

        <Input
          isRequired
          variant="faded"
          label="Giro o actividad comercial"
          placeholder="Comercio electrónico"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            isRequired
            variant="faded"
            label="Email de facturación"
            placeholder="facturacion@tienda.com"
          />

          <Input
            isRequired
            variant="faded"
            label="Teléfono de facturación"
            placeholder="+56 2 1234 5678"
          />
        </div>

        <Textarea
          isRequired
          variant="faded"
          label="Dirección de facturación"
          placeholder="Dirección completa para facturas..."
        />
      </CardBody>
    </Card>
  );
}
