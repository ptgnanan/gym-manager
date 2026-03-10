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

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="器材名称"><el-input v-model="keyword" placeholder="请输入器材名称" /></el-form-item>
        <el-form-item label="状态">
          <el-select v-model="status" clearable placeholder="请选择状态" style="width: 140px">
            <el-option label="正常" value="正常" />
            <el-option label="维护中" value="维护中" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

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
import { computed, onMounted, ref } from 'vue'
import EquipmentFormDialog from '../../components/equipment/EquipmentFormDialog.vue'
import { getEquipmentSummary } from '../../api/equipment-dashboard'
import { getEquipmentList } from '../../api/equipment'

const dialogVisible = ref(false)
const keyword = ref('')
const status = ref('')
const handleSubmit = (payload: unknown) => console.log('equipment submit', payload)
const reset = () => { keyword.value = ''; status.value = '' }

const stats = ref([
  { label: '器材总数', value: 58 },
  { label: '正常使用', value: 52 },
  { label: '维护中', value: 4 },
  { label: '库存预警', value: 2 }
])
const sourceItems = ref<any[]>([])
const items = computed(() => sourceItems.value.filter(item => {
  const byName = !keyword.value || item.name?.includes(keyword.value)
  const byStatus = !status.value || item.status === status.value
  return byName && byStatus
}))

onMounted(async () => {
  try {
    const [summaryRes, listRes] = await Promise.all([getEquipmentSummary(), getEquipmentList()])
    if (summaryRes?.data) {
      stats.value = [
        { label: '器材总数', value: summaryRes.data.totalEquipment },
        { label: '正常使用', value: summaryRes.data.normalEquipment },
        { label: '维护中', value: summaryRes.data.maintainingEquipment },
        { label: '库存预警', value: summaryRes.data.warningEquipment }
      ]
    }
    if (listRes?.data) {
      sourceItems.value = listRes.data
    }
  } catch (error) {
    console.warn('equipment dashboard fallback', error)
    sourceItems.value = [
      { equipmentNo: 'EQ-001', name: '跑步机', category: '有氧器械', quantity: 12, location: 'A区', status: '正常' },
      { equipmentNo: 'EQ-002', name: '史密斯架', category: '力量器械', quantity: 3, location: 'B区', status: '维护中' }
    ]
  }
})
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom:16px; }
</style>
