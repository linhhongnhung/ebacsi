import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
  }

  return (
      <div className="flex flex-row justify-center mt-11 mb-[3.438rem]">
          {pageNumbers.map((pageNumber) => (
              <button
                  key={pageNumber}
                  onClick={() => onPageChange(pageNumber)}
                  className={pageNumber === currentPage ?
                      'active text-[2.083rem] text-primary w-[3.938rem] h-[3.938rem] rounded-full border-primary border-[0.094rem] flex items-center justify-center m-[0.531rem] hover:bg-primary hover:text-white'
                      : 'text-[2.083rem] w-[3.938rem] h-[3.938rem] rounded-full border-gray text-gray border-[0.094rem] flex items-center justify-center m-[0.531rem] hover:bg-primary hover:text-white hover:border-primary'}
              >
                  {pageNumber}</button>
          ))}
      </div>
  );
};

export default Pagination;