<template>
  <div>
    <div class="page-header">
      <div>
        <h2>课程管理</h2>
        <p>管理课程分类、课程、排期与预约记录</p>
      </div>
      <el-button type="primary" @click="dialogVisible = true">新增课程</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <div class="schedule-panel">
      <el-card shadow="never">
        <template #header>今日课程排期</template>
        <el-timeline>
          <el-timeline-item v-for="item in schedules" :key="item.time + item.name" :timestamp="item.time">
            {{ item.name }} · {{ item.coach }} · {{ item.location }}
          </el-timeline-item>
        </el-timeline>
      </el-card>
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
        <el-table-column label="操作" width="180">
          <template #default>
            <el-button link type="primary" @click="dialogVisible = true">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <CourseFormDialog v-model="dialogVisible" title="课程信息" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CourseFormDialog from '../../components/course/CourseFormDialog.vue'
import { getCourseSummary, getTodaySchedules } from '../../api/course-dashboard'

const dialogVisible = ref(false)
const handleSubmit = (payload: unknown) => console.log('course submit', payload)
const stats = ref([
  { label: '课程总数', value: 24 },
  { label: '本周排期', value: 68 },
  { label: '今日预约', value: 42 },
  { label: '私教记录', value: 15 }
])
const schedules = ref([
  { time: '09:00-10:00', name: '燃脂搏击操', coach: '王教练', location: 'A教室' },
  { time: '14:00-15:30', name: '核心私教进阶', coach: '刘教练', location: '私教室1' },
  { time: '19:00-20:00', name: '瑜伽拉伸', coach: '陈教练', location: 'B教室' }
])
const courses = [
  { name: '燃脂搏击操', category: '团课', coach: '王教练', duration: 60, capacity: 20, status: '上架' },
  { name: '核心私教进阶', category: '私教', coach: '刘教练', duration: 90, capacity: 1, status: '上架' }
]

onMounted(async () => {
  try {
    const [summaryRes, scheduleRes] = await Promise.all([getCourseSummary(), getTodaySchedules()])
    if (summaryRes?.data) {
      stats.value = [
        { label: '课程总数', value: summaryRes.data.totalCourses },
        { label: '本周排期', value: summaryRes.data.weeklySchedules },
        { label: '今日预约', value: summaryRes.data.todayReservations },
        { label: '私教记录', value: summaryRes.data.privateTrainingRecords }
      ]
    }
    if (scheduleRes?.data) {
      schedules.value = scheduleRes.data
    }
  } catch (error) {
    console.warn('course dashboard fallback', error)
  }
})
</script>

<style scoped lang="scss">
.schedule-panel { margin-bottom:16px; }
</style>
