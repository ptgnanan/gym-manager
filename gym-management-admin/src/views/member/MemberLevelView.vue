<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员等级</h2>
        <p>设置不同会员等级、折扣与说明。</p>
      </div>
      <el-button type="primary" @click="openCreate">新增等级</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="等级名称">
          <el-input v-model="keyword" placeholder="请输入等级名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button @click="keyword = ''">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <el-table :data="levels">
        <el-table-column prop="levelName" label="等级名称" min-width="140" />
        <el-table-column prop="levelValue" label="等级值" min-width="100" />
        <el-table-column prop="discountRateText" label="折扣率" min-width="120" />
        <el-table-column prop="description" label="说明" min-width="180" />
        <el-table-column label="操作" width="160">
          <template #default="scope">
            <el-button link type="primary" @click="openEdit(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="removeLevel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <MemberLevelFormDialog
      v-model="dialogVisible"
      :title="editingRow?.id ? '编辑等级' : '新增等级'"
      :form-data="formData"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import MemberLevelFormDialog from '../../components/member/MemberLevelFormDialog.vue'
import { createMemberLevel, deleteMemberLevel, getMemberLevelList, updateMemberLevel } from '../../api/member'

const dialogVisible = ref(false)
const editingRow = ref<any | null>(null)
const formData = ref<any>({})
const keyword = ref('')
const sourceLevels = ref<any[]>([])

const levels = computed(() =>
  sourceLevels.value.filter((item) => !keyword.value || item.levelName?.includes(keyword.value))
)

const stats = computed(() => [
  { label: '等级总数', value: sourceLevels.value.length || 0 },
  { label: '普通会员', value: sourceLevels.value.filter((i) => i.levelValue === 1).length },
  { label: '高级会员', value: sourceLevels.value.filter((i) => i.levelValue && i.levelValue > 1).length },
  { label: '最高折扣', value: sourceLevels.value[0]?.discountRateText || '-' }
])

const loadLevels = async () => {
  const res = await getMemberLevelList()
  sourceLevels.value = (res?.data || []).map((item: any) => ({
    ...item,
    discountRateText: `${item.discountRate}%`
  }))
}

const openCreate = () => {
  editingRow.value = null
  formData.value = { levelName: '', levelValue: 1, discountRate: 100, description: '' }
  dialogVisible.value = true
}

const openEdit = (row: any) => {
  editingRow.value = row
  formData.value = {
    levelName: row.levelName,
    levelValue: row.levelValue,
    discountRate: Number(row.discountRate),
    description: row.description
  }
  dialogVisible.value = true
}

const handleSubmit = async (payload: any) => {
  const req = {
    id: editingRow.value?.id,
    levelName: payload.levelName,
    levelValue: Number(payload.levelValue),
    discountRate: Number(payload.discountRate),
    description: payload.description,
    status: editingRow.value?.status ?? 1
  }
  if (editingRow.value?.id) {
    await updateMemberLevel(req)
    ElMessage.success('等级更新成功')
  } else {
    await createMemberLevel(req)
    ElMessage.success('等级创建成功')
  }
  await loadLevels()
}

const removeLevel = async (row: any) => {
  await ElMessageBox.confirm(`确认删除等级【${row.levelName}】吗？`, '提示', { type: 'warning' })
  await deleteMemberLevel(row.id)
  ElMessage.success('删除成功')
  await loadLevels()
}

onMounted(loadLevels)
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom: 16px; }
</style>
