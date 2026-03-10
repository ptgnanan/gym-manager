<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员套餐</h2>
        <p>管理时长卡、次卡和私教套餐等产品。</p>
      </div>
      <el-button type="primary" @click="openCreate">新增套餐</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="套餐名称">
          <el-input v-model="keyword" placeholder="请输入套餐名称" />
        </el-form-item>
        <el-form-item label="套餐类型">
          <el-select v-model="packageType" clearable placeholder="请选择" style="width: 140px">
            <el-option label="时长卡" value="TIME_BASED" />
            <el-option label="次卡/私教" value="SESSION_BASED" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <el-table :data="packages">
        <el-table-column prop="packageName" label="套餐名称" min-width="160" />
        <el-table-column prop="packageTypeText" label="类型" min-width="120" />
        <el-table-column prop="priceText" label="价格" min-width="120" />
        <el-table-column prop="durationDays" label="时长(天)" min-width="120" />
        <el-table-column prop="sessionCount" label="次数" min-width="100" />
        <el-table-column label="操作" width="160">
          <template #default="scope">
            <el-button link type="primary" @click="openEdit(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="removePackage(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <MemberPackageFormDialog
      v-model="dialogVisible"
      :title="editingRow?.id ? '编辑套餐' : '新增套餐'"
      :form-data="formData"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import MemberPackageFormDialog from '../../components/member/MemberPackageFormDialog.vue'
import { createMemberPackage, deleteMemberPackage, getMemberPackageList, updateMemberPackage } from '../../api/member'

const dialogVisible = ref(false)
const editingRow = ref<any | null>(null)
const formData = ref<any>({})
const keyword = ref('')
const packageType = ref('')
const sourcePackages = ref<any[]>([])

const normalizePackageType = (value?: string | null) => {
  if (value === 'TIME' || value === 'TIME_BASED') return 'TIME_BASED'
  if (value === 'COUNT' || value === 'SESSION_BASED') return 'SESSION_BASED'
  return value || ''
}

const packageTypeText = (value?: string | null) => {
  const normalized = normalizePackageType(value)
  if (normalized === 'TIME_BASED') return '时长卡'
  if (normalized === 'SESSION_BASED') return '次卡/私教'
  return normalized || '-'
}

const packages = computed(() =>
  sourcePackages.value.filter((item) => {
    const byName = !keyword.value || item.packageName?.includes(keyword.value)
    const byType = !packageType.value || item.packageType === packageType.value
    return byName && byType
  })
)

const stats = computed(() => [
  { label: '套餐总数', value: sourcePackages.value.length || 0 },
  { label: '时长卡', value: sourcePackages.value.filter((i) => i.packageType === 'TIME_BASED').length },
  { label: '次卡/私教', value: sourcePackages.value.filter((i) => i.packageType === 'SESSION_BASED').length },
  { label: '热门套餐', value: sourcePackages.value[0]?.packageName || '-' }
])

const reset = () => {
  keyword.value = ''
  packageType.value = ''
}

const loadPackages = async () => {
  const res = await getMemberPackageList()
  sourcePackages.value = (res?.data || []).map((item: any) => {
    const normalizedType = normalizePackageType(item.packageType)
    return {
      ...item,
      packageType: normalizedType,
      packageTypeText: packageTypeText(normalizedType),
      priceText: `¥${Number(item.price || 0).toFixed(2)}`,
      durationDays: item.durationDays ?? '-',
      sessionCount: item.sessionCount ?? '-'
    }
  })
}

const openCreate = () => {
  editingRow.value = null
  formData.value = { packageName: '', packageType: 'TIME_BASED', price: 0, durationOrCount: 30, description: '' }
  dialogVisible.value = true
}

const openEdit = (row: any) => {
  editingRow.value = row
  formData.value = {
    packageName: row.packageName,
    packageType: row.packageType,
    price: Number(row.price) || 0,
    durationOrCount: Number(row.packageType === 'TIME_BASED' ? row.durationDays : row.sessionCount) || 0,
    description: row.description
  }
  dialogVisible.value = true
}

const handleSubmit = async (payload: any) => {
  const normalizedType = normalizePackageType(payload.packageType)
  const req = {
    id: editingRow.value?.id,
    packageName: payload.packageName,
    packageType: normalizedType,
    price: Number(payload.price) || 0,
    durationDays: normalizedType === 'TIME_BASED' ? Number(payload.durationOrCount) || null : null,
    sessionCount: normalizedType === 'SESSION_BASED' ? Number(payload.durationOrCount) || null : null,
    description: payload.description,
    status: editingRow.value?.status ?? 1
  }
  if (editingRow.value?.id) {
    await updateMemberPackage(req)
    ElMessage.success('套餐更新成功')
  } else {
    await createMemberPackage(req)
    ElMessage.success('套餐创建成功')
  }
  await loadPackages()
}

const removePackage = async (row: any) => {
  await ElMessageBox.confirm(`确认删除套餐【${row.packageName}】吗？`, '提示', { type: 'warning' })
  await deleteMemberPackage(row.id)
  ElMessage.success('删除成功')
  await loadPackages()
}

onMounted(loadPackages)
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom: 16px; }
</style>
