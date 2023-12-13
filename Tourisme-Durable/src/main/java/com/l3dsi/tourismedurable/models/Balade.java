package com.l3dsi.tourismedurable.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_balade")
public class Balade {
    @Id
    @GeneratedValue
    private int id;

    @OneToMany(mappedBy = "balade")
    private List<Reservation> reservations;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String date;
    private Double prix;
}
