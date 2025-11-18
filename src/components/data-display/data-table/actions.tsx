import { Button, Tooltip } from "@heroui/react";
import { Edit, Eye, FileType, Table, Trash } from "lucide-react";

interface ActionsProps<T> {
  item: T;
  onView?: (item: T) => void;
  onViewLabel?: string;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onPdfExportItem?: (item: T) => void;
  onExcelExportItem?: (item: T) => void;
}

export default function Actions<T>({
  item,
  onDelete,
  onEdit,
  onView,
  onPdfExportItem,
  onExcelExportItem,
}: ActionsProps<T>) {
  return (
    <div className="flex gap-4">
      <div className="flex gap-2">
        {onView && (
          <Tooltip content="Ver registro" closeDelay={10}>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onPress={() => onView(item)}
            >
              <Eye className="size-4" />
            </Button>
          </Tooltip>
        )}
        {onEdit && (
          <Tooltip content="Editar registro" closeDelay={10}>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onPress={() => onEdit(item)}
            >
              <Edit className="size-4" />
            </Button>
          </Tooltip>
        )}
        {onDelete && (
          <Tooltip content="Eliminar registro" closeDelay={10} color="danger">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              color="danger"
              onPress={() => onDelete(item)}
            >
              <Trash className="size-4" />
            </Button>
          </Tooltip>
        )}
      </div>
      <div className="flex gap-2">
        {onPdfExportItem && (
          <Tooltip content="Exportar registro a PDF" closeDelay={10}>
            <Button
              isIconOnly
              size="sm"
              variant="solid"
              onPress={() => onPdfExportItem(item)}
            >
              <FileType className="size-4" />
            </Button>
          </Tooltip>
        )}
        {onExcelExportItem && (
          <Tooltip
            content="Exportar registro a Hoja de cálculos (Excel)"
            closeDelay={10}
          >
            <Button
              isIconOnly
              size="sm"
              variant="solid"
              onPress={() => onExcelExportItem(item)}
            >
              <Table className="size-4" />
            </Button>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
