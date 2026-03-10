<template>
  <el-dialog v-model="visible" :title="title" width="680px">
    <el-form :model="form" label-width="90px">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="订单号">
            <el-input v-model="form.orderNo" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="会员">
            <el-select v-model="form.memberId" placeholder="请选择会员" style="width: 100%" filterable>
              <el-option
                v-for="item in memberOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="套餐">
            <el-select v-model="form.packageId" placeholder="请选择套餐" style="width: 100%" filterable>
              <el-option
                v-for="item in packageOptions"
                :key="item.id"
                :label="item.packageName"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="应付金额">
            <el-input-number v-model="form.payableAmount" :min="0" :max="999999" style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="支付状态">
            <el-select v-model="form.paymentStatus" style="width: 100%">
              <el-option label="待支付" value="待支付" />
              <el-option label="已支付" value="已支付" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="submit">保存</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from 'vue'

interface MemberOption {
  id: number
  name: string
}

interface PackageOption {
  id: number
  packageName: string
}

const props = defineProps<{
  modelValue: boolean
  title?: string
  formData?: Record<string, any> | null
  memberOptions?: MemberOption[]
  packageOptions?: PackageOption[]
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const visible = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const defaultForm = {
  orderNo: '',
  memberId: undefined as number | undefined,
  packageId: undefined as number | undefined,
  payableAmount: 0,
  paymentStatus: '待支付'
}

const form = reactive({ ...defaultForm })

watch(
  () => props.modelValue,
  (open) => {
    if (!open) return
    Object.assign(form, defaultForm, props.formData || {})
    if (!form.memberId && props.memberOptions?.length) {
      form.memberId = props.memberOptions[0].id
    }
    if (!form.packageId && props.packageOptions?.length) {
      form.packageId = props.packageOptions[0].id
    }
  },
  { immediate: true }
)

const submit = () => {
  emit('submit', { ...form })
  visible.value = false
}
</script>
