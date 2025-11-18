import { Pagination } from "@heroui/react";

interface BottomContentProps {
  pages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
  isLoading?: boolean;
}

export default function BottomContent({
  pages,
  currentPage,
  handleChangePage,
  isLoading,
}: BottomContentProps) {
  return (
    <div className="flex justify-center w-full">
      {pages > 1 ? (
        <Pagination
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
