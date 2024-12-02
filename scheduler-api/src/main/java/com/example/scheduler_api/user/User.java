package com.example.scheduler_api.user;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true)
    private String uuid;

    @Column(nullable = false, unique = true)
    private String email;

    private String name;

    private LocalDate userCreated;
    private LocalDate lastSignedIn;

    public User(long id, String uuid, String email, String name, LocalDate userCreated, LocalDate lastSignedIn) {
        this.id = id;
        this.uuid = uuid;
        this.email = email;
        this.name = name;
        this.userCreated = userCreated;
        this.lastSignedIn = lastSignedIn;
    }

    public User(String uuid, String email, String name, LocalDate userCreated, LocalDate lastSignedIn) {
        this.uuid = uuid;
        this.email = email;
        this.name = name;
        this.userCreated = userCreated;
        this.lastSignedIn = lastSignedIn;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getUserCreated() {
        return userCreated;
    }

    public void setUserCreated(LocalDate userCreated) {
        this.userCreated = userCreated;
    }

    public LocalDate getLastSignedIn() {
        return lastSignedIn;
    }

    public void setLastSignedIn(LocalDate lastSignedIn) {
        this.lastSignedIn = lastSignedIn;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", uuid='" + uuid + '\'' +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", userCreated=" + userCreated +
                ", lastSignedIn=" + lastSignedIn +
                '}';
    }

}
