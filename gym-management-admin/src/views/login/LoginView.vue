<template>
  <div class="login-page">
    <div class="login-card">
      <div class="brand-area">
        <div class="brand-title">GYM 管理后台</div>
        <div class="brand-subtitle">毕业设计演示版 · 前后端分离系统</div>
      </div>
      <h1>欢迎回来</h1>
      <p>请输入账号密码进入健身房会员管理系统后台</p>
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入账号" />
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-button type="primary" class="full" @click="goHome">进入系统</el-button>
      </el-form>
      <div class="tips">推荐展示顺序：首页仪表盘 → 会员管理 → 课程管理 → 系统状态</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => router.push('/dashboard')
</script>

<style scoped lang="scss">
.login-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top right, #8b5cf6, transparent 25%), linear-gradient(135deg, #0f172a, #1e3a8a);
}
.login-card {
  width: 460px;
  padding: 36px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}
.brand-area { margin-bottom: 18px; }
.brand-title { font-size: 22px; font-weight: 800; color: #111827; }
.brand-subtitle { margin-top: 6px; color: #6b7280; }
.full { width: 100%; }
h1 { margin: 0 0 10px; }
p { color: #6b7280; margin-bottom: 24px; }
.tips { margin-top: 16px; color: #6b7280; font-size: 13px; line-height: 1.7; }
</style>
