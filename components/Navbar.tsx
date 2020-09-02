import React from "react";
import Link from "next/link";
import { AuthContext } from "context/AuthContext";
import { Auth } from "aws-amplify";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const { user } = React.useContext(AuthContext);

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-5 text-white bg-gray-900">
        <h1 className="text-3xl font-bold">QuickUI</h1>
        <div className="hidden space-x-4 text-sm font-bold uppercase sm:block">
          {user ? (
            <>
              <Link href="/">
                <a className="p-2 duration-150 rounded hover:bg-gray-700">
                  search
                </a>
              </Link>
              <Link href="/new">
                <a className="p-2 duration-150 rounded hover:bg-gray-700">
                  create new post
                </a>
              </Link>

              <a
                className="p-2 duration-150 rounded cursor-pointer hover:bg-gray-700"
                onClick={async () => {
                  await Auth.signOut();
                }}
              >
                logout
              </a>
            </>
          ) : (
            <>
              <Link href="/signup">
                <a className="p-2 duration-150 rounded hover:bg-gray-700">
                  Sign Up
                </a>
              </Link>
              <Link href="/signin">
                <a className="p-2 duration-150 rounded hover:bg-gray-700">
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
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 menu">
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
          <a className="block p-2 duration-150 rounded hover:bg-gray-700">
            search
          </a>
        </Link>
        <Link href="/new">
          <a className="block p-2 duration-150 rounded hover:bg-gray-700">
            create new post
          </a>
        </Link>
        <a className="block p-2 duration-150 rounded hover:bg-gray-700">
          logout
        </a>
      </div>
    </>
  );
}
