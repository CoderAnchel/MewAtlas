package com.example.mewatlasbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class CatService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    //ALL CATS
    public List<Cat> getCats() {
        String sql = "SELECT * FROM Cat";
        return jdbcTemplate.query(sql, new CatRowMapper());
    }

    // ADD CAT
    public Cat add(Cat cat) {
        String sql = "INSERT INTO Cat (catID, breed, color, name) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, cat.getCatID(),cat.getCatBreed(), cat.getCatColor(), cat.getCatName()); //catGetCatImage(
        return cat;
    }


    //list of users
    public List<User> getUsers() {
        String sql = "SELECT * FROM User";
        return jdbcTemplate.query(sql, new UserRowMapper());
    }

    //add user
    public User addUser(User user) {
        String sql = "INSERT INTO User (userID, email, password, username) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, user.getUserID(), user.getEmail(), user.getPassword(), user.getUsername());
        return user;
    }

    //get user by email or username and password
    public User getUser(String username, String password) {
        String sql = "SELECT * FROM User WHERE username = ? AND password = ?";
        return jdbcTemplate.queryForObject(sql, new UserRowMapper(), username, password);
    }
}
