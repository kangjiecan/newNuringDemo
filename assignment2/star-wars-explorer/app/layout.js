import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Star Wars Explorer',
  description: 'Explore characters and planets from the Star Wars universe',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100 bg-dark text-white">
        <Header />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}