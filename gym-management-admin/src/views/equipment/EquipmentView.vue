<template>
  <div>
    <div class="page-header">
      <div>
        <h2>器材管理</h2>
        <p>管理器材档案、库存、入库、出库与维护记录</p>
      </div>
      <el-button type="primary">新增器材</el-button>
    </div>

    <el-card shadow="never">
      <el-table :data="items">
        <el-table-column prop="equipmentNo" label="器材编号" min-width="140" />
        <el-table-column prop="name" label="器材名称" min-width="140" />
        <el-table-column prop="category" label="分类" min-width="120" />
        <el-table-column prop="quantity" label="库存" min-width="100" />
        <el-table-column prop="location" label="位置" min-width="120" />
        <el-table-column prop="status" label="状态" min-width="120">
          <template #default="scope">
            <el-tag :type="scope.row.status === '正常' ? 'success' : 'danger'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const items = [
  { equipmentNo: 'EQ-001', name: '跑步机', category: '有氧器械', quantity: 12, location: 'A区', status: '正常' },
  { equipmentNo: 'EQ-002', name: '史密斯架', category: '力量器械', quantity: 3, location: 'B区', status: '维护中' }
]
</script>

<style scoped lang="scss">
.page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
.page-header p { color: var(--text-sub); margin: 6px 0 0; }
</style>
