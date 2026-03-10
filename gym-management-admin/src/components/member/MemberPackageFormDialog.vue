<template>
  <el-dialog v-model="visible" :title="title" width="600px">
    <el-form :model="form" label-width="90px">
      <el-row :gutter="16">
        <el-col :span="12"><el-form-item label="套餐名称"><el-input v-model="form.packageName" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="类型"><el-select v-model="form.packageType"><el-option label="时长卡" value="TIME" /><el-option label="次卡" value="COUNT" /></el-select></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="价格"><el-input-number v-model="form.price" :min="0" :max="999999" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="时长/次数"><el-input-number v-model="form.durationOrCount" :min="0" :max="9999" /></el-form-item></el-col>
        <el-col :span="24"><el-form-item label="说明"><el-input v-model="form.description" type="textarea" :rows="3" /></el-form-item></el-col>
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
const defaultForm = { packageName: '', packageType: 'TIME', price: 0, durationOrCount: 30, description: '' }
const form = reactive({ ...defaultForm })
watch(() => props.modelValue, (open) => {
  if (!open) return
  Object.assign(form, defaultForm, props.formData || {})
}, { immediate: true })
const submit = () => { emit('submit', { ...form }); visible.value = false }
</script>
