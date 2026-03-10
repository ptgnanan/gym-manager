<template>
  <div>
    <div class="page-header">
      <div>
        <h2>系统状态</h2>
        <p>用于演示系统当前运行状态与技术栈信息</p>
      </div>
      <el-button type="primary">刷新状态</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never">
      <template #header>环境信息</template>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="前端技术栈">Vue 3 + Vite + Element Plus</el-descriptions-item>
        <el-descriptions-item label="后端技术栈">Spring Boot 3 + JDK 21</el-descriptions-item>
        <el-descriptions-item label="数据库">MySQL 8</el-descriptions-item>
        <el-descriptions-item label="架构模式">前后端分离</el-descriptions-item>
        <el-descriptions-item label="当前模式">毕业设计演示版</el-descriptions-item>
        <el-descriptions-item label="系统状态">运行正常</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: '前端状态', value: '正常' },
  { label: '模块数量', value: 10 },
  { label: '页面数量', value: 12 },
  { label: '演示进度', value: '持续推进中' }
]
</script>
