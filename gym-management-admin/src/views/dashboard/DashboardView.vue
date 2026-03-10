<template>
  <div>
    <h2>仪表盘</h2>
    <div class="grid">
      <div class="card" v-for="item in cards" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  { label: '今日新增会员', value: 18 },
  { label: '今日订单数', value: 26 },
  { label: '课程预约数', value: 42 },
  { label: '器材预警', value: 3 }
]
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 20px;
}
.card {
  padding: 22px;
  border-radius: 20px;
  background: linear-gradient(135deg, #ffffff, #f6faff);
  border: 1px solid rgba(59, 130, 246, 0.08);
}
.label { color: #6b7280; margin-bottom: 10px; }
.value { font-size: 30px; font-weight: 700; color: #111827; }
</style>
