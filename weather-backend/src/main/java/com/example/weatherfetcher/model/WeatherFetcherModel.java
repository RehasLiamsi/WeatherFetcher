package com.example.weatherfetcher.model;

public class WeatherFetcherModel {

    private String city;
    private String temperature;
    private String description;
    private String humidity;
    private String feelsLike;

    public WeatherFetcherModel(String city, String temperature, String feelsLike, String description, String humidity) {
        this.city = city;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.description = description;
        this.humidity = humidity;
    }

    public String getCity() {
        return city;
    }

    public String getTemperature() {
        return temperature;
    }

    public String getDescription() {
        return description;
    }

    public String getHumidity() {
        return humidity;
    }

    public String getFeelsLike() {
        return feelsLike;
    }
}
