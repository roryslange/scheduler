package com.example.scheduler_api.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
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

            repository.save(rory);
        };
    }
}
