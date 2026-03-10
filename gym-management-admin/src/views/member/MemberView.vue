<template>
  <div>
    <div class="page-header">
      <div>
        <h2>会员管理</h2>
        <p>管理会员档案、等级、套餐、订单与充值记录</p>
      </div>
      <div class="actions">
        <el-button plain>导出</el-button>
        <el-button type="primary">新增会员</el-button>
      </div>
    </div>

    <el-card shadow="never" class="toolbar-card">
      <el-form inline>
        <el-form-item label="会员姓名">
          <el-input placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <el-table :data="tableData">
        <el-table-column prop="memberNo" label="会员编号" min-width="120" />
        <el-table-column prop="name" label="姓名" min-width="100" />
        <el-table-column prop="phone" label="手机号" min-width="140" />
        <el-table-column prop="level" label="等级" min-width="120" />
        <el-table-column prop="status" label="状态" min-width="100">
          <template #default="scope">
            <el-tag :type="scope.row.status === '正常' ? 'success' : 'info'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="registerTime" label="注册时间" min-width="180" />
        <el-table-column label="操作" width="220" fixed="right">
          <template #default>
            <el-button link type="primary">详情</el-button>
            <el-button link type="primary">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  { memberNo: 'M20260310001', name: '张三', phone: '13800000001', level: '黄金会员', status: '正常', registerTime: '2026-03-10 09:30:00' },
  { memberNo: 'M20260310002', name: '李四', phone: '13800000002', level: '普通会员', status: '正常', registerTime: '2026-03-10 09:45:00' }
]
</script>

<style scoped lang="scss">
.page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
.page-header p { color: var(--text-sub); margin: 6px 0 0; }
.actions { display:flex; gap:12px; }
.toolbar-card { margin-bottom: 16px; }
</style>
