import { Pagination, Select, SelectItem } from "@heroui/react";

interface BottomContentProps {
  pages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
  isLoading?: boolean;
  itemsPerPage?: number;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
}

export default function BottomContent({
  pages,
  currentPage,
  handleChangePage,
  isLoading,
  itemsPerPage,
  onItemsPerPageChange,
}: BottomContentProps) {
  return (
    <div className="flex justify-between w-full p-4">
      {itemsPerPage && onItemsPerPageChange ? (
        <div className="flex min-w-xs justify-start items-center">
          <Select size="sm" value={itemsPerPage} className="w-1/3">
            <SelectItem>5</SelectItem>
            <SelectItem>10</SelectItem>
            <SelectItem>20</SelectItem>
            <SelectItem>50</SelectItem>
            <SelectItem>100</SelectItem>
          </Select>
          <div className="flex flex-col w-full">
            <h4 className="font-bold text-sm text-center text-default-700">
              {itemsPerPage} <span className="font-normal">de</span> 100
            </h4>
            <p className="text-sm w-full text-center text-default-600">
              Registros por pagina
            </p>
          </div>
        </div>
      ) : null}
      {pages > 1 ? (
        <Pagination
          className="w-full"
          aria-label="pagination"
          variant="flat"
          color="primary"
          showControls
          total={pages}
          page={currentPage}
          onChange={handleChangePage}
          isDisabled={isLoading}
        />
      ) : null}
    </div>
  );
}
