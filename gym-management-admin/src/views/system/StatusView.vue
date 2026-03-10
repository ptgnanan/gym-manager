<template>
  <div>
    <div class="page-header">
      <div>
        <h2>系统状态</h2>
        <p>用于演示系统当前运行状态与技术栈信息</p>
      </div>
      <el-button type="primary" @click="loadStatus">刷新状态</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <div class="status-grid">
      <el-card shadow="never">
        <template #header>环境信息</template>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="前端技术栈">Vue 3 + Vite + Element Plus</el-descriptions-item>
          <el-descriptions-item label="后端技术栈">Spring Boot 3 + JDK 21</el-descriptions-item>
          <el-descriptions-item label="数据库">{{ detail.database }}</el-descriptions-item>
          <el-descriptions-item label="架构模式">{{ detail.architecture }}</el-descriptions-item>
          <el-descriptions-item label="当前模式">毕业设计演示版</el-descriptions-item>
          <el-descriptions-item label="系统状态">{{ detail.frontend }} / {{ detail.backend }}</el-descriptions-item>
          <el-descriptions-item label="最近刷新时间">{{ detail.time }}</el-descriptions-item>
        </el-descriptions>
      </el-card>
      <el-card shadow="never">
        <template #header>答辩展示建议</template>
        <ul class="tips-list">
          <li>先展示系统首页，再说明前后端分离架构。</li>
          <li>重点讲会员、课程、器材、内容四个主模块。</li>
          <li>说明页面已逐步接入后端演示接口，体现系统完整性。</li>
          <li>结尾展示本页，强调技术栈与当前系统状态。</li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getSystemStatus } from '../../api/system-status'

const stats = ref([
  { label: '前端状态', value: 'running' },
  { label: '模块数量', value: 10 },
  { label: '页面数量', value: 13 },
  { label: '演示进度', value: '持续推进中' }
])

const detail = ref({
  frontend: 'running',
  backend: 'developing',
  database: 'MySQL 8',
  architecture: '前后端分离',
  time: '-'
})

const loadStatus = async () => {
  try {
    const res = await getSystemStatus()
    if (res?.data) {
      detail.value = {
        frontend: res.data.frontend,
        backend: res.data.backend,
        database: res.data.database,
        architecture: res.data.architecture,
        time: res.data.time ?? '-'
      }
      stats.value = [
        { label: '前端状态', value: res.data.frontend },
        { label: '模块数量', value: 10 },
        { label: '页面数量', value: 13 },
        { label: '演示进度', value: '持续推进中' }
      ]
    }
  } catch (error) {
    console.warn('system status fallback', error)
  }
}

onMounted(loadStatus)
</script>

<style scoped lang="scss">
.status-grid { display:grid; grid-template-columns: 1.2fr 1fr; gap:16px; }
.tips-list { margin:0; padding-left:18px; color:#4b5563; line-height:1.9; }
</style>
