<template>
  <div class="login-page">
    <div class="login-card">
      <h1>欢迎回来</h1>
      <p>健身房会员管理系统后台</p>
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入账号" />
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-button type="primary" class="full" @click="goHome">进入系统</el-button>
      </el-form>
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
  width: 420px;
  padding: 36px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}
.full { width: 100%; }
h1 { margin: 0 0 10px; }
p { color: #6b7280; margin-bottom: 24px; }
</style>
