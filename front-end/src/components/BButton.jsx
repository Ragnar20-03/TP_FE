import React from "react";

function BButton({ children, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className={`btn-sm  bg-green-600 text-white shadow hover:bg-green-700 px-3 py-2 rounded `}
      href="/signin"
    >
      {children}
    </button>
  );
}

export default BButton;
