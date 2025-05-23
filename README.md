# 🌦️ Weather Fetcher – Full Stack Project

A complete full-stack weather application that lets users fetch and display real-time weather data for any city.

This project consists of:
- 📦 `weather-backend/` – A Spring Boot API that connects to OpenWeatherMap
- 🖼️ `weather-frontend/` – A React.js frontend with an animated UI

---

## 📁 Project Structure

```
weatherfetcher/
├── weather-backend/     ← Spring Boot API backend
├── weather-frontend/    ← React UI frontend
└── README.md            ← You're here
```

---

## 🔧 Tech Stack

### Backend
- ☕ Java 21 + Spring Boot 3
- 🌐 OpenWeatherMap API integration
- 🔐 Environment-based API key config
- ❌ Error handling with `@ControllerAdvice`

### Frontend
- ⚛️ React.js (Create React App)
- 🎨 Pastel UI with emoji animation
- 🔁 Fetch API to connect to backend
- 🧪 Live weather display and error handling

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weatherfetcher.git
cd weatherfetcher
```

### 2. Run the Backend

```bash
cd weather-backend
# Make sure to set your API key in application.properties
./mvnw spring-boot:run
```

### 3. Run the Frontend

```bash
cd weather-frontend
npm install
npm start
```

Visit `http://localhost:3000` to try it out.

---

## 🔁 API Design

**Endpoint:**

```
GET /weather?city=CityName
```

**Sample Response:**

```json
{
  "city": "Stockholm",
  "temperature": "15°C",
  "feelsLike": "13°C",
  "description": "clear sky",
  "humidity": "50%"
}
```
