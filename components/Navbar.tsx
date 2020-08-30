import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between px-10 py-5 items-center">
      <h1 className="text-3xl font-bold">QuickUI</h1>
      <div className="space-x-4 uppercase text-sm font-bold hidden sm:block">
        <Link href="/">search</Link>
        <Link href="/new">create new post</Link>
        <Link href="#">logout</Link>
      </div>
      <div className="cursor-pointer sm:hidden">
        <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-8 h-8">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </nav>
  );
}
