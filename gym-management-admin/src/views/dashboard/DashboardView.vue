<template>
  <div class="dashboard-page">
    <div class="hero-card">
      <div>
        <div class="hero-title">健身房会员管理系统</div>
        <div class="hero-subtitle">毕业设计演示版后台 · 前后端分离 · Vue3 + Spring Boot 3</div>
      </div>
      <el-button type="primary" round>开始管理</el-button>
    </div>

    <div class="grid stats-grid">
      <div class="card stat-card" v-for="item in cards" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
        <div class="trend">{{ item.tip }}</div>
      </div>
    </div>

    <div class="grid content-grid">
      <div class="card panel large">
        <h3>系统概览</h3>
        <ul class="overview-list">
          <li>会员管理、套餐、订单、课程、器材、公告模块已拆分</li>
          <li>前端采用 Vue 3 + Element Plus，后端采用 Spring Boot 3</li>
          <li>当前目标：快速形成高完成度毕业设计演示系统</li>
        </ul>
      </div>
      <div class="card panel">
        <h3>本周重点</h3>
        <div class="badge-list">
          <el-tag>会员模块</el-tag>
          <el-tag type="success">课程模块</el-tag>
          <el-tag type="warning">订单模块</el-tag>
          <el-tag type="info">UI美化</el-tag>
        </div>
      </div>
      <div class="card panel">
        <h3>快捷入口</h3>
        <div class="quick-actions">
          <el-button plain @click="$router.push('/member')">新增会员</el-button>
          <el-button plain @click="$router.push('/course')">新增课程</el-button>
          <el-button plain @click="$router.push('/member-order')">创建订单</el-button>
          <el-button plain @click="$router.push('/content')">发布公告</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getDashboardStats } from '../../api/dashboard'

const cards = ref([
  { label: '今日新增会员', value: 18, tip: '较昨日 +12%' },
  { label: '今日订单数', value: 26, tip: '已支付 21 单' },
  { label: '课程预约数', value: 42, tip: '团课更受欢迎' },
  { label: '器材预警', value: 3, tip: '建议尽快维护' }
])

onMounted(async () => {
  try {
    const res = await getDashboardStats()
    if (res?.data) {
      cards.value = [
        { label: '今日新增会员', value: res.data.newMembers, tip: '较昨日 +12%' },
        { label: '今日订单数', value: res.data.todayOrders, tip: '已支付 21 单' },
        { label: '课程预约数', value: res.data.reservations, tip: '团课更受欢迎' },
        { label: '器材预警', value: res.data.equipmentWarnings, tip: '建议尽快维护' }
      ]
    }
  } catch (error) {
    console.warn('dashboard stats fallback', error)
  }
})
</script>

<style scoped lang="scss">
.dashboard-page { display:flex; flex-direction:column; gap:18px; }
.hero-card {
  display:flex; justify-content:space-between; align-items:center;
  padding:28px; border-radius:24px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color:#fff; box-shadow: 0 20px 50px rgba(59,130,246,.25);
}
.hero-title { font-size: 28px; font-weight: 800; }
.hero-subtitle { margin-top: 8px; opacity: .92; }
.grid { display:grid; gap:18px; }
.content-grid { grid-template-columns: 2fr 1fr 1fr; }
.card {
  padding:22px; border-radius:22px;
  background: linear-gradient(135deg,#ffffff,#f8fbff);
  border:1px solid rgba(59,130,246,.08);
  box-shadow: 0 14px 34px rgba(15,23,42,.06);
}
.trend { margin-top:8px; color:#3b82f6; font-size:13px; }
.panel h3 { margin-top:0; }
.overview-list { margin:0; padding-left:18px; color:#4b5563; line-height:1.9; }
.badge-list, .quick-actions { display:flex; flex-wrap:wrap; gap:10px; }
</style>
