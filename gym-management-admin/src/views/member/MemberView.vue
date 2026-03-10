<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员管理</h2>
        <p>管理会员档案、等级、套餐、订单与充值记录</p>
      </div>
      <div class="actions">
        <el-button plain>导出</el-button>
        <el-button type="primary" @click="dialogVisible = true">新增会员</el-button>
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
          <el-descriptions-item label="普通会员">126 人</el-descriptions-item>
          <el-descriptions-item label="黄金会员">102 人</el-descriptions-item>
          <el-descriptions-item label="钻石会员">58 人</el-descriptions-item>
          <el-descriptions-item label="本月新增">42 人</el-descriptions-item>
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
          <el-button type="primary">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <el-table :data="filteredMembers">
        <el-table-column prop="memberNo" label="会员编号" min-width="120" />
        <el-table-column prop="name" label="姓名" min-width="100" />
        <el-table-column prop="phone" label="手机号" min-width="140" />
        <el-table-column prop="level" label="等级" min-width="120" />
        <el-table-column prop="status" label="状态" min-width="100">
          <template #default="scope">
            <el-tag :type="scope.row.status === '正常' ? 'success' : 'info'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="registerTime" label="注册时间" min-width="180" />
        <el-table-column label="操作" width="220" fixed="right">
          <template #default>
            <el-button link type="primary">详情</el-button>
            <el-button link type="primary" @click="dialogVisible = true">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrap">
        <el-pagination layout="prev, pager, next, total" :total="filteredMembers.length" />
      </div>
    </el-card>

    <MemberFormDialog v-model="dialogVisible" title="会员信息" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import MemberFormDialog from '../../components/member/MemberFormDialog.vue'
import { getMemberSummary, getRecentOrders } from '../../api/member-dashboard'

const dialogVisible = ref(false)
const query = reactive({ name: '', phone: '' })
const reset = () => { query.name = ''; query.phone = '' }
const handleSubmit = (payload: unknown) => console.log('member submit', payload)

const stats = ref([
  { label: '会员总数', value: 286 },
  { label: '今日新增', value: 18 },
  { label: '有效套餐', value: 164 },
  { label: '待处理订单', value: 5 }
])

const recentOrders = ref([
  { orderNo: 'O20260310001', memberName: '张三', packageName: '月卡', amount: '299.00', status: '已支付' },
  { orderNo: 'O20260310002', memberName: '李四', packageName: '私教10节课', amount: '1999.00', status: '待支付' }
])

const tableData = ref([
  { memberNo: 'M20260310001', name: '张三', phone: '13800000001', level: '黄金会员', status: '正常', registerTime: '2026-03-10 09:30:00' },
  { memberNo: 'M20260310002', name: '李四', phone: '13800000002', level: '普通会员', status: '正常', registerTime: '2026-03-10 09:45:00' }
])

const filteredMembers = computed(() => tableData.value.filter(item => {
  const byName = !query.name || item.name.includes(query.name)
  const byPhone = !query.phone || item.phone.includes(query.phone)
  return byName && byPhone
}))

onMounted(async () => {
  try {
    const [summaryRes, orderRes] = await Promise.all([getMemberSummary(), getRecentOrders()])
    if (summaryRes?.data) {
      stats.value = [
        { label: '会员总数', value: summaryRes.data.totalMembers },
        { label: '今日新增', value: summaryRes.data.todayNewMembers },
        { label: '有效套餐', value: summaryRes.data.activePackages },
        { label: '待处理订单', value: summaryRes.data.pendingOrders }
      ]
    }
    if (orderRes?.data) {
      recentOrders.value = orderRes.data
    }
  } catch (error) {
    console.warn('member dashboard fallback', error)
  }
})
</script>

<style scoped lang="scss">
.actions { display:flex; gap:12px; }
.member-overview-grid { display:grid; grid-template-columns: 1.4fr 1fr; gap:16px; margin-bottom:16px; }
.toolbar-card { margin-bottom: 16px; }
.pagination-wrap { display:flex; justify-content:flex-end; padding-top:16px; }
</style>
