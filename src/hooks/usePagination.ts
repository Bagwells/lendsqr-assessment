
import { useState, useMemo } from "react";

export const usePagination = <T>(
  data: T[],
  defaultPageSize = 10,
  pageSizes = [10, 25, 50, 100]
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1); 
  };

  return {
    paginatedData,
    currentPage,
    pageSize,
    totalPages,
    totalItems,
    pageSizes,
    onPageChange: handlePageChange,
    onPageSizeChange: handlePageSizeChange,
  };
};
