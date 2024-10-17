package com.example.mewatlasbackend;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.awt.image.BufferedImage;

public class Cat {
    private int catID;
    private String catBreed;
    private String catColor;
    private String catName;
    //private BufferedImage catImage;

    public Cat() {

    }

                                                            // BufferedImage catImage
    public Cat(int catID, String catBreed, String catColor,String catName) {
        this.catID = catID;
        this.catBreed = catBreed;
        this.catColor = catColor;
        this.catName = catName;
        // this.catImage = catImage;
    }

    @JsonProperty
    public int getCatID() {
        return catID;
    }

    @JsonProperty
    public void setCatID(int catID) {
        this.catID = catID;
    }

    @JsonProperty
    public String getCatBreed() {
        return catBreed;
    }

    @JsonProperty
    public void setCatBreed(String catBreed) {
        this.catBreed = catBreed;
    }

    @JsonProperty
    public String getCatColor() {
        return catColor;
    }

    @JsonProperty
    public void setCatColor(String catColor) {
        this.catColor = catColor;
    }

//    @JsonProperty
//    public BufferedImage getCatImage() {
//        return catImage;
//    }
//
//    @JsonProperty
//    public void setCatImage(BufferedImage catImage) {
//        this.catImage = catImage;
//    }

    @JsonProperty
    public String getCatName() {
        return catName;
    }

    @JsonProperty
    public void setCatName(String catName) {
        this.catName = catName;
    }
}
