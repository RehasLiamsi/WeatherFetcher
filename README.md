# ☀️ Weather Fetcher App 🌦️

A Spring Boot project that fetches real-time weather data using the OpenWeatherMap API.

---

## 🚀 What does it do?

You can type in a city and get the current weather like:
- 🌡️ Temperature
- 🧊 Feels like
- 🌬️ Humidity
- 🌤️ Weather description

Example:
```
GET http://localhost:8080/weather?city=Stockholm
```

Response:
```json
{
  "city": "Stockholm",
  "temperature": "18.2°C",
  "feelsLike": "17.1°C",
  "description": "clear sky",
  "humidity": "32%"
}
```

## 🧰 Technologies Used

- Java 21 ☕
- Spring Boot 3 ⚙️
- OpenWeatherMap API 🌍
- RestTemplate + JSON parsing 🧾
