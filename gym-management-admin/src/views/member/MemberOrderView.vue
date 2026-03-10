<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员订单</h2>
        <p>查看会员购卡、续费和套餐购买订单。</p>
      </div>
      <el-button type="primary" @click="openCreate">创建订单</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="订单号">
          <el-input v-model="keyword" placeholder="请输入订单号" />
        </el-form-item>
        <el-form-item label="支付状态">
          <el-select v-model="paymentStatus" clearable placeholder="请选择" style="width: 140px">
            <el-option label="已支付" value="已支付" />
            <el-option label="待支付" value="待支付" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <el-table :data="orders">
        <el-table-column prop="orderNo" label="订单号" min-width="180" />
        <el-table-column prop="memberName" label="会员" min-width="120" />
        <el-table-column prop="packageName" label="套餐" min-width="160" />
        <el-table-column prop="payableAmountText" label="应付金额" min-width="120" />
        <el-table-column prop="paymentStatusText" label="支付状态" min-width="120">
          <template #default="scope">
            <el-tag :type="scope.row.paymentStatusText === '已支付' ? 'success' : 'warning'">
              {{ scope.row.paymentStatusText }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template #default="scope">
            <el-button link type="primary" @click="openEdit(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="removeOrder(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <MemberOrderFormDialog
      v-model="dialogVisible"
      :title="editingRow?.id ? '编辑订单' : '创建订单'"
      :form-data="formData"
      :member-options="memberOptions"
      :package-options="packageOptions"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import MemberOrderFormDialog from '../../components/member/MemberOrderFormDialog.vue'
import {
  createMemberOrder,
  deleteMemberOrder,
  getMemberList,
  getMemberOrderList,
  getMemberPackageList,
  updateMemberOrder
} from '../../api/member'

const dialogVisible = ref(false)
const editingRow = ref<any | null>(null)
const formData = ref<any>({})
const keyword = ref('')
const paymentStatus = ref('')
const sourceOrders = ref<any[]>([])
const memberOptions = ref<any[]>([])
const packageOptions = ref<any[]>([])
const memberNameMap = ref<Record<number, string>>({})
const packageNameMap = ref<Record<number, string>>({})

const paymentStatusText = (status?: string | null) => {
  if (status === 'PAID' || status === '已支付') return '已支付'
  return '待支付'
}

const paymentStatusCode = (status?: string | null) => {
  if (status === '已支付' || status === 'PAID') return 'PAID'
  return 'UNPAID'
}

const orders = computed(() =>
  sourceOrders.value.filter((item) => {
    const byNo = !keyword.value || item.orderNo?.includes(keyword.value)
    const byStatus = !paymentStatus.value || item.paymentStatusText === paymentStatus.value
    return byNo && byStatus
  })
)

const stats = computed(() => [
  { label: '订单总数', value: sourceOrders.value.length || 0 },
  { label: '已支付', value: sourceOrders.value.filter((i) => i.paymentStatusText === '已支付').length },
  { label: '待支付', value: sourceOrders.value.filter((i) => i.paymentStatusText === '待支付').length },
  {
    label: '订单金额',
    value: `¥${sourceOrders.value.reduce((sum, item) => sum + Number(item.payableAmount || 0), 0).toFixed(2)}`
  }
])

const reset = () => {
  keyword.value = ''
  paymentStatus.value = ''
}

const mapOrder = (item: any) => ({
  ...item,
  memberName: memberNameMap.value[item.memberId] || `会员#${item.memberId}`,
  packageName: packageNameMap.value[item.packageId] || `套餐#${item.packageId}`,
  payableAmountText: `¥${Number(item.payableAmount || 0).toFixed(2)}`,
  paymentStatusText: paymentStatusText(item.paymentStatus)
})

const loadOptions = async () => {
  const [memberRes, packageRes] = await Promise.all([getMemberList(), getMemberPackageList()])
  memberOptions.value = memberRes?.data || []
  packageOptions.value = packageRes?.data || []
  memberNameMap.value = Object.fromEntries(memberOptions.value.map((item: any) => [item.id, item.name]))
  packageNameMap.value = Object.fromEntries(packageOptions.value.map((item: any) => [item.id, item.packageName]))
}

const loadOrders = async () => {
  if (!memberOptions.value.length || !packageOptions.value.length) {
    await loadOptions()
  }
  const res = await getMemberOrderList()
  sourceOrders.value = (res?.data || []).map(mapOrder)
}

const openCreate = () => {
  editingRow.value = null
  formData.value = {
    orderNo: '',
    memberId: memberOptions.value[0]?.id,
    packageId: packageOptions.value[0]?.id,
    payableAmount: 0,
    paymentStatus: '待支付'
  }
  dialogVisible.value = true
}

const openEdit = (row: any) => {
  editingRow.value = row
  formData.value = {
    orderNo: row.orderNo,
    memberId: row.memberId,
    packageId: row.packageId,
    payableAmount: Number(row.payableAmount) || 0,
    paymentStatus: row.paymentStatusText
  }
  dialogVisible.value = true
}

const handleSubmit = async (payload: any) => {
  const payable = Number(payload.payableAmount) || 0
  const req = {
    id: editingRow.value?.id,
    orderNo: payload.orderNo,
    memberId: Number(payload.memberId),
    packageId: Number(payload.packageId),
    amount: payable,
    discountAmount: editingRow.value?.discountAmount ?? 0,
    payableAmount: payable,
    paymentStatus: paymentStatusCode(payload.paymentStatus),
    orderStatus: editingRow.value?.orderStatus || 'CREATED',
    auditStatus: editingRow.value?.auditStatus || 'PENDING',
    paymentMethod: editingRow.value?.paymentMethod || 'CASH'
  }
  if (editingRow.value?.id) {
    await updateMemberOrder(req)
    ElMessage.success('订单更新成功')
  } else {
    await createMemberOrder(req)
    ElMessage.success('订单创建成功')
  }
  await loadOrders()
}

const removeOrder = async (row: any) => {
  await ElMessageBox.confirm(`确认删除订单【${row.orderNo}】吗？`, '提示', { type: 'warning' })
  await deleteMemberOrder(row.id)
  ElMessage.success('删除成功')
  await loadOrders()
}

onMounted(async () => {
  await loadOptions()
  await loadOrders()
})
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom: 16px; }
</style>
