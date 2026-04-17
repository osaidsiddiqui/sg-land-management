import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-rye text-7xl text-ink">404</h1>
        <h2 className="mt-4 font-display text-2xl text-ink">Page not found</h2>
        <p className="mt-2 text-warm">That page got buried — let's dig you back home.</p>
        <Link to="/" className="btn-rust mt-6 inline-block">Go Home</Link>
      </div>
    </div>
  );
}
