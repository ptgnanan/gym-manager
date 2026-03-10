<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员套餐</h2>
        <p>管理时长卡、次卡、私教套餐等产品</p>
      </div>
      <el-button type="primary" @click="dialogVisible = true">新增套餐</el-button>
    </div>
    <el-card shadow="never">
      <el-table :data="packages">
        <el-table-column prop="packageName" label="套餐名称" min-width="160" />
        <el-table-column prop="packageType" label="类型" min-width="120" />
        <el-table-column prop="price" label="价格" min-width="120" />
        <el-table-column prop="durationDays" label="时长(天)" min-width="120" />
        <el-table-column prop="sessionCount" label="次数" min-width="100" />
        <el-table-column label="操作" width="160">
          <template #default>
            <el-button link type="primary" @click="dialogVisible = true">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <MemberPackageFormDialog v-model="dialogVisible" title="会员套餐" @submit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MemberPackageFormDialog from '../../components/member/MemberPackageFormDialog.vue'
const dialogVisible = ref(false)
const handleSubmit = (payload: unknown) => console.log('package submit', payload)
const packages = [
  { packageName: '月卡', packageType: 'TIME', price: '299.00', durationDays: 30, sessionCount: '-' },
  { packageName: '私教10节课', packageType: 'COUNT', price: '1999.00', durationDays: '-', sessionCount: 10 }
]
</script>

<style scoped lang="scss">
.page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
.page-header p { color: var(--text-sub); margin: 6px 0 0; }
</style>
