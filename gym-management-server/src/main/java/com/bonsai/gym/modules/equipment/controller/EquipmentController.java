package com.bonsai.gym.modules.equipment.controller;

import com.bonsai.gym.common.api.ApiResponse;
import com.bonsai.gym.modules.equipment.entity.Equipment;
import com.bonsai.gym.modules.equipment.service.EquipmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipment")
@RequiredArgsConstructor
public class EquipmentController {

    private final EquipmentService equipmentService;

    @GetMapping("/list")
    public ApiResponse<List<Equipment>> list() {
        return ApiResponse.success(equipmentService.listEquipment());
    }

    @GetMapping("/{id}")
    public ApiResponse<Equipment> detail(@PathVariable Long id) {
        return ApiResponse.success(equipmentService.getById(id));
    }

    @PostMapping
    public ApiResponse<Void> save(@RequestBody Equipment equipment) {
        equipmentService.save(equipment);
        return ApiResponse.success("保存成功", null);
    }

    @PutMapping
    public ApiResponse<Void> update(@RequestBody Equipment equipment) {
        equipmentService.update(equipment);
        return ApiResponse.success("更新成功", null);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        equipmentService.deleteById(id);
        return ApiResponse.success("删除成功", null);
    }
}
