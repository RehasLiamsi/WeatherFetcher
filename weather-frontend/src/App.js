import React, { useState } from 'react';
import './index.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => setCity(e.target.value);

    const handleSearch = async () => {
        if (!city) return;
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`http://backend:8080/weather?city=${city}`);
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
        <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
                <div className="text-5xl mb-4 animate-spin-slow">☀️</div>
                <h1 className="text-2xl font-semibold mb-2 text-gray-800">Weather Fetcher</h1>
                <p className="text-sm text-gray-500 mb-4">Enter a city name to fetch the weather</p>

                <SearchBar
                    city={city}
                    onCityChange={handleInputChange}
                    onSearch={handleSearch}
                />

                {loading && <p className="text-gray-500">Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {weather && <WeatherCard weather={weather} />}
            </div>
        </div>
    );
}

export default App;