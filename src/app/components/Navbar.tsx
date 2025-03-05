import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green items-center text-green flex justify-center pt-3">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-green transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-green transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-green transition-colors">
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/communities"
            className="hover:text-green transition-colors"
          >
            Communities
          </Link>
        </li>
        <li>
          <Link
            href="/task-history"
            className="hover:text-green transition-colors"
          >
            Task History
          </Link>
        </li>
      </ul>
    </nav>
  );
}
