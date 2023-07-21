import React, { useState } from "react";



export function Pagination({ itemsPerPage, totalItems }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-row justify-center mt-11 mb-[3.438rem]">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClick(pageNumber)}
          className={pageNumber === currentPage ?
            'active text-[2.083rem] text-primary w-[3.938rem] h-[3.938rem] rounded-full border-primary border-[0.094rem] flex items-center justify-center m-[0.531rem] hover:bg-primary hover:text-white'
            : 'text-[2.083rem] w-[3.938rem] h-[3.938rem] rounded-full border-gray text-gray border-[0.094rem] flex items-center justify-center m-[0.531rem] hover:bg-primary hover:text-white hover:border-primary'}
        >
          {pageNumber}</button>
      ))}
    </div>
  );
};