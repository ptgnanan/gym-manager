import { useRouter } from 'vue-router';
import { ElMessageBox, ElMessage } from 'element-plus';
import { getUser, clearAuth } from '../utils/auth';
import { ref } from 'vue';
const router = useRouter();
const userInfo = ref(getUser());
const menus = [
    { label: '仪表盘', path: '/dashboard' },
    { label: '系统管理', path: '/system' },
    { label: '系统状态', path: '/system-status' },
    { label: '会员管理', path: '/member' },
    { label: '会员等级', path: '/member-level' },
    { label: '会员套餐', path: '/member-package' },
    { label: '会员订单', path: '/member-order' },
    { label: '教练管理', path: '/coach' },
    { label: '课程管理', path: '/course' },
    { label: '反馈管理', path: '/feedback' },
    { label: '器材管理', path: '/equipment' },
    { label: '内容管理', path: '/content' }
];
const go = (path) => router.push(path);
const handleLogout = async () => {
    try {
        await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        });
        clearAuth();
        ElMessage.success('已退出登录');
        router.push('/login');
    }
    catch {
        // 用户取消
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['menu-item']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "admin-layout" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({
    ...{ class: "sidebar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "brand" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menus))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.go(item.path);
            } },
        key: (item.path),
        ...{ class: "menu-item" },
    });
    (item.label);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "main" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "topbar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "subtitle" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "user-area" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "username" },
});
(__VLS_ctx.userInfo?.nickname || __VLS_ctx.userInfo?.username || '管理员');
const __VLS_0 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    type: "danger",
    round: true,
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    type: "danger",
    round: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.handleLogout)
};
__VLS_3.slots.default;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "content-panel" },
});
const __VLS_8 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['admin-layout']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['brand']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-item']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['user-area']} */ ;
/** @type {__VLS_StyleScopedClasses['username']} */ ;
/** @type {__VLS_StyleScopedClasses['content-panel']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            userInfo: userInfo,
            menus: menus,
            go: go,
            handleLogout: handleLogout,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
