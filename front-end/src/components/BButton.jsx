import React from 'react'

function BButton({children, onClick = () => {
  
} }) {
  return (
        <button 
                className={`btn-sm  bg-black text-white shadow hover:bg-gray-700 px-3 py-2 rounded `}
                href="/signin"
              >
                { children}
        </button>
  )
}

export default BButton