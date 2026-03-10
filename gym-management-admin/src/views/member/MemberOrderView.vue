<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员订单</h2>
        <p>查看会员购卡、续费与套餐购买订单</p>
      </div>
      <el-button type="primary">创建订单</el-button>
    </div>
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
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const orders = [
  { orderNo: 'O20260310001', memberName: '张三', packageName: '月卡', payableAmount: '299.00', paymentStatus: '已支付' },
  { orderNo: 'O20260310002', memberName: '李四', packageName: '私教10节课', payableAmount: '1999.00', paymentStatus: '待支付' }
]
</script>

<style scoped lang="scss">
.page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
.page-header p { color: var(--text-sub); margin: 6px 0 0; }
</style>
