
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ placeholder = "Search for dish, city or neighborhood", onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
        />
      </div>
    </form>
  );
};

export default SearchBar;
