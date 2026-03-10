<template>
  <el-dialog v-model="visible" :title="title" width="560px">
    <el-form :model="form" label-width="90px">
      <el-form-item label="等级名称"><el-input v-model="form.levelName" /></el-form-item>
      <el-form-item label="等级值"><el-input-number v-model="form.levelValue" :min="1" :max="10" /></el-form-item>
      <el-form-item label="折扣率"><el-input v-model="form.discountRate" placeholder="如 92%" /></el-form-item>
      <el-form-item label="说明"><el-input v-model="form.description" type="textarea" :rows="3" /></el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="visible=false">取消</el-button>
      <el-button type="primary" @click="submit">保存</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ modelValue: boolean; title?: string }>()
const emit = defineEmits(['update:modelValue', 'submit'])
const visible = computed({ get: () => props.modelValue, set: (v:boolean) => emit('update:modelValue', v) })
const form = { levelName: '', levelValue: 1, discountRate: '100%', description: '' }
const submit = () => { emit('submit', { ...form }); visible.value = false }
</script>
