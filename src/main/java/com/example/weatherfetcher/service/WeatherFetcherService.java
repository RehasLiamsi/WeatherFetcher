package com.example.weatherfetcher.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherFetcherService {

    private final String apiKey = "b6f6e0fa610ec485b7288a98a003e0a6";

    public String getWeather(String city){
        String url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

}
