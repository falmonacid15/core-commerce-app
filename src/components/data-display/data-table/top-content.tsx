import { Column } from "@/types/data-table";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@heroui/react";
import { ChevronDownIcon, Columns, Eye, EyeClosed, Search } from "lucide-react";
import { ReactNode } from "react";

interface TopContentProps {
  headerActions?: ReactNode;
  columnsActions?: boolean;
  searchable?: boolean;
  searchQuery?: string;
  columns: Column<any>[];
  visibleColumns?: Set<string>;
  onVisibleColumnsChange?: (columns: Set<string>) => void;
  onSearchQueryChange?: (query: string) => void;
}

export default function TopContent({
  searchable,
  searchQuery,
  onSearchQueryChange,
  headerActions,
  columnsActions = false,
  columns,
  visibleColumns,
  onVisibleColumnsChange,
}: TopContentProps) {
  return (
    <div className="flex justify-between gap-4 items-center">
      {headerActions && headerActions}
      <div className="flex gap-4 w-full justify-end">
        {columnsActions && visibleColumns && onVisibleColumnsChange && (
          <Dropdown placement="bottom-start">
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ChevronDownIcon className="size-4" />}
                variant="solid"
                startContent={<Columns className="size-4" />}
              >
                Columnas
              </Button>
            </DropdownTrigger>

            <DropdownMenu
              variant="solid"
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={(keys) =>
                onVisibleColumnsChange(keys as Set<string>)
              }
            >
              {columns.map((column) => (
                <DropdownItem
                  key={column.key.toString()}
                  className="capitalize"
                  selectedIcon={(props) => {
                    return props.isSelected ? (
                      <Eye className="size-3.5" />
                    ) : (
                      <EyeClosed className="size-3.5" />
                    );
                  }}
                >
                  {column.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        )}
        {searchable && (
          <Input
            isClearable
            onClear={() => onSearchQueryChange?.("")}
            value={searchQuery}
            onChange={(e) => onSearchQueryChange?.(e.target.value)}
            placeholder="Buscar registros..."
            className="w-1/4"
            startContent={<Search className="size-4" />}
            variant="flat"
          />
        )}
      </div>
    </div>
  );
}
