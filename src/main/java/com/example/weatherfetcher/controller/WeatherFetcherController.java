package com.example.weatherfetcher.controller;

import com.example.weatherfetcher.service.WeatherFetcherService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherFetcherController {

    private final WeatherFetcherService weatherFetcherService;

    public WeatherFetcherController(WeatherFetcherService weatherFetcherService){
        this.weatherFetcherService = weatherFetcherService;
    }

    @GetMapping("/weather")
    public String getWeather(@RequestParam String city){
        return weatherFetcherService.getWeather(city);
    }
}
