<template>
  <div>
    <div class="page-header">
      <div>
        <h2>反馈管理</h2>
        <p>查看课程评价、会员反馈和身体指标记录</p>
      </div>
      <el-button type="primary">新增体测</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <div class="feedback-grid">
      <el-card shadow="never">
        <template #header>评价反馈</template>
        <el-table :data="reviews">
          <el-table-column prop="member" label="会员" min-width="100" />
          <el-table-column prop="target" label="对象" min-width="120" />
          <el-table-column prop="rating" label="评分" min-width="100" />
          <el-table-column prop="status" label="状态" min-width="100" />
        </el-table>
      </el-card>
      <el-card shadow="never">
        <template #header>身体指标</template>
        <el-table :data="metrics">
          <el-table-column prop="member" label="会员" min-width="100" />
          <el-table-column prop="weight" label="体重/kg" min-width="100" />
          <el-table-column prop="fat" label="体脂率" min-width="100" />
          <el-table-column prop="bmi" label="BMI" min-width="80" />
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getFeedbackList } from '../../api/feedback'

const reviews = ref<any[]>([])
const metrics = ref<any[]>([])
const stats = computed(() => [
  { label: '评价总数', value: reviews.value.length },
  { label: '待审核', value: reviews.value.filter(i => i.status === '待审核').length },
  { label: '本周体测', value: metrics.value.length },
  { label: '高分课程', value: reviews.value.filter(i => Number(i.rating) >= 5).length }
])

onMounted(async () => {
  const res = await getFeedbackList()
  reviews.value = res?.data || []
  metrics.value = [
    { member: '张三', weight: 68, fat: '18%', bmi: 22.1 },
    { member: '李四', weight: 54, fat: '22%', bmi: 20.4 }
  ]
})
</script>

<style scoped lang="scss">
.feedback-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
</style>
