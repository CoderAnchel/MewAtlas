package com.example.mewatlasbackend;


import org.springframework.jdbc.core.RowMapper;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CatRowMapper implements RowMapper<Cat> {
    @Override
    public Cat mapRow(ResultSet rs, int rowNum) throws SQLException, SQLException {
        Cat cat = new Cat();
        cat.setCatID(rs.getInt("catID"));
        cat.setCatBreed(rs.getString("breed"));
        cat.setCatColor(rs.getString("color"));
        cat.setCatName(rs.getString("name"));
//
//        Blob imageBlob = rs.getBlob("image");
//        try (InputStream is = imageBlob.getBinaryStream()) {
//            BufferedImage image = ImageIO.read(is);
//            cat.setCatImage(image);
//        } catch (IOException e) {
//            throw new SQLException("Error reading image from blob", e);
//        }
        return cat;
    }
}

