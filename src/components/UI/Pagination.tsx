
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  pageSizes: number[];
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageSize,
  pageSizes,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {
  const generatePages = () => {
    const delta = 2;
    const range: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== "...") {
        range.push("...");
      }
    }

    return range;
  };

  const pagesToShow = generatePages();

  return (
    <div className="flex work-sans flex-col md:flex-row justify-between items-center gap-4 px-4 py-6 w-full mb-10">
      {/* Page size selector */}
      <div className="flex items-center text-sm">
        <span className="mr-2">Showing</span>
        <div className="bg-[#213f7d]/10 rounded-md w-18 px-2 py-1">
          <select
            value={pageSize}
            onChange={(e) => {
              onPageSizeChange(Number(e.target.value));
              onPageChange(1); // reset to first page when pageSize changes
            }}
            className="w-full rounded-md text-sm focus:outline-none focus:ring-0 bg-transparent"
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <span className="ml-2">out of {totalItems}</span>
      </div>

      {/* Pagination buttons */}
      <div className="flex items-center space-x-2 text-sm">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-[#213f7d]/10 rounded-md disabled:opacity-50"
        >
          <IoIosArrowBack size={16} />
        </button>

        {/* Page numbers */}
        {pagesToShow.map((p, i) =>
          typeof p === "string" ? (
            <span key={`ellipsis-${i}`} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              aria-current={currentPage === p ? "page" : undefined}
              className={`px-3 py-1 rounded-md transition ${
                currentPage === p
                  ? "bg-[#213f7d] text-white"
                  : "bg-[#213f7d]/10 text-[#213f7d]"
              }`}
            >
              {p}
            </button>
          )
        )}

        {/* Next button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 bg-[#213f7d]/10 text-color rounded-md disabled:opacity-50"
        >
          <IoIosArrowForward size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
