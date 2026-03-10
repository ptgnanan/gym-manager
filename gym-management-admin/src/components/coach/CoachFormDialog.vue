<template>
  <el-dialog v-model="visible" :title="title" width="620px">
    <el-form :model="form" label-width="90px">
      <el-row :gutter="16">
        <el-col :span="12"><el-form-item label="教练编号"><el-input v-model="form.coachNo" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="姓名"><el-input v-model="form.name" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="手机号"><el-input v-model="form.phone" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="擅长方向"><el-input v-model="form.specialty" /></el-form-item></el-col>
        <el-col :span="24"><el-form-item label="简介"><el-input v-model="form.introduction" type="textarea" :rows="4" /></el-form-item></el-col>
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
const props = defineProps<{ modelValue: boolean; title?: string; formData?: Record<string, any> | null }>()
const emit = defineEmits(['update:modelValue', 'submit'])
const visible = computed({ get: () => props.modelValue, set: (v:boolean) => emit('update:modelValue', v) })
const defaultForm = { coachNo: '', name: '', phone: '', specialty: '', introduction: '' }
const form = reactive({ ...defaultForm })
watch(() => props.modelValue, (open) => {
  if (!open) return
  Object.assign(form, defaultForm, props.formData || {})
}, { immediate: true })
const submit = () => { emit('submit', { ...form }); visible.value = false }
</script>
