package com.example.weatherfetcher.service;

import com.example.weatherfetcher.model.WeatherFetcherModel;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherFetcherService {

    @Value("${openweather.api.key}")
    private String apiKey;

    public WeatherFetcherModel getWeather(String city){
        String url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;

        RestTemplate restTemplate = new RestTemplate();
        String json = restTemplate.getForObject(url, String.class);

        JSONObject obj = new JSONObject(json);

        String cityName = obj.getString("name");
        double temp = obj.getJSONObject("main").getDouble("temp");
        int humidity = obj.getJSONObject("main").getInt("humidity");
        double feelsLike = obj.getJSONObject("main").getDouble("feels_like");

        JSONArray weatherArray = obj.getJSONArray("weather");
        String description = weatherArray.getJSONObject(0).getString("description");

        return new WeatherFetcherModel(
                cityName,
                temp + "°C",
                feelsLike + "°C",
                description,
                humidity + "%"
        );
    }

}
