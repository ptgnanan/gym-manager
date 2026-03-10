<template>
  <el-dialog v-model="visible" :title="title" width="620px">
    <el-form :model="form" label-width="90px">
      <el-row :gutter="16">
        <el-col :span="12"><el-form-item label="订单号"><el-input v-model="form.orderNo" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="会员"><el-input v-model="form.memberName" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="套餐"><el-input v-model="form.packageName" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="应付金额"><el-input v-model="form.payableAmount" /></el-form-item></el-col>
        <el-col :span="12"><el-form-item label="支付状态"><el-select v-model="form.paymentStatus"><el-option label="待支付" value="待支付" /><el-option label="已支付" value="已支付" /></el-select></el-form-item></el-col>
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
const props = defineProps<{ modelValue: boolean; title?: string }>()
const emit = defineEmits(['update:modelValue', 'submit'])
const visible = computed({ get: () => props.modelValue, set: (v:boolean) => emit('update:modelValue', v) })
const form = { orderNo: 'O20260310003', memberName: '', packageName: '', payableAmount: '', paymentStatus: '待支付' }
const submit = () => { emit('submit', { ...form }); visible.value = false }
</script>
