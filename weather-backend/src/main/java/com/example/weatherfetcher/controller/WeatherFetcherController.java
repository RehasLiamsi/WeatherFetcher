package com.example.weatherfetcher.controller;

import com.example.weatherfetcher.model.WeatherFetcherModel;
import com.example.weatherfetcher.service.WeatherFetcherService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherFetcherController {

    private final WeatherFetcherService weatherFetcherService;

    public WeatherFetcherController(WeatherFetcherService weatherFetcherService){
        this.weatherFetcherService = weatherFetcherService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/weather")
    public WeatherFetcherModel getWeather(@RequestParam String city){
        return weatherFetcherService.getWeather(city);
    }
}
