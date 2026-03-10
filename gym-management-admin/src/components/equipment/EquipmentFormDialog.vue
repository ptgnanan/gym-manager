<template>
  <el-dialog v-model="visible" :title="title" width="620px">
    <el-form :model="form" label-width="90px">
      <el-row :gutter="16">
        <el-col :span="12"><el-form-item label="器材编号"><el-input v-model="form.equipmentNo" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="器材名称"><el-input v-model="form.name" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="分类ID"><el-input-number v-model="form.categoryId" :min="1" :max="9999" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="库存"><el-input-number v-model="form.quantity" :min="0" :max="999" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="位置"><el-input v-model="form.location" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="状态"><el-select v-model="form.status"><el-option label="正常" value="正常" /><el-option label="维护中" value="维护中" /></el-select></el-form-item></el-col>
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
const defaultForm = { equipmentNo: '', name: '', categoryId: 1, quantity: 1, location: '', status: '正常' }
const form = reactive({ ...defaultForm })
watch(() => props.modelValue, (open) => {
  if (!open) return
  Object.assign(form, defaultForm, props.formData || {})
}, { immediate: true })
const submit = () => { emit('submit', { ...form }); visible.value = false }
</script>
