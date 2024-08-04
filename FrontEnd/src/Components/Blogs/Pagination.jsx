function Pagination({ blogs, currentPage, pageSize, onPageChange }) {
  const totalpage = Math.ceil(blogs.length / pageSize);

  const renderPagination = () => {
    return Array.from({ length: totalpage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber === currentPage ? "active" : ""}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <ul>
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          previous
        </button>
      </li>
      <div>{renderPagination()}</div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalpage}
      >
        Next
      </button>
    </ul>
  );
}

export default Pagination;
