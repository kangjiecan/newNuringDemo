export default function Footer() {
    return (
      <footer className="bg-dark border-top border-secondary py-4 mt-auto">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <p className="text-white text-center text-md-start">
                Star Wars Explorer - Created with Next.js
              </p>
            </div>
            <div>
              <p className="text-secondary small text-center text-md-end">
                Data provided by <a href="https://swapi.dev/" target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none">SWAPI</a>
              </p>
              <p className="text-secondary small text-center text-md-end">
                &copy; {new Date().getFullYear()} - This is a demo app
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }