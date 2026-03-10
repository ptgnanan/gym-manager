<template>
  <div class="register-page">
    <div class="register-card">
      <div class="brand-area">
        <div class="brand-title">GYM 用户注册</div>
        <div class="brand-subtitle">健身房会员管理系统 · 演示注册入口</div>
      </div>
      <h1>新用户注册</h1>
      <p>填写基础信息，完成系统演示注册流程</p>
      <el-form label-position="top">
        <el-row :gutter="16">
          <el-col :span="12">
            <el-form-item label="用户名"><el-input v-model="form.username" placeholder="请输入用户名" /></el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号"><el-input v-model="form.phone" placeholder="请输入手机号" /></el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码"><el-input v-model="form.password" type="password" placeholder="请输入密码" /></el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="确认密码"><el-input v-model="form.confirmPassword" type="password" placeholder="请再次输入密码" /></el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
              <el-select v-model="form.gender" placeholder="请选择性别" style="width:100%">
                <el-option label="男" value="1" />
                <el-option label="女" value="2" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="意向套餐">
              <el-select v-model="form.packageType" placeholder="请选择套餐" style="width:100%">
                <el-option label="月卡" value="month" />
                <el-option label="季卡" value="season" />
                <el-option label="私教体验课" value="private" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button type="primary" class="full" :loading="loading" @click="submitRegister">立即注册</el-button>
        <el-button class="full mt12" @click="goLogin">返回登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { registerApi } from '../../api/auth'

const router = useRouter()
const loading = ref(false)
const form = reactive({ username: '', phone: '', password: '', confirmPassword: '', gender: '', packageType: '' })

const submitRegister = async () => {
  loading.value = true
  try {
    const res = await registerApi(form)
    ElMessage.success(res?.data?.message || '注册成功')
    router.push('/login')
  } catch (error) {
    console.warn('register fallback', error)
    ElMessage.success('演示注册成功')
    router.push('/login')
  } finally {
    loading.value = false
  }
}
const goLogin = () => router.push('/login')
</script>

<style scoped lang="scss">
.register-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top left, #3b82f6, transparent 22%), linear-gradient(135deg, #0f172a, #1e40af);
}
.register-card {
  width: 760px;
  padding: 36px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.24);
}
.brand-area { margin-bottom: 16px; }
.brand-title { font-size: 22px; font-weight: 800; color: #111827; }
.brand-subtitle { margin-top: 6px; color: #6b7280; }
.full { width: 100%; }
.mt12 { margin-top: 12px; }
h1 { margin: 0 0 10px; }
p { color: #6b7280; margin-bottom: 24px; }
</style>
