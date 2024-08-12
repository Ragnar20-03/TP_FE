import React from 'react'

function BButton({children, onClick = () => {

} }) {
  return (
        <button 
                className={`btn-sm  bg-teal-700 text-white shadow hover:bg-teal-600 px-3 py-2 rounded `}
                href="/signin"
              >
                { children}
        </button>
  )
}

export default BButton