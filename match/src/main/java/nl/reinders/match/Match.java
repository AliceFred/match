package nl.reinders.match;

import java.util.Date;

public class Match {
    private int id;
    private Date date;
    private String place;
    private String hometeam;
    private String awayteam;
    private int homescore;
    private int awayscore;

    public Match(int id, Date date, String place, String hometeam, String awayteam, int homescore, int awayscore) {
        this.id = id;
        this.date=date;
        this.place=place;
        this.hometeam=hometeam;
        this.awayteam=awayteam;
        this.homescore=homescore;
        this.awayscore=awayscore;
    }

    public Match() {
    	
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getHometeam() {
        return hometeam;
    }

    public void setHometeam(String hometeam) {
        this.hometeam = hometeam;
    }

    public String getAwayteam() {
        return awayteam;
    }

    public void setAwayteam(String awayteam) {
        this.awayteam = awayteam;
    }

    public int getHomescore() {
        return homescore;
    }

    public void setHomescore(int homescore) {
        this.homescore = homescore;
    }

    public int getAwayscore() {
        return awayscore;
    }

    public void setAwayscore(int awayscore) {
        this.awayscore = awayscore;
    }

}
