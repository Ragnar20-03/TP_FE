import React from "react";

function WButton({ children, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className={`btn-sm  bg-white text-gray-800 shadow  px-3 py-2 rounded hover:bg-teal-50 `}
      href="/signin"
    >
      {children}
    </button>
  );
}

export default WButton;
