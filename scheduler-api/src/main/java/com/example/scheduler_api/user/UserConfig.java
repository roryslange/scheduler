package com.example.scheduler_api.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.List;

public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(
            UserRepository repository
    ) {
        return args -> {
            User rory = new User(
                    "a1",
                    "rory@gmail.com",
                    "rory",
                    LocalDate.now(),
                    LocalDate.now()
            );

            repository.saveAll(
                    List.of(rory)
            );
        };
    }
}
