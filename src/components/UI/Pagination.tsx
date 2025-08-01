
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

const Pagination:React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageSize,
  pageSizes,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {
  // const pageNumbers = [];

  const generatePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) return [1, 2, 3, "...", totalPages];
    if (currentPage >= totalPages - 2) return [1, "...", totalPages - 2, totalPages - 1, totalPages];

    return [1, "...", currentPage, "...", totalPages];
  };

  const pagesToShow = generatePages();

  return (
    <div className="flex work-sans flex-col md:flex-row justify-between items-center gap-4 px-4 py-6 w-full mb-10">
      <div className="flex items-center text-sm">
        <span className="mr-2">Showing</span>
        <div className="bg-[#213f7d]/10 rounded-md w-18 px-2 py-1">
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="w-full rounded-md text-sm focus:outline-none focus:ring-0"
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

      <div className="flex items-center space-x-2 text-sm">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-[#213f7d]/10 rounded-md disabled:opacity-50"
        >
          <IoIosArrowBack size={16} />
        </button>

        {pagesToShow.map((p, i) =>
          typeof p === "string" ? (
            <span key={i} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`px-2 py-1 rounded-md ${
                currentPage === p ? "bg-[#213f7d]/10 text-color" : ""
              }`}
            >
              {p}
            </button>
          )
        )}

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
