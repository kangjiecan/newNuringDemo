import Link from "next/link";

export default function Home() {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="text-center py-5">
        <h1 className="display-3 fw-bold text-warning mb-4">
          Star Wars Explorer
        </h1>
        <p className="lead text-light mb-5 mx-auto" style={{ maxWidth: "700px" }}>
          Welcome to the Star Wars Explorer. 
        </p>
        <div className="d-flex justify-content-center gap-3 mb-5">
          <Link href="/characters" className="btn btn-warning fw-bold">
            Explore Characters
          </Link>
          <Link href="/contact" className="btn btn-outline-warning">
            Contact Us
          </Link>
        </div>
        <div className="mt-5">
          <h2 className="h3 fw-bold text-light mb-3">About this App</h2>
          <p className="text-light mx-auto" style={{ maxWidth: "700px" }}>
            This application was built using Next.js and the Star Wars API
            (SWAPI). It demonstrates routing, dynamic routes, server components,
            and more.
          </p>
        </div>
      </div>
    </div>
  );
}