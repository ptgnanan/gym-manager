<template>
  <div>
    <div class="page-header">
      <div>
        <h2>教练管理</h2>
        <p>管理教练信息、专长方向与教学状态</p>
      </div>
      <el-button type="primary" @click="dialogVisible = true">新增教练</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never">
      <el-table :data="coaches">
        <el-table-column prop="coachNo" label="教练编号" min-width="130" />
        <el-table-column prop="name" label="姓名" min-width="100" />
        <el-table-column prop="phone" label="手机号" min-width="140" />
        <el-table-column prop="specialty" label="擅长方向" min-width="180" />
        <el-table-column prop="status" label="状态" min-width="100">
          <template #default="scope">
            <el-tag :type="scope.row.status === '在职' ? 'success' : 'info'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template #default>
            <el-button link type="primary" @click="dialogVisible = true">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <CoachFormDialog v-model="dialogVisible" title="教练信息" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import CoachFormDialog from '../../components/coach/CoachFormDialog.vue'
import { getCoachList } from '../../api/coach'

const dialogVisible = ref(false)
const handleSubmit = (payload: unknown) => console.log('coach submit', payload)
const coaches = ref<any[]>([])
const stats = computed(() => [
  { label: '教练总数', value: coaches.value.length },
  { label: '在职教练', value: coaches.value.filter(i => i.status === '在职').length },
  { label: '明星私教', value: Math.min(3, coaches.value.length) },
  { label: '今日上课', value: 12 }
])

onMounted(async () => {
  const res = await getCoachList()
  coaches.value = res?.data || []
})
</script>
