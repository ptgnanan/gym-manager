<template>
  <el-dialog v-model="visible" :title="title" width="620px">
    <el-form :model="form" label-width="90px">
      <el-row :gutter="16">
        <el-col :span="12"><el-form-item label="课程名称"><el-input v-model="form.courseName" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="课程类型"><el-select v-model="form.courseType"><el-option label="团课" value="GROUP" /><el-option label="私教" value="PRIVATE" /></el-select></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="分类ID"><el-input-number v-model="form.categoryId" :min="1" :max="9999" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="教练ID"><el-input-number v-model="form.coachId" :min="1" :max="9999" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="时长"><el-input-number v-model="form.durationMinutes" :min="30" :max="180" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="容量"><el-input-number v-model="form.capacity" :min="1" :max="200" /></el-form-item></el-col>
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
import { computed, reactive, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
  title?: string
  formData?: Record<string, any> | null
}>()
const emit = defineEmits(['update:modelValue', 'submit'])

const visible = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const defaultForm = {
  courseName: '',
  courseType: 'GROUP',
  categoryId: 1,
  coachId: 1,
  durationMinutes: 60,
  capacity: 20,
  description: ''
}
const form = reactive({ ...defaultForm })

watch(
  () => props.modelValue,
  (open) => {
    if (!open) return
    Object.assign(form, defaultForm, props.formData || {})
  },
  { immediate: true }
)

const submit = () => {
  emit('submit', { ...form })
  visible.value = false
}
</script>
