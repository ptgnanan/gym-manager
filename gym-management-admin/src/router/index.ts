import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginView.vue')
  },
  {
    path: '/',
    component: () => import('../layouts/AdminLayout.vue'),
    redirect: '/dashboard',
    children: [
      { path: 'dashboard', name: 'Dashboard', component: () => import('../views/dashboard/DashboardView.vue') },
      { path: 'system', name: 'System', component: () => import('../views/system/SystemView.vue') },
      { path: 'system-status', name: 'SystemStatus', component: () => import('../views/system/StatusView.vue') },
      { path: 'member', name: 'Member', component: () => import('../views/member/MemberView.vue') },
      { path: 'member-level', name: 'MemberLevel', component: () => import('../views/member/MemberLevelView.vue') },
      { path: 'member-package', name: 'MemberPackage', component: () => import('../views/member/MemberPackageView.vue') },
      { path: 'member-order', name: 'MemberOrder', component: () => import('../views/member/MemberOrderView.vue') },
      { path: 'coach', name: 'Coach', component: () => import('../views/coach/CoachView.vue') },
      { path: 'course', name: 'Course', component: () => import('../views/course/CourseView.vue') },
      { path: 'feedback', name: 'Feedback', component: () => import('../views/feedback/FeedbackView.vue') },
      { path: 'equipment', name: 'Equipment', component: () => import('../views/equipment/EquipmentView.vue') },
      { path: 'content', name: 'Content', component: () => import('../views/content/ContentView.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
