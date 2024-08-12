import React from "react";

function Nav() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center">
            <a className="inline-flex" aria-label="Cruip" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <path
                  className="fill-blue-500"
                  fill-rule="evenodd"
                  d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  className="fill-blue-300"
                  fill-rule="evenodd"
                  d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50 px-3 py-2 rounded "
                href="/signin"
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900 px-3 py-2 rounded"
                href="/signup"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
