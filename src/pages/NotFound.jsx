import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="my-4">Page not found.</p>

      <Link
        to="/"
        className="bg-pink-600 text-white px-5 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}