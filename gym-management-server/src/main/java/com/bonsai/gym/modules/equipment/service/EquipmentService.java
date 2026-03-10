package com.bonsai.gym.modules.equipment.service;

import com.bonsai.gym.modules.equipment.entity.Equipment;

import java.util.List;

public interface EquipmentService {
    List<Equipment> listEquipment();
    Equipment getById(Long id);
    void save(Equipment equipment);
    void update(Equipment equipment);
    void deleteById(Long id);
}
