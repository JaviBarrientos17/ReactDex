import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <span className="icon" role="img" aria-label="leftEmoji">👈</span>
      </button>
      {page} de {totalPages}
      <button className="pagination-btn" onClick={onRightClick}>
        <span className="icon" role="img" aria-label="rightEmoji">👉</span>
      </button>
    </div>
  );
};

export default Pagination;