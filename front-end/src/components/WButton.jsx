import React from 'react'

function WButton({children }) {
  return (
        <button 
                className={`btn-sm  bg-white text-gray-800 shadow hover:bg-gray-50 px-3 py-2 rounded `}
                href="/signin"
              >
                { children}
        </button>
  )
}

export default WButton