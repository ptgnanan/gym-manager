<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员套餐</h2>
        <p>管理时长卡、次卡、私教套餐等产品</p>
      </div>
      <el-button type="primary" @click="dialogVisible = true">新增套餐</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="套餐名称"><el-input v-model="keyword" placeholder="请输入套餐名称" /></el-form-item>
        <el-form-item label="套餐类型">
          <el-select v-model="packageType" clearable placeholder="请选择" style="width:140px">
            <el-option label="时长卡" value="TIME" />
            <el-option label="次卡" value="COUNT" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

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
import { computed, onMounted, ref } from 'vue'
import MemberPackageFormDialog from '../../components/member/MemberPackageFormDialog.vue'
import { getMemberPackageList } from '../../api/member'

const dialogVisible = ref(false)
const keyword = ref('')
const packageType = ref('')
const reset = () => { keyword.value = ''; packageType.value = '' }
const handleSubmit = (payload: unknown) => console.log('package submit', payload)
const sourcePackages = ref<any[]>([])
const packages = computed(() => sourcePackages.value.filter(item => {
  const byName = !keyword.value || item.packageName?.includes(keyword.value)
  const byType = !packageType.value || item.packageType === packageType.value
  return byName && byType
}))
const stats = computed(() => [
  { label: '套餐总数', value: sourcePackages.value.length || 0 },
  { label: '时长卡', value: sourcePackages.value.filter(i => i.packageType === 'TIME').length },
  { label: '次卡/私教', value: sourcePackages.value.filter(i => i.packageType === 'COUNT').length },
  { label: '热门套餐', value: sourcePackages.value[0]?.packageName || '-' }
])

onMounted(async () => {
  try {
    const res = await getMemberPackageList()
    if (res?.data) sourcePackages.value = res.data
  } catch (error) {
    console.warn('member package fallback', error)
    sourcePackages.value = [
      { packageName: '月卡', packageType: 'TIME', price: '299.00', durationDays: 30, sessionCount: '-' },
      { packageName: '私教10节课', packageType: 'COUNT', price: '1999.00', durationDays: '-', sessionCount: 10 }
    ]
  }
})
</script>

<style scoped lang="scss">
.toolbar-card { margin-bottom:16px; }
</style>
