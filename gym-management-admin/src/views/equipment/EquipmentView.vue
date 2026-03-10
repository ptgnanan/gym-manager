<template>
  <div>
    <div class="page-header">
      <div>
        <h2>器材管理</h2>
        <p>管理器材档案、库存、入库、出库与维护记录</p>
      </div>
      <el-button type="primary" @click="dialogVisible = true">新增器材</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never">
      <el-table :data="items">
        <el-table-column prop="equipmentNo" label="器材编号" min-width="140" />
        <el-table-column prop="name" label="器材名称" min-width="140" />
        <el-table-column prop="category" label="分类" min-width="120" />
        <el-table-column prop="quantity" label="库存" min-width="100" />
        <el-table-column prop="location" label="位置" min-width="120" />
        <el-table-column prop="status" label="状态" min-width="120">
          <template #default="scope">
            <el-tag :type="scope.row.status === '正常' ? 'success' : 'danger'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template #default>
            <el-button link type="primary" @click="dialogVisible = true">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <EquipmentFormDialog v-model="dialogVisible" title="器材信息" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EquipmentFormDialog from '../../components/equipment/EquipmentFormDialog.vue'
const dialogVisible = ref(false)
const handleSubmit = (payload: unknown) => console.log('equipment submit', payload)
const stats = [
  { label: '器材总数', value: 58 },
  { label: '正常使用', value: 52 },
  { label: '维护中', value: 4 },
  { label: '库存预警', value: 2 }
]
const items = [
  { equipmentNo: 'EQ-001', name: '跑步机', category: '有氧器械', quantity: 12, location: 'A区', status: '正常' },
  { equipmentNo: 'EQ-002', name: '史密斯架', category: '力量器械', quantity: 3, location: 'B区', status: '维护中' }
]
</script>

<style scoped lang="scss">
.page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
.page-header p { color: var(--text-sub); margin: 6px 0 0; }
.stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:16px; }
.stat-card { padding:18px; border-radius:18px; background:linear-gradient(135deg,#ffffff,#f7fbff); border:1px solid rgba(59,130,246,.08); }
.label { color:var(--text-sub); margin-bottom:8px; }
.value { font-size:28px; font-weight:700; }
</style>
