<template>
  <div>
    <div class="page-header">
      <div>
        <h2>内容管理</h2>
        <p>管理轮播图、公告和系统内容说明</p>
      </div>
      <el-button type="primary" @click="openCreate">发布公告</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="公告标题"><el-input v-model="keyword" placeholder="请输入公告标题" /></el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button @click="keyword = ''">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

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
            <template #default="scope">
              <el-button link type="primary" @click="openEdit(scope.row)">编辑</el-button>
              <el-button link type="danger" @click="removeAnnouncement(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-wrap">
          <el-pagination layout="prev, pager, next, total" :total="announcements.length" />
        </div>
      </el-card>
    </div>
    <AnnouncementFormDialog v-model="dialogVisible" :title="editingRow?.id ? '编辑公告' : '发布公告'" :form-data="formData" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import AnnouncementFormDialog from '../../components/content/AnnouncementFormDialog.vue'
import { getContentSummary } from '../../api/content-dashboard'
import { createAnnouncement, deleteAnnouncement, getAnnouncements, getBanners, updateAnnouncement } from '../../api/content'

const dialogVisible = ref(false)
const editingRow = ref<any | null>(null)
const formData = ref<any>({})
const keyword = ref('')
const stats = ref<any[]>([])
const banners = ref<any[]>([])
const sourceAnnouncements = ref<any[]>([])
const announcements = computed(() => sourceAnnouncements.value.filter(item => !keyword.value || item.title?.includes(keyword.value)))

const mapStatus = (status: string) => (status === 'PUBLISHED' ? '已发布' : '草稿')

const loadData = async () => {
  const [summaryRes, announcementRes, bannerRes] = await Promise.all([getContentSummary(), getAnnouncements(), getBanners()])
  if (summaryRes?.data) {
    stats.value = [
      { label: '轮播图数量', value: summaryRes.data.bannerCount },
      { label: '公告总数', value: summaryRes.data.announcementCount },
      { label: '已发布', value: summaryRes.data.publishedCount },
      { label: '草稿数', value: summaryRes.data.draftCount }
    ]
  }
  banners.value = (bannerRes?.data || []).map((item: any) => ({
    title: item.title,
    sort: item.sortNo,
    status: item.status === 1 ? '启用' : '停用'
  }))
  sourceAnnouncements.value = (announcementRes?.data || []).map((item: any) => ({
    id: item.id,
    title: item.title,
    category: item.categoryId ?? '-',
    summary: item.summary,
    content: item.content,
    status: mapStatus(item.publishStatus)
  }))
}

const openCreate = () => {
  editingRow.value = null
  formData.value = { title: '', categoryId: 1, summary: '', content: '' }
  dialogVisible.value = true
}

const openEdit = (row: any) => {
  editingRow.value = row
  formData.value = { title: row.title, categoryId: row.category || 1, summary: row.summary, content: row.content }
  dialogVisible.value = true
}

const handleSubmit = async (payload: any) => {
  const req = {
    id: editingRow.value?.id,
    categoryId: Number(payload.categoryId) || 1,
    title: payload.title,
    summary: payload.summary,
    content: payload.content,
    publishStatus: 'PUBLISHED'
  }
  if (editingRow.value?.id) {
    await updateAnnouncement(req)
    ElMessage.success('公告更新成功')
  } else {
    await createAnnouncement(req)
    ElMessage.success('公告发布成功')
  }
  await loadData()
}

const removeAnnouncement = async (row: any) => {
  await ElMessageBox.confirm(`确认删除公告【${row.title}】吗？`, '提示', { type: 'warning' })
  await deleteAnnouncement(row.id)
  ElMessage.success('删除成功')
  await loadData()
}

onMounted(loadData)
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom:16px; }
.content-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.pagination-wrap { display:flex; justify-content:flex-end; padding-top:16px; }
</style>
