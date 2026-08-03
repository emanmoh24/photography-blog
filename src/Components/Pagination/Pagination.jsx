import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers array [1, 2, 3, 4, 5]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center gap-3 text-white font-sans" dir="rtl">
      {/* Buttons Container */}
      <div className="flex items-center gap-2">
        {/* Next Button (Points Left in RTL layout) */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded-2xl bg-[#18181b] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          aria-label="الصفحة التالية"
        >
          <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center font-medium transition-all ${
              currentPage === page
                ? 'bg-[#ff5500] text-white shadow-lg shadow-orange-500/20'
                : 'bg-[#18181b] border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Previous Button (Points Right in RTL layout) */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-2xl bg-[#18181b] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          aria-label="الصفحة السابقة"
        >
          <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      {/* Page Counter Label */}
      <span className="text-zinc-400 text-sm">
        صفحة {currentPage} من {totalPages}
      </span>
    </div>
  );
};

export default Pagination;