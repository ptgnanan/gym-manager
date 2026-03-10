<template>
  <div>
    <div class="page-header">
      <div>
        <h2>系统管理</h2>
        <p>管理系统用户、角色与菜单权限（演示版）</p>
      </div>
      <el-button type="primary">新增用户</el-button>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>

    <div class="system-grid">
      <el-card shadow="never">
        <template #header>系统用户</template>
        <el-table :data="users">
          <el-table-column prop="username" label="账号" min-width="120" />
          <el-table-column prop="nickname" label="昵称" min-width="120" />
          <el-table-column prop="role" label="角色" min-width="120" />
        </el-table>
      </el-card>
      <el-card shadow="never">
        <template #header>角色配置</template>
        <el-table :data="roles">
          <el-table-column prop="name" label="角色名" min-width="120" />
          <el-table-column prop="desc" label="说明" min-width="180" />
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { label: '系统用户', value: 12 },
  { label: '角色数量', value: 4 },
  { label: '菜单节点', value: 36 },
  { label: '活跃账号', value: 9 }
]
const users = [
  { username: 'admin', nickname: '管理员', role: '系统管理员' },
  { username: 'reception01', nickname: '前台小李', role: '前台人员' }
]
const roles = [
  { name: '系统管理员', desc: '拥有系统全部权限' },
  { name: '前台人员', desc: '负责会员接待与订单处理' }
]
</script>

<style scoped lang="scss">
.system-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
</style>
