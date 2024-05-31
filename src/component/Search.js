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
    <div style={{width: "100vw"}} className="flex justify-center">
      <div className='border border-black border-2 flex lg:w-2/5 md:w-3/5 sm:w-full '>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 outline-none"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white" onClick={handleSearch}>
        Search
      </button>
      </div>
    </div>
  );
};

export default Search;