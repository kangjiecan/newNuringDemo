import Link from 'next/link';
import { fetchCharacter, fetchPlanet, extractIdFromUrl } from '../../../lib/api';

export async function generateMetadata({ params }) {
  params = await params;
  const character = await fetchCharacter(params.id);
  return {
    title: `${character.name} | Star Wars Explorer`,
    description: `Learn about ${character.name} from Star Wars`,
  };
}

export default async function CharacterPage({ params }) {
  params = await params;
  const character = await fetchCharacter(params.id);
  
  let homeworld = null;
  if (character.homeworld) {
    homeworld = await fetchPlanet(character.homeworld);
  }
  
  const homeworldId = homeworld ? extractIdFromUrl(homeworld.url) : null;

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
          <h1 className="card-title text-warning fw-bold mb-4 display-5">{character.name}</h1>
          
          <div className="row g-4">
            <div className="col-md-6">
              <h2 className="h4 fw-semibold mb-3 text-white">Personal Information</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><span className="text-secondary">Height:</span> <span className="text-white">{character.height} cm</span></li>
                <li className="mb-2"><span className="text-secondary">Mass:</span> <span className="text-white">{character.mass} kg</span></li>
                <li className="mb-2"><span className="text-secondary">Hair Color:</span> <span className="text-white">{character.hair_color}</span></li>
                <li className="mb-2"><span className="text-secondary">Skin Color:</span> <span className="text-white">{character.skin_color}</span></li>
                <li className="mb-2"><span className="text-secondary">Eye Color:</span> <span className="text-white">{character.eye_color}</span></li>
                <li className="mb-2"><span className="text-secondary">Birth Year:</span> <span className="text-white">{character.birth_year}</span></li>
                <li className="mb-2"><span className="text-secondary">Gender:</span> <span className="text-white">{character.gender}</span></li>
              </ul>
            </div>
            
            <div className="col-md-6">
              <h2 className="h4 fw-semibold mb-3 text-white">Homeworld</h2>
              {homeworld ? (
                <div>
                  <p className="mb-2"><span className="text-secondary">Planet:</span> <span className="text-white">{homeworld.name}</span></p>
                  <p className="mb-2"><span className="text-secondary">Climate:</span> <span className="text-white">{homeworld.climate}</span></p>
                  <p className="mb-2"><span className="text-secondary">Terrain:</span> <span className="text-white">{homeworld.terrain}</span></p>
                  <p className="mb-3"><span className="text-secondary">Population:</span> <span className="text-white">{homeworld.population}</span></p>
                  
                  <Link href={`/planets/${homeworldId}`} className="btn btn-warning">
                    View Planet Details
                  </Link>
                </div>
              ) : (
                <p className="text-secondary">No homeworld information available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}