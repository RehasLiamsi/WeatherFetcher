import React, { useState } from 'react';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = async () => {
        if (!city) return;

        try {
            const response = await fetch(`http://localhost:8080/weather?city=${city}`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeather(data);
            setError('');
        } catch (err) {
            setWeather(null);
            setError('Could not fetch weather for that city.');
        }
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

            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

            {weather && (
                <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
                    <h2>{weather.city}</h2>
                    <p><strong>🌡️ Temperature:</strong> {weather.temperature}</p>
                    <p><strong>🥶 Feels Like:</strong> {weather.feelsLike}</p>
                    <p><strong>💧 Humidity:</strong> {weather.humidity}</p>
                    <p><strong>🌤️ Description:</strong> {weather.description}</p>
                </div>
            )}
        </div>
    );
}

export default App;
