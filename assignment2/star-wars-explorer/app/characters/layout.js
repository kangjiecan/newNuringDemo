export const metadata = {
    title: 'Characters | Star Wars Explorer',
    description: 'Browse characters from the Star Wars universe',
  };
  
  export default function CharactersLayout({ children }) {
    return (
      <div className="page-container">
        {children}
      </div>
    );
  }