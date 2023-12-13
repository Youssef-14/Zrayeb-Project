package com.l3dsi.tourismedurable.services;

import com.l3dsi.tourismedurable.models.Balade;
import com.l3dsi.tourismedurable.repositories.BaladeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BaladeService {

    private final BaladeRepository baladeRepository;

    public Iterable<Balade> getAllBalades() {
        return baladeRepository.findAll();
    }

    public Optional<Balade> getBaladeById(Integer id) {
        return baladeRepository.findById(id);
    }

    public Balade addBalade(Balade balade) {
        return baladeRepository.save(balade);
    }

    public void deleteBalade(Integer id) {
        baladeRepository.deleteById(id);
    }

    public Optional<Balade> updateBalade(Integer id, Balade balade) {
        return baladeRepository.findById(id);
    }


}
