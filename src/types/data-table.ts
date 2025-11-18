import { ReactNode } from "react";

export type ValidKeyTypes =
  | string
  | number
  | boolean
  | null
  | undefined
  | Date
  | []
  | object;

export type BaseRowValue = ValidKeyTypes | { [key: string]: ValidKeyTypes };

export interface BaseRow {
  id: string | number;
  [key: string]: BaseRowValue;
}

export interface Column<T> {
  key: keyof T | "actions" | string;
  label: string;
  align?: "start" | "center" | "end";
  width?: string | number;
}

export interface DataTableProps<T extends BaseRow> {
  columns: Column<T>[];
  rows: T[];
  totalCount?: number;
  page?: number;
  onPageChange?: (page: number) => void;
  itemsPerPage?: number;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  headerActions?: ReactNode;
  columnsActions?: boolean;
  searchable?: boolean;
  searchQuery?: string;
  onSearchQueryChange?: (query: string) => void;
  isLoading?: boolean;
  isCompact?: boolean;
  layout?: "auto" | "fixed";
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;

  onPdfExportItem?: (item: T) => void;
  onExcelExportItem?: (item: T) => void;
}
