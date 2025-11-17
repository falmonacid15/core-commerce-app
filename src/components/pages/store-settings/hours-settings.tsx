import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Switch,
  TimeInput,
} from "@heroui/react";
import { Clock, Edit, Info } from "lucide-react";

export default function HoursSettings() {
  const daysOfWeek = [
    { key: "monday", label: "Lunes" },
    { key: "tuesday", label: "Martes" },
    { key: "wednesday", label: "Miércoles" },
    { key: "thursday", label: "Jueves" },
    { key: "friday", label: "Viernes" },
    { key: "saturday", label: "Sábado" },
    { key: "sunday", label: "Domingo" },
  ];
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
        <div className="flex gap-2 items-center">
          <Clock />
          <div className="flex flex-col">
            <h2 className="text-sm">Horarios de Atención</h2>
            <p className="text-xs">
              {" "}
              Define los horarios de apertura de tu tienda
            </p>
          </div>
        </div>
        <Button size="sm" startContent={<Edit className="size-4" />}>
          Editar horarios de Atención
        </Button>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Alert
          title="Sobre los horarios"
          description={`Los horarios se mostrarán públicamente en tu tienda. Si marcas "Cerrado", ese día
                        aparecerá como no disponible.`}
          hideIcon
          startContent={<Info />}
          color="warning"
        />
        {daysOfWeek.map((day) => (
          <div
            key={day.key}
            className="flex flex-col gap-4 rounded-lg bg-content2 p-4 sm:flex-row sm:items-center"
          >
            <div className="min-w-[120px]">
              <p className="text-base font-medium bg-content4 p-2 rounded-md text-center">
                {day.label}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2">
                <TimeInput label="Desde" />
                <span className="text-muted-foreground">-</span>
                <TimeInput label="Hasta" />
              </div>
              <div className="flex items-center gap-2">
                <Switch id={`closed-${day.key}`}>Cerrado</Switch>
              </div>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
