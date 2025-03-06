import Link from 'next/link';
import { extractIdFromUrl } from '../lib/api';

export default function CharacterCard({ character }) {
  const characterId = extractIdFromUrl(character.url);
  const planetId = character.homeworld ? extractIdFromUrl(character.homeworld) : null;
  
  return (
    <div className="card bg-dark text-white border-secondary h-100">
      <div className="card-body">
        <h2 className="card-title text-warning fw-bold mb-3">{character.name}</h2>
        <div className="mb-3">
          <p><span className="text-secondary">Gender:</span> {character.gender}</p>
          <p><span className="text-secondary">Birth Year:</span> {character.birth_year}</p>
          {planetId && (
            <p>
              <span className="text-secondary">Homeworld:</span>{' '}
              <Link href={`/planets/${planetId}`} className="text-info">
                View Planet
              </Link>
            </p>
          )}
        </div>
        <Link href={`/characters/${characterId}`} className="btn btn-warning">
          View Details
        </Link>
      </div>
    </div>
  );
}