import React from "react";
import Link from "next/link";

const loggedIn = false;

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white flex justify-between px-10 py-5 items-center">
        <h1 className="text-3xl font-bold">QuickUI</h1>
        <div className="space-x-4 uppercase text-sm font-bold hidden sm:block">
          {loggedIn ? (
            <>
              <Link href="/">
                <a className="hover:bg-gray-700 p-2 rounded duration-150">
                  search
                </a>
              </Link>
              <Link href="/new">
                <a className="hover:bg-gray-700 p-2 rounded duration-150">
                  create new post
                </a>
              </Link>
              <Link href="#">
                <a className="hover:bg-gray-700 p-2 rounded duration-150">
                  logout
                </a>
              </Link>
            </>
          ) : (
            <>
              <Link href="/signup">
                <a className="hover:bg-gray-700 p-2 rounded duration-150">
                  Sign Up
                </a>
              </Link>
              <Link href="/signin">
                <a className="hover:bg-gray-700 p-2 rounded duration-150">
                  Sign In
                </a>
              </Link>
            </>
          )}
        </div>
        <div
          className="cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-8 h-8">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </nav>
      <div
        className={`uppercase text-sm font-bold bg-gray-900 text-white px-10 py-2 duration-150 ${
          open ? "block" : "hidden"
        }`}
      >
        <Link href="/">
          <a className="hover:bg-gray-700 p-2 rounded duration-150 block">
            search
          </a>
        </Link>
        <Link href="/new">
          <a className="hover:bg-gray-700 p-2 rounded duration-150 block">
            create new post
          </a>
        </Link>
        <Link href="#">
          <a className="hover:bg-gray-700 p-2 rounded duration-150 block">
            logout
          </a>
        </Link>
      </div>
    </>
  );
}
