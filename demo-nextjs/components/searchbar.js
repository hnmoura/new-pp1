// components/SearchBar.js
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} style={styles.searchBar}>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.searchInput}
      />
      <button type="submit" style={styles.searchButton}>
        Buscar
      </button>
    </form>
  );
}

const styles = {
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  searchInput: {
    padding: '10px',
    width: '300px',
    marginRight: '10px',
  },
  searchButton: {
    padding: '10px 20px',
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};
