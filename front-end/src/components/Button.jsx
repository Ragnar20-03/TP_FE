import React from 'react';

function Button({ children  }) {
  return (
    <button
    href="#" class="text-base font-normal rounded-md list-none hover:text-gray-900 bg-teal-700 p-2 text-white hover:text-white">
        {children}
    </button>

  );
}

export default Button;
