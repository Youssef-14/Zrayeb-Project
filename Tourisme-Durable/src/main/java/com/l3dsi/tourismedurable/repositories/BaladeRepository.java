package com.l3dsi.tourismedurable.repositories;

import com.l3dsi.tourismedurable.models.Balade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BaladeRepository extends JpaRepository<Balade, Integer> {
}
