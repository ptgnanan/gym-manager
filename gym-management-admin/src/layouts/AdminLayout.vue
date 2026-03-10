<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <div class="brand">GYM Admin</div>
      <div v-for="item in menus" :key="item.path" class="menu-item" @click="go(item.path)">
        {{ item.label }}
      </div>
    </aside>
    <div class="main">
      <header class="topbar">
        <div>
          <div class="title">健身房会员管理系统</div>
          <div class="subtitle">现代化前后端分离管理后台</div>
        </div>
        <div class="user-area">
          <span class="username">{{ userInfo?.nickname || userInfo?.username || '管理员' }}</span>
          <el-button type="danger" round @click="handleLogout">退出登录</el-button>
        </div>
      </header>
      <section class="content-panel">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import { getUser, clearAuth } from '../utils/auth'
import { ref } from 'vue'

const router = useRouter()
const userInfo = ref(getUser())

const menus = [
  { label: '仪表盘', path: '/dashboard' },
  { label: '系统管理', path: '/system' },
  { label: '系统状态', path: '/system-status' },
  { label: '会员管理', path: '/member' },
  { label: '会员等级', path: '/member-level' },
  { label: '会员套餐', path: '/member-package' },
  { label: '会员订单', path: '/member-order' },
  { label: '教练管理', path: '/coach' },
  { label: '课程管理', path: '/course' },
  { label: '反馈管理', path: '/feedback' },
  { label: '器材管理', path: '/equipment' },
  { label: '内容管理', path: '/content' }
]

const go = (path: string) => router.push(path)

const handleLogout = async () => {
  try {
    await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    clearAuth()
    ElMessage.success('已退出登录')
    router.push('/login')
  } catch {
    // 用户取消
  }
}
</script>

<style scoped lang="scss">
.admin-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  background: linear-gradient(135deg, #f4f7fb 0%, #eef3ff 100%);
}
.sidebar {
  padding: 24px 16px;
  background: rgba(15, 23, 42, 0.96);
  color: #fff;
  box-shadow: 8px 0 30px rgba(15, 23, 42, 0.18);
  overflow-y: auto;
}
.brand {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
}
.menu-item {
  padding: 12px 14px;
  margin-bottom: 10px;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.menu-item:hover {
  background: rgba(59, 130, 246, 0.22);
}
.main {
  padding: 20px;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px 24px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.08);
}
.user-area {
  display: flex;
  align-items: center;
  gap: 12px;
}
.username {
  color: #374151;
  font-weight: 500;
}
.title {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
}
.subtitle {
  color: #6b7280;
  margin-top: 6px;
}
.content-panel {
  min-height: calc(100vh - 120px);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
  padding: 24px;
}
</style>
