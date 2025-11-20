import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Column } from "@/types/data-table";
import { PDFExportOptions } from "@/types/export";

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

export const exportToPDF = <T extends Record<string, any>>({
  data,
  columns,
  filename = "export",
  title = "Reporte",
  orientation = "portrait",
  pageSize = "a4",
  includeDate = true,
  customHeader,
}: PDFExportOptions<T>): void => {
  try {
    const doc = new jsPDF({
      orientation,
      unit: "mm",
      format: pageSize,
    });

    doc.setFont("helvetica");

    let currentY = 15;

    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text(title, 14, currentY);
    currentY += 10;

    if (includeDate) {
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      const date = new Date().toLocaleString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      doc.text(`Fecha de generación: ${date}`, 14, currentY);
      currentY += 8;
    }

    if (customHeader) {
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text(customHeader, 14, currentY);
      currentY += 8;
    }

    const visibleColumns = columns.filter(
      (col) => col.key !== "actions" && col.key !== "image"
    );

    const headers = visibleColumns.map((col) => col.label);

    const rows = data.map((item) =>
      visibleColumns.map((col) => {
        const value = getNestedValue(item, col.key as string);
        return formatValue(value);
      })
    );

    autoTable(doc, {
      head: [headers],
      body: rows,
      startY: currentY,
      styles: {
        fontSize: 9,
        cellPadding: 3,
        overflow: "linebreak",
        halign: "left",
      },
      headStyles: {
        fillColor: [66, 66, 66],
        textColor: [255, 255, 255],
        fontStyle: "bold",
        halign: "center",
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      margin: { top: 10, right: 14, bottom: 10, left: 14 },
      theme: "striped",
      didDrawPage: (data) => {
        const pageCount = doc.getNumberOfPages();
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(
          `Página ${data.pageNumber} de ${pageCount}`,
          doc.internal.pageSize.width / 2,
          doc.internal.pageSize.height - 10,
          { align: "center" }
        );
      },
    });

    // Guardar PDF
    doc.save(generateFilename(filename, "pdf"));
  } catch (error) {
    console.error("Error al exportar a PDF:", error);
    throw new Error("No se pudo generar el archivo PDF");
  }
};

export const exportItemToPDF = <T extends Record<string, any>>({
  item,
  columns,
  filename = "registro",
  title = "Detalle del Registro",
  orientation = "portrait",
  pageSize = "a4",
}: {
  item: T;
  columns: Column<T>[];
  filename?: string;
  title?: string;
  orientation?: "portrait" | "landscape";
  pageSize?: "a4" | "letter" | "legal";
}): void => {
  try {
    const doc = new jsPDF({
      orientation,
      unit: "mm",
      format: pageSize,
    });

    doc.setFont("helvetica");

    let currentY = 15;

    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text(title, 14, currentY);
    currentY += 10;

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const date = new Date().toLocaleString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    doc.text(`Fecha: ${date}`, 14, currentY);
    currentY += 10;

    const visibleColumns = columns.filter(
      (col) => col.key !== "actions" && col.key !== "image"
    );

    const rows = visibleColumns.map((col) => {
      const value = getNestedValue(item, col.key as string);
      return [col.label, formatValue(value)];
    });

    autoTable(doc, {
      body: rows,
      startY: currentY,
      styles: {
        fontSize: 10,
        cellPadding: 4,
      },
      columnStyles: {
        0: {
          fontStyle: "bold",
          cellWidth: 60,
          fillColor: [240, 240, 240],
        },
        1: {
          cellWidth: "auto",
        },
      },
      theme: "plain",
      margin: { top: 10, right: 14, bottom: 10, left: 14 },
    });

    doc.save(generateFilename(filename, "pdf"));
  } catch (error) {
    console.error("Error al exportar registro a PDF:", error);
    throw new Error("No se pudo generar el archivo PDF");
  }
};
