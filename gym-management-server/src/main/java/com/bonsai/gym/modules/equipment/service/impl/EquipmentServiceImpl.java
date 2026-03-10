package com.bonsai.gym.modules.equipment.service.impl;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.bonsai.gym.modules.equipment.entity.Equipment;
import com.bonsai.gym.modules.equipment.mapper.EquipmentMapper;
import com.bonsai.gym.modules.equipment.service.EquipmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EquipmentServiceImpl implements EquipmentService {

    private final EquipmentMapper equipmentMapper;

    @Override
    public List<Equipment> listEquipment() {
        return equipmentMapper.selectList(Wrappers.<Equipment>lambdaQuery().orderByDesc(Equipment::getId));
    }

    @Override
    public Equipment getById(Long id) {
        return equipmentMapper.selectById(id);
    }

    @Override
    public void save(Equipment equipment) {
        if (equipment.getAvailableQuantity() == null) {
            equipment.setAvailableQuantity(equipment.getQuantity());
        }
        if (equipment.getStatus() == null) {
            equipment.setStatus("NORMAL");
        }
        equipmentMapper.insert(equipment);
    }

    @Override
    public void update(Equipment equipment) {
        if (equipment.getAvailableQuantity() == null) {
            equipment.setAvailableQuantity(equipment.getQuantity());
        }
        if (equipment.getStatus() == null) {
            equipment.setStatus("NORMAL");
        }
        equipmentMapper.updateById(equipment);
    }

    @Override
    public void deleteById(Long id) {
        equipmentMapper.deleteById(id);
    }
}
