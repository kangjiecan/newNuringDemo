"use client";

import { useState, useEffect } from 'react';
import CharacterCard from '../../components/CharacterCard';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { fetchCharacters, searchCharacters } from '../../lib/api';

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState({
    next: null,
    previous: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async (url = null) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchCharacters(url);
      setCharacters(data.results);
      setPagination({
        next: data.next,
        previous: data.previous,
      });
      setIsSearchMode(false);
    } catch (err) {
      setError('Failed to load characters. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      return loadCharacters();
    }
    
    setSearchQuery(query);
    setLoading(true);
    setError(null);
    
    try {
      const data = await searchCharacters(query);
      setCharacters(data.results);
      setPagination({
        next: data.next,
        previous: data.previous,
      });
      setIsSearchMode(true);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (url) => {
    if (url) {
      loadCharacters(url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-sw-yellow mb-6">Star Wars Characters</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      {isSearchMode && (
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-300">
            Search results for: <span className="text-sw-yellow">{searchQuery}</span>
          </p>
          <button
            onClick={() => loadCharacters()}
            className="text-blue-400 hover:text-sw-yellow"
          >
            Clear search
          </button>
        </div>
      )}
      
      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sw-yellow"></div>
        </div>
      ) : error ? (
        <div className="bg-red-900 text-white p-4 rounded-md my-6">
          {error}
        </div>
      ) : characters.length === 0 ? (
        <div className="text-center my-12">
          <p className="text-xl text-gray-400">No characters found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <CharacterCard key={character.url} character={character} />
          ))}
        </div>
      )}
      
      {!loading && characters.length > 0 && (
        <Pagination
          nextUrl={pagination.next}
          prevUrl={pagination.previous}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}