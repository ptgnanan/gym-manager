<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员等级</h2>
        <p>设置不同会员等级、折扣与说明</p>
      </div>
      <el-button type="primary" @click="dialogVisible = true">新增等级</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="等级名称"><el-input placeholder="请输入等级名称" /></el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <el-table :data="levels">
        <el-table-column prop="levelName" label="等级名称" min-width="140" />
        <el-table-column prop="levelValue" label="等级值" min-width="100" />
        <el-table-column prop="discountRate" label="折扣率" min-width="120" />
        <el-table-column prop="description" label="说明" min-width="180" />
        <el-table-column label="操作" width="160">
          <template #default>
            <el-button link type="primary" @click="dialogVisible = true">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <MemberLevelFormDialog v-model="dialogVisible" title="会员等级" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MemberLevelFormDialog from '../../components/member/MemberLevelFormDialog.vue'
const dialogVisible = ref(false)
const handleSubmit = (payload: unknown) => console.log('level submit', payload)
const stats = [
  { label: '等级总数', value: 4 },
  { label: '普通会员', value: 1 },
  { label: '高级会员', value: 2 },
  { label: '最高折扣', value: '88%' }
]
const levels = [
  { levelName: '普通会员', levelValue: 1, discountRate: '100%', description: '默认会员等级' },
  { levelName: '黄金会员', levelValue: 2, discountRate: '92%', description: '享受课程折扣' }
]
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom:16px; }
</style>
