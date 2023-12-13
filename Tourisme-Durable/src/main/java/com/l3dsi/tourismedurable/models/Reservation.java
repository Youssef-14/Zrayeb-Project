package com.l3dsi.tourismedurable.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_reservation")
public class Reservation {
    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "baladeId", referencedColumnName = "id")
    private Balade balade;

    private int userId;
}
