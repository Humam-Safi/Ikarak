import React from 'react';

const Pagination = ({ current, total, onPageChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        السابق
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${page === current ? 'bg-blue-300' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(current + 1)}
        disabled={current === total}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        التالي
      </button>
    </div>
  );
};

export default Pagination;
