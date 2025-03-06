const API_BASE_URL = 'https://swapi.dev/api';

/**
 * Fetch all characters with pagination
 * @param {string|null} url - URL for pagination
 * @returns {Promise<Object>} Response with results and pagination info
 */
export async function fetchCharacters(url = null) {
  const endpoint = url || `${API_BASE_URL}/people/`;
  const response = await fetch(endpoint);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch characters: ${response.statusText}`);
  }
  
  return await response.json();
}

/**
 * Search characters by name
 * @param {string} query - Search query
 * @returns {Promise<Object>} Response with search results
 */
export async function searchCharacters(query) {
  const endpoint = `${API_BASE_URL}/people/?search=${encodeURIComponent(query)}`;
  const response = await fetch(endpoint);
  
  if (!response.ok) {
    throw new Error(`Failed to search characters: ${response.statusText}`);
  }
  
  return await response.json();
}

/**
 * Fetch a single character by ID
 * @param {string} id - Character ID
 * @returns {Promise<Object>} Character data
 */
export async function fetchCharacter(id) {
  const endpoint = `${API_BASE_URL}/people/${id}/`;
  const response = await fetch(endpoint);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch character: ${response.statusText}`);
  }
  
  return await response.json();
}

/**
 * Fetch a planet by URL or ID
 * @param {string} urlOrId - Planet URL or ID
 * @returns {Promise<Object>} Planet data
 */
export async function fetchPlanet(urlOrId) {
  let endpoint;
  
  if (urlOrId.startsWith('http')) {
    endpoint = urlOrId;
  } else {
    endpoint = `${API_BASE_URL}/planets/${urlOrId}/`;
  }
  
  const response = await fetch(endpoint);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch planet: ${response.statusText}`);
  }
  
  return await response.json();
}

/**
 * Extract ID from a SWAPI URL
 * @param {string} url - SWAPI URL
 * @returns {string} ID extracted from URL
 */
export function extractIdFromUrl(url) {
  // URLs are like "https://swapi.dev/api/people/1/"
  const matches = url.match(/\/([0-9]+)\/$/);
  return matches ? matches[1] : null;
}