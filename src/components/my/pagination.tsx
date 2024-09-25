import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 mx-1 rounded ${
              i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 mx-1 rounded ${
              i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {i}
          </button>
        );
      }
      pageNumbers.push(<span key="ellipsis-1">...</span>);

      // Add last pages
      for (let i = totalPages - 2; i <= totalPages; i++) {
        if (i > 3) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`px-3 py-1 mx-1 rounded ${
                i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {i}
            </button>
          );
        }
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={`px-3 py-1 mx-1 rounded ${
            totalPages === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="mt-4 flex items-center">
      {currentPage > 1 && (
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <ArrowLeft />
        </button>
      )}

      {renderPageNumbers()}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
