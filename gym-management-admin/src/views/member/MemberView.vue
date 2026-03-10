<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员管理</h2>
        <p>管理会员档案、等级、套餐和订单。</p>
      </div>
      <div class="actions">
        <el-button plain>导出</el-button>
        <el-button type="primary" @click="openCreate">新增会员</el-button>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <div class="member-overview-grid">
      <el-card shadow="never">
        <template #header>最近订单</template>
        <el-table :data="recentOrders">
          <el-table-column prop="orderNo" label="订单号" min-width="160" />
          <el-table-column prop="memberName" label="会员" min-width="100" />
          <el-table-column prop="packageName" label="套餐" min-width="140" />
          <el-table-column prop="amount" label="金额" min-width="100" />
          <el-table-column prop="status" label="状态" min-width="100" />
        </el-table>
      </el-card>
      <el-card shadow="never">
        <template #header>会员结构</template>
        <el-descriptions :column="1" border>
          <el-descriptions-item label="普通会员">{{ memberStructure.normal }}</el-descriptions-item>
          <el-descriptions-item label="黄金会员">{{ memberStructure.gold }}</el-descriptions-item>
          <el-descriptions-item label="钻石会员">{{ memberStructure.diamond }}</el-descriptions-item>
          <el-descriptions-item label="本月新增">{{ memberStructure.newThisMonth }}</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="会员姓名">
          <el-input v-model="query.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="query.phone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loadMembers">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <el-table :data="filteredMembers">
        <el-table-column prop="memberNo" label="会员编号" min-width="120" />
        <el-table-column prop="name" label="姓名" min-width="100" />
        <el-table-column prop="phone" label="手机号" min-width="140" />
        <el-table-column prop="levelName" label="等级" min-width="120" />
        <el-table-column prop="statusText" label="状态" min-width="100">
          <template #default="scope">
            <el-tag :type="scope.row.status === 1 ? 'success' : 'info'">{{ scope.row.statusText }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="registerTimeText" label="注册时间" min-width="180" />
        <el-table-column label="操作" width="220" fixed="right">
          <template #default="scope">
            <el-button link type="primary" @click="openEdit(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="removeMember(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrap">
        <el-pagination layout="prev, pager, next, total" :total="filteredMembers.length" />
      </div>
    </el-card>

    <MemberFormDialog
      v-model="dialogVisible"
      :title="editingRow?.id ? '编辑会员' : '新增会员'"
      :form-data="formData"
      :level-options="levelOptions"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import MemberFormDialog from '../../components/member/MemberFormDialog.vue'
import { getMemberSummary, getRecentOrders } from '../../api/member-dashboard'
import { createMember, deleteMember, getMemberLevelList, getMemberList, updateMember } from '../../api/member'

const dialogVisible = ref(false)
const editingRow = ref<any | null>(null)
const formData = ref<any>({})
const query = reactive({ name: '', phone: '' })
const tableData = ref<any[]>([])
const levelOptions = ref<any[]>([])
const levelNameMap = ref<Record<number, string>>({})

const stats = ref([
  { label: '会员总数', value: 0 },
  { label: '今日新增', value: 0 },
  { label: '有效套餐', value: 0 },
  { label: '待处理订单', value: 0 }
])

const recentOrders = ref<any[]>([])
const memberStructure = ref({ normal: 0, gold: 0, diamond: 0, newThisMonth: 0 })

const filteredMembers = computed(() =>
  tableData.value.filter((item) => {
    const byName = !query.name || item.name?.includes(query.name)
    const byPhone = !query.phone || item.phone?.includes(query.phone)
    return byName && byPhone
  })
)

const formatDateTime = (value?: string | null) => {
  if (!value) return '-'
  return value.replace('T', ' ').slice(0, 19)
}

const mapMember = (item: any) => ({
  ...item,
  levelName: levelNameMap.value[item.levelId] || `等级${item.levelId ?? '-'}`,
  statusText: item.status === 1 ? '正常' : '冻结',
  registerTimeText: formatDateTime(item.registerTime)
})

const reset = async () => {
  query.name = ''
  query.phone = ''
  await loadMembers()
}

const loadLevels = async () => {
  const levelRes = await getMemberLevelList()
  levelOptions.value = levelRes?.data || []
  levelNameMap.value = Object.fromEntries(levelOptions.value.map((item: any) => [item.id, item.levelName]))
}

const buildMemberStructure = () => {
  const counts = tableData.value.reduce(
    (acc, item) => {
      if (item.levelName?.includes('普通')) acc.normal += 1
      else if (item.levelName?.includes('黄金')) acc.gold += 1
      else if (item.levelName?.includes('钻石')) acc.diamond += 1
      return acc
    },
    { normal: 0, gold: 0, diamond: 0 }
  )
  memberStructure.value = {
    ...counts,
    newThisMonth: stats.value[1]?.value || 0
  }
}

const loadMembers = async () => {
  if (!levelOptions.value.length) {
    await loadLevels()
  }
  const res = await getMemberList()
  tableData.value = (res?.data || []).map(mapMember)
  buildMemberStructure()
}

const loadDashboard = async () => {
  try {
    const [summaryRes, orderRes] = await Promise.all([getMemberSummary(), getRecentOrders()])
    if (summaryRes?.data) {
      stats.value = [
        { label: '会员总数', value: summaryRes.data.totalMembers ?? 0 },
        { label: '今日新增', value: summaryRes.data.todayNewMembers ?? 0 },
        { label: '有效套餐', value: summaryRes.data.activePackages ?? 0 },
        { label: '待处理订单', value: summaryRes.data.pendingOrders ?? 0 }
      ]
    }
    if (orderRes?.data) {
      recentOrders.value = orderRes.data
    }
    buildMemberStructure()
  } catch (error) {
    console.warn('member dashboard fallback', error)
  }
}

const openCreate = () => {
  editingRow.value = null
  formData.value = {
    memberNo: '',
    name: '',
    phone: '',
    levelId: levelOptions.value[0]?.id,
    remark: ''
  }
  dialogVisible.value = true
}

const openEdit = (row: any) => {
  editingRow.value = row
  formData.value = {
    memberNo: row.memberNo,
    name: row.name,
    phone: row.phone,
    levelId: row.levelId,
    remark: row.remark || ''
  }
  dialogVisible.value = true
}

const handleSubmit = async (payload: any) => {
  const req = {
    id: editingRow.value?.id,
    memberNo: payload.memberNo,
    name: payload.name,
    phone: payload.phone,
    levelId: Number(payload.levelId) || levelOptions.value[0]?.id,
    status: editingRow.value?.status ?? 1,
    remark: payload.remark
  }
  if (editingRow.value?.id) {
    await updateMember(req)
    ElMessage.success('会员更新成功')
  } else {
    await createMember(req)
    ElMessage.success('会员创建成功')
  }
  await loadMembers()
  await loadDashboard()
}

const removeMember = async (row: any) => {
  await ElMessageBox.confirm(`确认删除会员【${row.name}】吗？`, '提示', { type: 'warning' })
  await deleteMember(row.id)
  ElMessage.success('删除成功')
  await loadMembers()
  await loadDashboard()
}

onMounted(async () => {
  await loadLevels()
  await loadMembers()
  await loadDashboard()
})
</script>

<style scoped lang="scss">
.actions { display: flex; gap: 12px; }
.member-overview-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 16px; margin-bottom: 16px; }
.toolbar-card { margin-bottom: 16px; }
.pagination-wrap { display: flex; justify-content: flex-end; padding-top: 16px; }
</style>
