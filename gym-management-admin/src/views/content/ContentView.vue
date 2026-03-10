<template>
  <div>
    <div class="page-header">
      <div>
        <h2>内容管理</h2>
        <p>管理轮播图、公告和系统内容说明</p>
      </div>
      <el-button type="primary" @click="dialogVisible = true">发布公告</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <div class="content-grid">
      <el-card shadow="never">
        <template #header>轮播图</template>
        <el-table :data="banners">
          <el-table-column prop="title" label="标题" min-width="120" />
          <el-table-column prop="sort" label="排序" min-width="80" />
          <el-table-column prop="status" label="状态" min-width="100" />
        </el-table>
      </el-card>
      <el-card shadow="never">
        <template #header>公告列表</template>
        <el-table :data="announcements">
          <el-table-column prop="title" label="标题" min-width="180" />
          <el-table-column prop="category" label="分类" min-width="100" />
          <el-table-column prop="status" label="状态" min-width="100" />
          <el-table-column label="操作" width="160">
            <template #default>
              <el-button link type="primary" @click="dialogVisible = true">编辑</el-button>
              <el-button link type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <AnnouncementFormDialog v-model="dialogVisible" title="公告信息" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AnnouncementFormDialog from '../../components/content/AnnouncementFormDialog.vue'
import { getContentSummary } from '../../api/content-dashboard'
import { getAnnouncements } from '../../api/content'

const dialogVisible = ref(false)
const handleSubmit = (payload: unknown) => console.log('announcement submit', payload)
const stats = ref([
  { label: '轮播图数量', value: 4 },
  { label: '公告总数', value: 12 },
  { label: '已发布', value: 10 },
  { label: '草稿数', value: 2 }
])
const banners = [
  { title: '新学期健身优惠活动', sort: 1, status: '启用' },
  { title: '私教课程推荐', sort: 2, status: '启用' }
]
const announcements = ref([
  { title: '关于清明节营业时间调整通知', category: '通知', status: '已发布' },
  { title: '春季塑形挑战赛报名开始', category: '活动', status: '已发布' }
])

onMounted(async () => {
  try {
    const [summaryRes, announcementRes] = await Promise.all([getContentSummary(), getAnnouncements()])
    if (summaryRes?.data) {
      stats.value = [
        { label: '轮播图数量', value: summaryRes.data.bannerCount },
        { label: '公告总数', value: summaryRes.data.announcementCount },
        { label: '已发布', value: summaryRes.data.publishedCount },
        { label: '草稿数', value: summaryRes.data.draftCount }
      ]
    }
    if (announcementRes?.data) {
      announcements.value = announcementRes.data
    }
  } catch (error) {
    console.warn('content dashboard fallback', error)
  }
})
</script>

<style scoped lang="scss">
.content-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
</style>
