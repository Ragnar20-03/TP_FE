import React from "react";
import { useNavigate } from "react-router-dom";
import WButton from "./WButton";
import BButton from "./BButton";

function Nav() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
          <div className="flex flex-1 items-center">
            <a className="inline-flex" aria-label="Cruip" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                {/* SVG Paths */}
              </svg>
            </a>
            <span className="text-white mx-4 bg-teal-700 rounded-md p-2">
              Go Green
            </span>
          </div>
          <div className="flex justify-center gap-2">
            <WButton>Home</WButton>
            <WButton>About</WButton>
            <WButton>Profile</WButton>
          </div>
          <ul className="flex flex-1 items-center justify-end gap-3">
            {localStorage.getItem("token") ? (
              <li>
                <WButton
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login"); // Navigate to the home page or another route after logout
                  }}
                >
                  Logout
                </WButton>
              </li>
            ) : (
              <div className="flex gap-4">
                <li>
                  <WButton
                    onClick={() => {
                      localStorage.setItem("token", "roshan");
                      window.location.reload();
                    }}
                  >
                    Login
                  </WButton>
                </li>
                <li>
                  <BButton>Register</BButton>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
