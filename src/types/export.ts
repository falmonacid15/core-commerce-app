import { Column } from "./data-table";

export interface ExportConfig {
  filename?: string;
  title?: string;
  orientation?: "portrait" | "landscape";
  pageSize?: "a4" | "letter" | "legal";
}

export interface PDFExportOptions<T> extends ExportConfig {
  data: T[];
  columns: Column<T>[];
  includeDate?: boolean;
  customHeader?: string;
}

export interface ExcelExportOptions<T> extends ExportConfig {
  data: T[];
  columns: Column<T>[];
  sheetName?: string;
}
