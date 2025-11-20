import * as XLSX from "xlsx";
import { Column } from "@/types/data-table";
import { ExcelExportOptions } from "@/types/export";

const getNestedValue = (obj: any, path: string): any => {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, obj);
};

const formatValue = (value: unknown): string => {
  if (value === null || value === undefined) {
    return "";
  }
  if (value instanceof Date) {
    return value.toLocaleString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  if (typeof value === "boolean") {
    return value ? "Sí" : "No";
  }
  if (typeof value === "object") {
    if ("name" in value) return String(value.name);
    if ("label" in value) return String(value.label);
    return JSON.stringify(value);
  }
  return String(value);
};

const generateFilename = (basename: string, extension: string): string => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, -5);
  return `${basename}_${timestamp}.${extension}`;
};

export const exportToExcel = <T extends Record<string, any>>({
  data,
  columns,
  filename = "export",
  sheetName = "Datos",
}: ExcelExportOptions<T>): void => {
  try {
    const visibleColumns = columns.filter(
      (col) => col.key !== "actions" && col.key !== "image"
    );

    const worksheetData = data.map((item) => {
      const row: Record<string, any> = {};
      visibleColumns.forEach((col) => {
        const value = getNestedValue(item, col.key as string);
        row[col.label] = formatValue(value);
      });
      return row;
    });

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);

    const maxWidth = 50;
    const minWidth = 10;
    const columnWidths = visibleColumns.map((col) => {
      const headerLength = col.label.length;
      const maxDataLength = Math.max(
        ...data.map((item) => {
          const value = getNestedValue(item, col.key as string);
          return formatValue(value).length;
        })
      );
      const width = Math.max(headerLength, maxDataLength, minWidth);
      return { wch: Math.min(width, maxWidth) };
    });
    worksheet["!cols"] = columnWidths;

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    XLSX.writeFile(workbook, generateFilename(filename, "xlsx"));
  } catch (error) {
    console.error("Error al exportar a Excel:", error);
    throw new Error("No se pudo generar el archivo Excel");
  }
};

export const exportItemToExcel = <T extends Record<string, any>>({
  item,
  columns,
  filename = "registro",
  sheetName = "Detalle",
}: {
  item: T;
  columns: Column<T>[];
  filename?: string;
  sheetName?: string;
}): void => {
  try {
    const visibleColumns = columns.filter(
      (col) => col.key !== "actions" && col.key !== "image"
    );

    const worksheetData = visibleColumns.map((col) => ({
      Campo: col.label,
      Valor: formatValue(getNestedValue(item, col.key as string)),
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);

    worksheet["!cols"] = [{ wch: 25 }, { wch: 50 }];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    XLSX.writeFile(workbook, generateFilename(filename, "xlsx"));
  } catch (error) {
    console.error("Error al exportar registro a Excel:", error);
    throw new Error("No se pudo generar el archivo Excel");
  }
};
