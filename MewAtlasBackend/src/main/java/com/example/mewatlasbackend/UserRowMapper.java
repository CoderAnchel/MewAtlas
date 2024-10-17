package com.example.mewatlasbackend;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        User user = new User();
        user.setUserID(rs.getInt("userID"));
        user.setEmail(rs.getString("email"));
        user.setPassword(rs.getString("password"));
        user.setUsername(rs.getString("username"));
        return user;
    }
}
