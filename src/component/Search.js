import React, { useState } from 'react';

const Search = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearch(inputValue);
    setInputValue(''); // Clear the input field after saving the search value
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="border border-black border-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-96 p-2 outline-none"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;