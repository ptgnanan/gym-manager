<template>
  <el-dialog v-model="visible" :title="title" width="620px">
    <el-form :model="form" label-width="90px">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="会员编号">
            <el-input v-model="form.memberNo" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="姓名">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号">
            <el-input v-model="form.phone" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="会员等级">
            <el-select v-model="form.levelId" placeholder="请选择会员等级" style="width: 100%">
              <el-option
                v-for="item in levelOptions"
                :key="item.id"
                :label="item.levelName"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注">
            <el-input v-model="form.remark" type="textarea" :rows="3" />
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

interface LevelOption {
  id: number
  levelName: string
}

const props = defineProps<{
  modelValue: boolean
  title?: string
  formData?: Record<string, any> | null
  levelOptions?: LevelOption[]
}>()

const emit = defineEmits(['update:modelValue', 'submit'])

const visible = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const defaultForm = {
  memberNo: '',
  name: '',
  phone: '',
  levelId: undefined as number | undefined,
  remark: ''
}

const form = reactive({ ...defaultForm })

watch(
  () => props.modelValue,
  (open) => {
    if (!open) return
    Object.assign(form, defaultForm, props.formData || {})
    if (!form.levelId && props.levelOptions?.length) {
      form.levelId = props.levelOptions[0].id
    }
  },
  { immediate: true }
)

const submit = () => {
  emit('submit', { ...form })
  visible.value = false
}
</script>
