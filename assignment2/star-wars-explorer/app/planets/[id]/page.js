import Link from 'next/link';
import { fetchPlanet } from '../../../lib/api';

export async function generateMetadata({ params }) {
  params = await params;
  const planet = await fetchPlanet(params.id);
  return {
    title: `${planet.name} | Star Wars Explorer`,
    description: `Learn about the planet ${planet.name} from Star Wars`,
  };
}

export default async function PlanetPage({ params }) {
  params = await params;
  const planet = await fetchPlanet(params.id);

  return (
    <div className="container py-4">
      <Link
        href="/characters"
        className="text-info mb-4 d-inline-block"
      >
        &larr; Back to all characters
      </Link>

      <div className="card bg-dark border-secondary shadow mb-4">
        <div className="card-body p-4">
          <h1 className="card-title text-warning fw-bold mb-4 display-5">{planet.name}</h1>
          
          <div className="row g-4">
            <div className="col-md-6">
              <h2 className="h4 fw-semibold mb-3 text-white">Planet Information</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><span className="text-secondary">Rotation Period:</span> <span className="text-white">{planet.rotation_period} hours</span></li>
                <li className="mb-2"><span className="text-secondary">Orbital Period:</span> <span className="text-white">{planet.orbital_period} days</span></li>
                <li className="mb-2"><span className="text-secondary">Diameter:</span> <span className="text-white">{planet.diameter} km</span></li>
                <li className="mb-2"><span className="text-secondary">Climate:</span> <span className="text-white">{planet.climate}</span></li>
                <li className="mb-2"><span className="text-secondary">Gravity:</span> <span className="text-white">{planet.gravity}</span></li>
              </ul>
            </div>
            
            <div className="col-md-6">
              <h2 className="h4 fw-semibold mb-3 text-white">Surface Information</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><span className="text-secondary">Terrain:</span> <span className="text-white">{planet.terrain}</span></li>
                <li className="mb-2"><span className="text-secondary">Surface Water:</span> <span className="text-white">{planet.surface_water}%</span></li>
                <li className="mb-2"><span className="text-secondary">Population:</span> <span className="text-white">{planet.population}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}