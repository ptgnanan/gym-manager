<template>
  <div>
    <div class="page-header">
      <div>
        <h2>课程管理</h2>
        <p>管理课程分类、课程、排期与预约记录</p>
      </div>
      <el-button type="primary">新增课程</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never">
      <el-table :data="courses">
        <el-table-column prop="name" label="课程名称" min-width="160" />
        <el-table-column prop="category" label="课程分类" min-width="120" />
        <el-table-column prop="coach" label="教练" min-width="100" />
        <el-table-column prop="duration" label="时长(分钟)" min-width="120" />
        <el-table-column prop="capacity" label="容量" min-width="100" />
        <el-table-column prop="status" label="状态" min-width="100">
          <template #default="scope">
            <el-tag :type="scope.row.status === '上架' ? 'success' : 'warning'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: '课程总数', value: 24 },
  { label: '本周排期', value: 68 },
  { label: '今日预约', value: 42 },
  { label: '私教记录', value: 15 }
]

const courses = [
  { name: '燃脂搏击操', category: '团课', coach: '王教练', duration: 60, capacity: 20, status: '上架' },
  { name: '核心私教进阶', category: '私教', coach: '刘教练', duration: 90, capacity: 1, status: '上架' }
]
</script>

<style scoped lang="scss">
.page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
.page-header p { color: var(--text-sub); margin: 6px 0 0; }
.stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:16px; }
.stat-card { padding:18px; border-radius:18px; background:linear-gradient(135deg,#ffffff,#f7fbff); border:1px solid rgba(59,130,246,.08); }
.label { color:var(--text-sub); margin-bottom:8px; }
.value { font-size:28px; font-weight:700; }
</style>
