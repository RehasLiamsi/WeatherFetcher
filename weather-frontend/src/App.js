import React, { useState } from 'react';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = async () => {
        if (!city) return;

        setLoading(true);
        setError('');
        try {
            const response = await fetch(`http://localhost:8080/weather?city=${city}`);
            if (!response.ok) throw new Error('City not found');
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setWeather(null);
            setError('Could not fetch weather for that city.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#fef9f8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            fontFamily: '"Segoe UI", sans-serif',
            color: '#333'
        }}>
            {/* Animated Weather Emoji */}
            <div style={{
                fontSize: '4rem',
                animation: 'spin 8s linear infinite'
            }}>
                🌤️
            </div>

            <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>Weather Fetcher</h1>
            <p style={{ marginBottom: '2rem', color: '#666' }}>Enter a city to get the weather forecast.</p>

            <div>
                <input
                    type="text"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="e.g., London"
                    style={{
                        padding: '0.5rem 1rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        outline: 'none',
                        width: '200px'
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        marginLeft: '1rem',
                        padding: '0.5rem 1.2rem',
                        fontSize: '1rem',
                        backgroundColor: '#ffd6d6',
                        color: '#333',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer'
                    }}
                >
                    Get Weather
                </button>
            </div>

            {loading && <p style={{ marginTop: '2rem' }}>Loading...</p>}
            {error && <p style={{ color: 'red', marginTop: '2rem' }}>{error}</p>}

            {weather && (
                <div style={{
                    marginTop: '2rem',
                    padding: '1.5rem',
                    backgroundColor: '#fff6f0',
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    textAlign: 'left',
                    width: '280px'
                }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>{weather.city}</h2>
                    <p><strong>🌡️ Temperature:</strong> {weather.temperature}</p>
                    <p><strong>🥶 Feels Like:</strong> {weather.feelsLike}</p>
                    <p><strong>💧 Humidity:</strong> {weather.humidity}</p>
                    <p><strong>🌥️ Description:</strong> {weather.description}</p>
                </div>
            )}

            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    );
}

export default App;
