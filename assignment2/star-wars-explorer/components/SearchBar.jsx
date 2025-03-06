"use client";

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by character name..."
          aria-label="Search by character name"
        />
        <button 
          type="submit" 
          className="btn btn-warning"
        >
          Search
        </button>
      </div>
    </form>
  );
}