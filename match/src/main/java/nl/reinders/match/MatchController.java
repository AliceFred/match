package nl.reinders.match;

import org.springframework.web.bind.annotation.*;
import java.sql.*;


@RestController
public class MatchController {

    Datasource ds = new Datasource();

    @GetMapping("/match")
    public Match getMatch(@RequestParam(name="id") int id) throws SQLException {
        try (PreparedStatement stmt = ds.makeConnection().prepareStatement("SELECT * FROM tblScore WHERE idtblScore = ?")) {
            stmt.setInt(1, id);
            try (ResultSet rs = stmt.executeQuery()) {
                rs.next();
                return new Match(rs.getInt("idtblScore"), rs.getDate("Date"),
                        rs.getString("Place"), rs.getString("HomeTeam"),
                        rs.getString("AwayTeam"),rs.getInt("HomeScore"),
                        rs.getInt("AwayScore"));
            }
        }
    }

    @PostMapping("/match")
    public Match createMatch(@RequestParam(name="date", required=false) Date date,
                                   @RequestParam(name="place") String place,
                                   @RequestParam(name="hometeam", required=false) String hometeam,
                                   @RequestParam(name="awayteam") String awayteam,
                                   @RequestParam(name="homescore") int homescore,
                                   @RequestParam(name="awayscore") int awayscore
                             ) throws SQLException {
        try (PreparedStatement stmt = ds.makeConnection().prepareStatement("INSERT INTO tblScore(date, place, hometeam, awayteam, homescore, awayscore) VALUES (?, ?, ?, ?, ?, ?)",
                Statement.RETURN_GENERATED_KEYS)) {
            stmt.setDate(1, date);
            stmt.setString(2, place);
            stmt.setString(3, hometeam);
            stmt.setString(4, awayteam);
            stmt.setInt(5, homescore);
            stmt.setInt(6, awayscore);
            stmt.executeUpdate();
            try (ResultSet rs = stmt.getGeneratedKeys()) {
                rs.next();
                return getMatch(rs.getInt(1));
            }
        }

    }
}

//andere mappings nog later toevoegen voor update en delete acties