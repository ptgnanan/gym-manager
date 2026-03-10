<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员订单</h2>
        <p>查看会员购卡、续费与套餐购买订单</p>
      </div>
      <el-button type="primary" @click="dialogVisible = true">创建订单</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="订单号"><el-input v-model="keyword" placeholder="请输入订单号" /></el-form-item>
        <el-form-item label="支付状态">
          <el-select v-model="paymentStatus" clearable placeholder="请选择" style="width:140px">
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
        <el-table-column prop="payableAmount" label="应付金额" min-width="120" />
        <el-table-column prop="paymentStatus" label="支付状态" min-width="120">
          <template #default="scope">
            <el-tag :type="scope.row.paymentStatus === '已支付' ? 'success' : 'warning'">{{ scope.row.paymentStatus }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template #default>
            <el-button link type="primary" @click="dialogVisible = true">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <MemberOrderFormDialog v-model="dialogVisible" title="会员订单" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import MemberOrderFormDialog from '../../components/member/MemberOrderFormDialog.vue'
import { getMemberOrderList } from '../../api/member'

const dialogVisible = ref(false)
const keyword = ref('')
const paymentStatus = ref('')
const reset = () => { keyword.value = ''; paymentStatus.value = '' }
const handleSubmit = (payload: unknown) => console.log('order submit', payload)
const sourceOrders = ref<any[]>([])
const orders = computed(() => sourceOrders.value.filter(item => {
  const byNo = !keyword.value || item.orderNo?.includes(keyword.value)
  const byStatus = !paymentStatus.value || item.paymentStatus === paymentStatus.value
  return byNo && byStatus
}))
const stats = computed(() => [
  { label: '订单总数', value: sourceOrders.value.length || 0 },
  { label: '已支付', value: sourceOrders.value.filter(i => i.paymentStatus === '已支付').length },
  { label: '待支付', value: sourceOrders.value.filter(i => i.paymentStatus === '待支付').length },
  { label: '本月营收', value: '¥ 32,600' }
])

onMounted(async () => {
  try {
    const res = await getMemberOrderList()
    if (res?.data) sourceOrders.value = res.data
  } catch (error) {
    console.warn('member order fallback', error)
    sourceOrders.value = [
      { orderNo: 'O20260310001', memberName: '张三', packageName: '月卡', payableAmount: '299.00', paymentStatus: '已支付' },
      { orderNo: 'O20260310002', memberName: '李四', packageName: '私教10节课', payableAmount: '1999.00', paymentStatus: '待支付' }
    ]
  }
})
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom:16px; }
</style>
