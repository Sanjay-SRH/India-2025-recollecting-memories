package com.recap.india2025.model;

public class Event {
    private String month;
    private String title;
    private String description;
    //private String date;
    private String type;
    private String imagePath;

    // Construtor
    public Event(String month, String title, String description, String type, String imagePath) {
        this.month = month;
        this.title = title;
        this.description = description;
        //this.date = date;
        this.type = type;
        this.imagePath = imagePath;
    }

    // Getters (Required for Spring to convert this to JSON)
    public String getMonth() { return month;}
    public String getTitle() { return title;}
    public String getDescription() { return description; }
    //public String getDate() { return date; }
    public String getType() { return type; }
    public String getImagePath() { return imagePath; }
}