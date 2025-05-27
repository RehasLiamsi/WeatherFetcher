import React from 'react';

function SearchBar({ city, onCityChange, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        onSearch();
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                value={city}
                onChange={onCityChange}
                placeholder="e.g., London"
                className="flex-grow p-2 rounded-l-lg border border-gray-300 outline-none"
            />
            <button
                type="submit"
                className="bg-emerald-500 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-600 transition"
            >
                Get Weather
            </button>
        </form>
    );
}

export default SearchBar;
