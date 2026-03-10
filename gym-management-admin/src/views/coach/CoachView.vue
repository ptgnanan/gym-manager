<template>
  <div>
    <div class="page-header">
      <div>
        <h2>教练管理</h2>
        <p>管理教练信息、专长方向与教学状态</p>
      </div>
      <el-button type="primary" @click="openCreate">新增教练</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never">
      <el-table :data="coaches">
        <el-table-column prop="coachNo" label="教练编号" min-width="130" />
        <el-table-column prop="name" label="姓名" min-width="100" />
        <el-table-column prop="phone" label="手机号" min-width="140" />
        <el-table-column prop="specialty" label="擅长方向" min-width="180" />
        <el-table-column prop="status" label="状态" min-width="100">
          <template #default="scope">
            <el-tag :type="scope.row.status === '在职' ? 'success' : 'info'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template #default="scope">
            <el-button link type="primary" @click="openEdit(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="removeCoach(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <CoachFormDialog v-model="dialogVisible" :title="editingRow?.id ? '编辑教练' : '新增教练'" :form-data="formData" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import CoachFormDialog from '../../components/coach/CoachFormDialog.vue'
import { createCoach, deleteCoach, getCoachList, updateCoach } from '../../api/coach'

const dialogVisible = ref(false)
const editingRow = ref<any | null>(null)
const coaches = ref<any[]>([])
const formData = ref<any>({})
const stats = computed(() => [
  { label: '教练总数', value: coaches.value.length },
  { label: '在职教练', value: coaches.value.filter(i => i.status === '在职').length },
  { label: '明星私教', value: Math.min(3, coaches.value.length) },
  { label: '今日上课', value: 12 }
])

const mapCoach = (item: any) => ({
  id: item.id,
  coachNo: item.coachNo,
  name: item.name,
  phone: item.phone,
  specialty: item.specialty,
  introduction: item.introduction,
  status: item.status === 1 ? '在职' : '离职'
})

const loadCoaches = async () => {
  const res = await getCoachList()
  coaches.value = (res?.data || []).map(mapCoach)
}

const openCreate = () => {
  editingRow.value = null
  formData.value = { coachNo: '', name: '', phone: '', specialty: '', introduction: '' }
  dialogVisible.value = true
}

const openEdit = (row: any) => {
  editingRow.value = row
  formData.value = { ...row }
  dialogVisible.value = true
}

const handleSubmit = async (payload: any) => {
  const req = {
    id: editingRow.value?.id,
    coachNo: payload.coachNo,
    name: payload.name,
    phone: payload.phone,
    specialty: payload.specialty,
    introduction: payload.introduction,
    status: 1
  }
  if (editingRow.value?.id) {
    await updateCoach(req)
    ElMessage.success('教练更新成功')
  } else {
    await createCoach(req)
    ElMessage.success('教练创建成功')
  }
  await loadCoaches()
}

const removeCoach = async (row: any) => {
  await ElMessageBox.confirm(`确认删除教练【${row.name}】吗？`, '提示', { type: 'warning' })
  await deleteCoach(row.id)
  ElMessage.success('删除成功')
  await loadCoaches()
}

onMounted(async () => {
  await loadCoaches()
})
</script>
