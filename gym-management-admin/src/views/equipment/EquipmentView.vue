<template>
  <div>
    <div class="page-header">
      <div>
        <h2>器材管理</h2>
        <p>管理器材档案、库存、入库、出库与维护记录</p>
      </div>
      <el-button type="primary" @click="openCreate">新增器材</el-button>
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
          <template #default="scope">
            <el-button link type="primary" @click="openEdit(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="removeEquipment(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <EquipmentFormDialog v-model="dialogVisible" :title="editingRow?.id ? '编辑器材' : '新增器材'" :form-data="formData" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import EquipmentFormDialog from '../../components/equipment/EquipmentFormDialog.vue'
import { getEquipmentSummary } from '../../api/equipment-dashboard'
import { createEquipment, deleteEquipment, getEquipmentList, updateEquipment } from '../../api/equipment'

const dialogVisible = ref(false)
const editingRow = ref<any | null>(null)
const formData = ref<any>({})
const keyword = ref('')
const status = ref('')
const stats = ref<any[]>([])
const sourceItems = ref<any[]>([])
const items = computed(() => sourceItems.value.filter(item => {
  const byName = !keyword.value || item.name?.includes(keyword.value)
  const byStatus = !status.value || item.status === status.value
  return byName && byStatus
}))

const mapStatusText = (statusValue: string) => (statusValue === 'NORMAL' ? '正常' : '维护中')
const mapStatusCode = (statusText: string) => (statusText === '正常' ? 'NORMAL' : 'MAINTAINING')

const mapItem = (item: any) => ({
  id: item.id,
  equipmentNo: item.equipmentNo,
  name: item.equipmentName,
  category: item.categoryId ?? '-',
  categoryId: item.categoryId,
  quantity: item.quantity,
  location: item.location,
  status: mapStatusText(item.status)
})

const loadData = async () => {
  const [summaryRes, listRes] = await Promise.all([getEquipmentSummary(), getEquipmentList()])
  if (summaryRes?.data) {
    stats.value = [
      { label: '器材总数', value: summaryRes.data.totalEquipment },
      { label: '正常使用', value: summaryRes.data.normalEquipment },
      { label: '维护中', value: summaryRes.data.maintainingEquipment },
      { label: '库存预警', value: summaryRes.data.warningEquipment }
    ]
  }
  sourceItems.value = (listRes?.data || []).map(mapItem)
}

const openCreate = () => {
  editingRow.value = null
  formData.value = { equipmentNo: '', name: '', categoryId: 1, quantity: 1, location: '', status: '正常' }
  dialogVisible.value = true
}

const openEdit = (row: any) => {
  editingRow.value = row
  formData.value = { equipmentNo: row.equipmentNo, name: row.name, categoryId: row.categoryId || 1, quantity: row.quantity, location: row.location, status: row.status }
  dialogVisible.value = true
}

const handleSubmit = async (payload: any) => {
  const req = {
    id: editingRow.value?.id,
    equipmentNo: payload.equipmentNo,
    equipmentName: payload.name,
    categoryId: Number(payload.categoryId) || 1,
    quantity: Number(payload.quantity) || 0,
    availableQuantity: Number(payload.quantity) || 0,
    location: payload.location,
    status: mapStatusCode(payload.status)
  }
  if (editingRow.value?.id) {
    await updateEquipment(req)
    ElMessage.success('器材更新成功')
  } else {
    await createEquipment(req)
    ElMessage.success('器材创建成功')
  }
  await loadData()
}

const removeEquipment = async (row: any) => {
  await ElMessageBox.confirm(`确认删除器材【${row.name}】吗？`, '提示', { type: 'warning' })
  await deleteEquipment(row.id)
  ElMessage.success('删除成功')
  await loadData()
}

onMounted(loadData)
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom:16px; }
</style>
