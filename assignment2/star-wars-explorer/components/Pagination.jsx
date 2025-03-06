"use client";

export default function Pagination({ nextUrl, prevUrl, onPageChange }) {
  return (
    <div className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item ${!prevUrl ? 'disabled' : ''}`}>
          <button
            onClick={() => onPageChange(prevUrl)}
            disabled={!prevUrl}
            className="page-link bg-dark text-white border-secondary"
            aria-label="Previous"
          >
            <span aria-hidden="true">Previous</span>
          </button>
        </li>
        <li className={`page-item ${!nextUrl ? 'disabled' : ''}`}>
          <button
            onClick={() => onPageChange(nextUrl)}
            disabled={!nextUrl}
            className="page-link bg-dark text-white border-secondary"
            aria-label="Next"
          >
            <span aria-hidden="true">Next</span>
          </button>
        </li>
      </ul>
    </div>
  );
}