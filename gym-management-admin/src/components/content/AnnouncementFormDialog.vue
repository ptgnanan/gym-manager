<template>
  <el-dialog v-model="visible" :title="title" width="680px">
    <el-form :model="form" label-width="90px">
      <el-form-item label="公告标题"><el-input v-model="form.title" /></el-form-item>
      <el-form-item label="公告分类"><el-input v-model="form.category" /></el-form-item>
      <el-form-item label="公告摘要"><el-input v-model="form.summary" /></el-form-item>
      <el-form-item label="公告内容"><el-input v-model="form.content" type="textarea" :rows="6" /></el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="visible=false">取消</el-button>
      <el-button type="primary" @click="submit">发布</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ modelValue: boolean; title?: string }>()
const emit = defineEmits(['update:modelValue', 'submit'])
const visible = computed({ get: () => props.modelValue, set: (v:boolean) => emit('update:modelValue', v) })
const form = { title: '', category: '通知', summary: '', content: '' }
const submit = () => { emit('submit', { ...form }); visible.value = false }
</script>
