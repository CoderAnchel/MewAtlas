package com.example.mewatlasbackend;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
    private int userID;
    private String email;
    private String password;
    private String username;

    public User() {

    }

    public User(int userID, String email, String password, String username) {
        this.userID = userID;
        this.email = email;
        this.password = password;
        this.username = username;
    }

    @JsonProperty
    public int getUserID() {
        return userID;
    }

    @JsonProperty
    public void setUserID(int userID) {
        this.userID = userID;
    }

    @JsonProperty
    public String getEmail() {
        return email;
    }

    @JsonProperty
    public void setEmail(String email) {
        this.email = email;
    }

    @JsonProperty
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    @JsonProperty
    public String getUsername() {
        return username;
    }

    @JsonProperty
    public void setUsername(String username) {
        this.username = username;
    }

}
