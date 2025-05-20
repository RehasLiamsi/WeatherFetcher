package com.example.weatherfetcher;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Object> handleRuntimeException(RuntimeException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse("City not found", "Try another city."));
    }

    @Getter
    static class ErrorResponse {
        private String error;
        private String tip;


    public ErrorResponse(String error, String tip) {
        this.error = error;
        this.tip = tip;
    }

    }
}
