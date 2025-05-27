import React from 'react';

function WeatherCard({ weather }) {
    return (
        <div className="bg-orange-50 mt-4 p-4 rounded-xl text-left">
            <h2 className="text-lg font-bold mb-4">{weather.city}</h2>
            <div className="flex flex-col space-y-2">
                <p><strong>🌡️ Temperature:</strong> {weather.temperature}</p>
                <p><strong>🥶 Feels Like:</strong> {weather.feelsLike}</p>
                <p><strong>💧 Humidity:</strong> {weather.humidity}</p>
                <p><strong>🌥️ Description:</strong> {weather.description}</p>
            </div>
        </div>
    );
}

export default WeatherCard;
