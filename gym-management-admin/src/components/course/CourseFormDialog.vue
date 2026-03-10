<template>
  <el-dialog v-model="visible" :title="title" width="620px">
    <el-form :model="form" label-width="90px">
      <el-row :gutter="16">
        <el-col :span="12"><el-form-item label="课程名称"><el-input v-model="form.courseName" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="课程分类"><el-select v-model="form.category"><el-option label="团课" value="团课" /><el-option label="私教" value="私教" /></el-select></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="教练"><el-input v-model="form.coach" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="时长"><el-input-number v-model="form.duration" :min="30" :max="180" /></el-form-item></el-col>
        <el-col :span="24"><el-form-item label="课程说明"><el-input v-model="form.description" type="textarea" :rows="3" /></el-form-item></el-col>
      </el-row>
    </el-form>
    <template #footer>
      <el-button @click="visible=false">取消</el-button>
      <el-button type="primary" @click="submit">保存</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  title?: string
}>()
const emit = defineEmits(['update:modelValue', 'submit'])

const visible = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const form = {
  courseName: '',
  category: '团课',
  coach: '',
  duration: 60,
  description: ''
}

const submit = () => {
  emit('submit', { ...form })
  visible.value = false
}
</script>
