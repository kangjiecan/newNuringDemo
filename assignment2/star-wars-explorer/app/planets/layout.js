export const metadata = {
    title: 'Planets | Star Wars Explorer',
    description: 'Explore planets from the Star Wars universe',
  };
  
  export default function PlanetsLayout({ children }) {
    return (
      <div className="page-container">
        {children}
      </div>
    );
  }