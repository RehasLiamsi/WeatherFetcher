import React, { useState } from 'react';

function App() {
    const [city, setCity] = useState('');

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        console.log('City:', city);
        // We'll connect to backend later
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h1>🌦️ Weather Fetcher</h1>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={handleInputChange}
                style={{ padding: '0.5rem', fontSize: '1rem' }}
            />
            <button
                onClick={handleSearch}
                style={{ marginLeft: '1rem', padding: '0.5rem 1rem', fontSize: '1rem' }}
            >
                Get Weather
            </button>
        </div>
    );
}

export default App;
