# 🌤️ Weather Frontend

A minimal React.js frontend for the **Weather Fetcher App**.  
This UI lets users search for a city and view real-time weather data, fetched from a Spring Boot backend.

---

## 🧰 Built With

- ⚛️ React.js (via Create React App)
- 🎨 Inline styles with a pastel and minimal UI
- 🌐 Fetch API (connects to Spring Boot backend)

---

## 🎥 Demo Video

[▶️ Click here to watch the demo](./demo/demo.mp4)

---

## 🚀 How to Run

1. Make sure your backend is running at:
```
http://localhost:8080/weather?city=CityName
```

2. In the `weather-frontend` folder:

```bash
npm install
npm start
```

3. Visit `http://localhost:3000` in your browser.

---

## 🔁 API Integration

The frontend calls the backend via:

```
GET http://localhost:8080/weather?city={cityName}
```

**Example response expected:**

```json
{
  "city": "Stockholm",
  "temperature": "15°C",
  "feelsLike": "13°C",
  "description": "clear sky",
  "humidity": "50%"
}
```

## 📁 Project Structure

```
weather-frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js        
│   └── index.js
├── demo/
│   └── demo.mp4      
├── package.json
└── README.md         
```
