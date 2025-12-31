package com.recap.india2025.controller;

import com.recap.india2025.model.Event;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class StoryController {

    @GetMapping("/api/timeline")
    public List<Event> getTimeline() {
        return List.of(
            new Event("January", "Maha Kumbh Tragedy", "A deadly stampede at the Sangam in Prayagraj claimed over 37 lives.", "BAD", "kumbh.png"),
            new Event("February", "Delhi Railway Stampede", "A crush at the station resulted in 18 deaths, mostly women and children.", "BAD", "railway.png"),
            new Event("April", "Gujarat Factory Fire", "A massive industrial fire killed 17 laborers.", "BAD", "factory.png"),
            new Event("April", "Pahalgam Terror Attack", "A tragic attack in Jammu and Kashmir killed 26 tourists.", "BAD", "pahalgam.png"),
            new Event("June", "Bengaluru IPL Stampede", "Victory celebrations turned tragic with 11 deaths and 47 injuries.", "BAD", "ipl.png"),
            new Event("June", "Flight 171 Crash", "India's deadliest aviation disaster in decades in Ahmedabad, killing 260 people.", "BAD", "plane.png"),
            new Event("Year-Round", "Manipur Crisis", "Ongoing ethnic violence led to the imposition of President's Rule.", "BAD", "manipur.png"),
            new Event("Economy", "Global Trade Barriers", "U.S. tariffs were imposed on imports as GDP growth slowed to 5.4%.", "BAD", "economy_slow.png"),
            new Event("Environment", "Extreme Climate", "Record heatwaves of 53°C and widespread flooding in Assam and Himachal.", "BAD", "climate.png"),
            
            new Event("January", "SPADEX Success", "ISRO successfully demonstrated in-space docking technology.", "GOOD", "spadex.png"),
            new Event("March", "Champions Trophy Victory", "India's men's team clinches the ICC Champions Trophy for the third time!", "GOOD", "cricket_men.png"),
            new Event("April", "GST Record High", "Collections hit a record high of ₹2.37 lakh crore.", "GOOD", "gst.png"),
            new Event("May", "NISAR Launch", "The NASA-ISRO radar satellite launched to study Earth's ecosystems.", "GOOD", "nisar.png"),
            new Event("June", "Asia Cup T20 Title", "The Men's team secures the Asia Cup, continuing their dominance.", "GOOD", "asia_cup.png"),
            new Event("July", "Women's World Cup Glory", "History made! The Indian Women's team won their first-ever World Cup.", "GOOD", "cricket_women.png"),
            new Event("August", "Tesla India Entrance", "Tesla officially entered the market, opening its first showroom in Mumbai.", "GOOD", "tesla.png"),
            new Event("September", "Space Mission Axiom-4", "Group Captain Shubhanshu Shukla traveled to space.", "GOOD", "astronaut.png"),
            new Event("October", "Navi Mumbai Airport", "The Navi Mumbai International Airport officially commenced operations.", "GOOD", "airport.png"),
            new Event("December", "Tech Innovation", "India reached 38th in Global Innovation with 34 indigenous supercomputers.", "GOOD", "supercomputer.png")
        
        );
    }

    @GetMapping("/api/future-timeline")
    public List<Event> getFutureTimeline() {
        return List.of(
            new Event("Feb-Mar 2026", "T20 World Cup", "India prepares to co-host the ICC Men's T20 World Cup.", "FUTURE", "t20_2026.png"),
            new Event("February 2026", "India AI Impact Summit", "New Delhi hosts a global gathering to shape the future of responsible and inclusive AI.", "FUTURE", "ai_summit.png"),
            new Event("August 2026", "BWF World Championships", "New Delhi will host the prestigious badminton championships.", "FUTURE", "badminton.png"),
            new Event("2026", "Jewar Airport Completion", "The Noida International Airport is set for completion.", "FUTURE", "noida_airport.png"),
            new Event("2026", "International IDEA Chairship", "India takes the lead of this 35-nation body to promote global democratic excellence.", "FUTURE", "idea_diplomacy.png")
        );
    }
}