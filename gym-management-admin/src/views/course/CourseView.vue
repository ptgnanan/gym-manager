<template>
  <div>
    <div class="page-header">
      <div>
        <h2>课程管理</h2>
        <p>管理课程分类、课程、排期与预约记录</p>
      </div>
      <el-button type="primary" @click="openCreate">新增课程</el-button>
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

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="课程名称"><el-input v-model="keyword" placeholder="请输入课程名称" /></el-form-item>
        <el-form-item label="课程分类">
          <el-select v-model="courseType" clearable placeholder="请选择" style="width:140px">
            <el-option label="团课" value="团课" />
            <el-option label="私教" value="私教" />
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>

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
          <template #default="scope">
            <el-button link type="primary" @click="openEdit(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="removeCourse(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <CourseFormDialog v-model="dialogVisible" :title="editingRow?.id ? '编辑课程' : '新增课程'" :form-data="formData" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import CourseFormDialog from '../../components/course/CourseFormDialog.vue'
import { getCourseSummary, getTodaySchedules } from '../../api/course-dashboard'
import { createCourse, deleteCourse, getCourseList, updateCourse } from '../../api/course'

const dialogVisible = ref(false)
const editingRow = ref<any | null>(null)
const formData = ref<any>({})
const keyword = ref('')
const courseType = ref('')
const stats = ref<any[]>([])
const schedules = ref<any[]>([])
const sourceCourses = ref<any[]>([])
const courses = computed(() => sourceCourses.value.filter(item => {
  const byName = !keyword.value || item.name?.includes(keyword.value)
  const byType = !courseType.value || item.category === courseType.value
  return byName && byType
}))

const mapCourse = (item: any) => ({
  id: item.id,
  name: item.courseName,
  category: item.courseType === 'GROUP' ? '团课' : '私教',
  coach: item.coachId ?? '待分配',
  duration: item.durationMinutes,
  capacity: item.capacity,
  status: item.status === 1 ? '上架' : '下架',
  courseType: item.courseType,
  categoryId: item.categoryId,
  coachId: item.coachId,
  durationMinutes: item.durationMinutes,
  description: item.description
})

const loadData = async () => {
  const [summaryRes, scheduleRes, listRes] = await Promise.all([
    getCourseSummary(),
    getTodaySchedules(),
    getCourseList()
  ])
  if (summaryRes?.data) {
    stats.value = [
      { label: '课程总数', value: summaryRes.data.totalCourses },
      { label: '本周排期', value: summaryRes.data.weeklySchedules },
      { label: '今日预约', value: summaryRes.data.todayReservations },
      { label: '私教记录', value: summaryRes.data.privateTrainingRecords }
    ]
  }
  schedules.value = scheduleRes?.data || []
  sourceCourses.value = (listRes?.data || []).map(mapCourse)
}

const openCreate = () => {
  editingRow.value = null
  formData.value = { courseName: '', courseType: 'GROUP', categoryId: 1, coachId: 1, durationMinutes: 60, capacity: 20, description: '' }
  dialogVisible.value = true
}

const openEdit = (row: any) => {
  editingRow.value = row
  formData.value = {
    courseName: row.name,
    courseType: row.courseType,
    categoryId: row.categoryId || 1,
    coachId: row.coachId || 1,
    durationMinutes: row.durationMinutes || row.duration,
    capacity: row.capacity || 20,
    description: row.description || ''
  }
  dialogVisible.value = true
}

const handleSubmit = async (payload: any) => {
  const req = {
    id: editingRow.value?.id,
    courseName: payload.courseName,
    courseType: payload.courseType,
    categoryId: Number(payload.categoryId) || 1,
    coachId: Number(payload.coachId) || 1,
    durationMinutes: Number(payload.durationMinutes) || 60,
    capacity: Number(payload.capacity) || 20,
    description: payload.description,
    status: editingRow.value?.status === '下架' ? 0 : 1
  }
  if (editingRow.value?.id) {
    await updateCourse(req)
    ElMessage.success('课程更新成功')
  } else {
    await createCourse(req)
    ElMessage.success('课程创建成功')
  }
  await loadData()
}

const removeCourse = async (row: any) => {
  await ElMessageBox.confirm(`确认删除课程【${row.name}】吗？`, '提示', { type: 'warning' })
  await deleteCourse(row.id)
  ElMessage.success('删除成功')
  await loadData()
}

onMounted(loadData)
</script>

<style scoped lang="scss">
.schedule-panel { margin-bottom:16px; }
.toolbar-card { margin-bottom:16px; }
</style>
