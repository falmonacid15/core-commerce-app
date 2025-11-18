"use client";

import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useState } from "react";
import Actions from "./actions";
import { Icon } from "@iconify/react";
import { BaseRow, DataTableProps } from "@/types/data-table";
import ImageContent from "./custom/image-content";
import TopContent from "./top-content";
import BottomContent from "./bottom-content";
import EmptyContent from "./empy-content";
import LoadingContent from "./loading-content";
import { roleDictionary } from "@/constants/dictionaries";

export default function DataTable<T extends BaseRow>({
  rows,
  columns,
  page = 1,
  onPageChange,
  totalCount,
  itemsPerPage = 5,
  onItemsPerPageChange,
  headerActions,
  columnsActions,
  searchable,
  searchQuery,
  onSearchQueryChange,
  isLoading,
  layout,
  isCompact,
  onView,
  onEdit,
  onDelete,
  onExcelExportItem,
  onPdfExportItem,
}: DataTableProps<T>) {
  const [localPage, setLocalPage] = useState(1);

  const [visibleColumns, setVisibleColumns] = useState<Set<string>>(
    new Set(columns.map((col) => col.key.toString()))
  );

  const isServerPagination = !!onPageChange;
  const currentPage = isServerPagination ? page : localPage;

  const handlePageChange = (page: number) => {
    if (isServerPagination) {
      onPageChange(page);
    } else {
      setLocalPage(page);
    }
  };

  const totalItems = totalCount ?? rows.length;
  const pages = Math.ceil(totalItems / itemsPerPage) || 1;

  const currentRows = isServerPagination
    ? rows
    : rows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const filteredColumns = columns.filter((column) =>
    visibleColumns.has(column.key.toString())
  );

  const formatValue = (value: unknown): string => {
    if (value instanceof Date) {
      return value.toLocaleString();
    }
    if (value === null || value === undefined) {
      return "";
    }
    if (typeof value === "object") {
      return JSON.stringify(value);
    }
    return String(value);
  };

  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, key) => {
      if (acc && typeof acc === "object" && key in acc) {
        return acc[key];
      }
      return undefined;
    }, obj);
  };

  const renderCell = (item: T, columnKey: keyof T | "actions") => {
    const value = getNestedValue(item, columnKey as string);
    if (columnKey === "actions") {
      return (
        <Actions
          item={item}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onExcelExportItem={onExcelExportItem}
          onPdfExportItem={onPdfExportItem}
        />
      );
    }
    if (columnKey === "role") {
      return <Chip>{roleDictionary[value]}</Chip>;
    }

    if (columnKey === "image") {
      return (
        <ImageContent name={item.name as string} image={item.image as string} />
      );
    }

    if (columnKey === "icon") {
      return <Icon icon={value} className="size-6" />;
    }

    return formatValue(value);
  };

  return (
    <Table
      aria-label="data-table"
      isStriped
      layout={layout}
      isCompact={isCompact}
      topContent={
        <TopContent
          searchable={searchable}
          searchQuery={searchQuery}
          onSearchQueryChange={onSearchQueryChange}
          headerActions={headerActions}
          columnsActions={columnsActions}
          columns={columns}
          visibleColumns={visibleColumns}
          onVisibleColumnsChange={setVisibleColumns}
          onExcelExportItem={onExcelExportItem}
          onPdfExportItem={onPdfExportItem}
        />
      }
      bottomContent={
        <BottomContent
          pages={pages}
          currentPage={currentPage}
          handleChangePage={handlePageChange}
          isLoading={isLoading}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
        />
      }
    >
      <TableHeader columns={filteredColumns}>
        {(column) => (
          <TableColumn key={column.key.toString()} align={column.align}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={currentRows}
        emptyContent={isLoading ? null : <EmptyContent />}
        isLoading={isLoading}
        loadingContent={<LoadingContent />}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof T | "actions")}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
