<template>
  <div>
    <div class="page-header">
      <div>
        <h2>教练管理</h2>
        <p>管理教练信息、专长方向与教学状态</p>
      </div>
      <el-button type="primary">新增教练</el-button>
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
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const coaches = [
  { coachNo: 'C001', name: '王教练', phone: '13900000001', specialty: '增肌 / 力量训练', status: '在职' },
  { coachNo: 'C002', name: '刘教练', phone: '13900000002', specialty: '减脂 / 私教塑形', status: '在职' }
]
</script>

<style scoped lang="scss">
.page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
.page-header p { color: var(--text-sub); margin: 6px 0 0; }
</style>
