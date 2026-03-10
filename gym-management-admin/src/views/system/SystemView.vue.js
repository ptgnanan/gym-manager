import { computed, onMounted, ref } from 'vue';
import { getSystemHealth } from '../../api/system';
import { getSystemRoles, getSystemUsers } from '../../api/system-manage';
const sourceUsers = ref([]);
const roles = ref([]);
const stats = computed(() => [
    { label: '系统用户', value: sourceUsers.value.length },
    { label: '角色数量', value: roles.value.length },
    { label: '菜单节点', value: 36 },
    { label: '活跃账号', value: sourceUsers.value.length }
]);
const users = computed(() => sourceUsers.value);
const healthText = ref('系统运行正常，接口连通中');
onMounted(async () => {
    const [healthRes, userRes, roleRes] = await Promise.all([
        getSystemHealth(),
        getSystemUsers(),
        getSystemRoles()
    ]);
    if (healthRes?.data?.status === 'ok') {
        healthText.value = `服务状态正常，最近检查时间：${healthRes.data.time}`;
    }
    sourceUsers.value = userRes?.data || [];
    roles.value = roleRes?.data || [];
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "page-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
const __VLS_0 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    type: "primary",
}));
const __VLS_2 = __VLS_1({
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "stats-grid" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.stats))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stat-card" },
        key: (item.label),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "label" },
    });
    (item.label);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "value" },
    });
    (item.value);
}
const __VLS_4 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    shadow: "never",
    ...{ class: "status-card" },
}));
const __VLS_6 = __VLS_5({
    shadow: "never",
    ...{ class: "status-card" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_7.slots;
}
const __VLS_8 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    title: (__VLS_ctx.healthText),
    type: "success",
    closable: (false),
    showIcon: true,
}));
const __VLS_10 = __VLS_9({
    title: (__VLS_ctx.healthText),
    type: "success",
    closable: (false),
    showIcon: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "system-grid" },
});
const __VLS_12 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    shadow: "never",
}));
const __VLS_14 = __VLS_13({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_15.slots;
}
const __VLS_16 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    data: (__VLS_ctx.users),
}));
const __VLS_18 = __VLS_17({
    data: (__VLS_ctx.users),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    prop: "username",
    label: "账号",
    minWidth: "120",
}));
const __VLS_22 = __VLS_21({
    prop: "username",
    label: "账号",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    prop: "nickname",
    label: "昵称",
    minWidth: "120",
}));
const __VLS_26 = __VLS_25({
    prop: "nickname",
    label: "昵称",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_28 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    prop: "role",
    label: "角色",
    minWidth: "120",
}));
const __VLS_30 = __VLS_29({
    prop: "role",
    label: "角色",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
var __VLS_19;
var __VLS_15;
const __VLS_32 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    shadow: "never",
}));
const __VLS_34 = __VLS_33({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_35.slots;
}
const __VLS_36 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    data: (__VLS_ctx.roles),
}));
const __VLS_38 = __VLS_37({
    data: (__VLS_ctx.roles),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
const __VLS_40 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    prop: "name",
    label: "角色名",
    minWidth: "120",
}));
const __VLS_42 = __VLS_41({
    prop: "name",
    label: "角色名",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_44 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    prop: "desc",
    label: "说明",
    minWidth: "180",
}));
const __VLS_46 = __VLS_45({
    prop: "desc",
    label: "说明",
    minWidth: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
var __VLS_39;
var __VLS_35;
/** @type {__VLS_StyleScopedClasses['page-header']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['status-card']} */ ;
/** @type {__VLS_StyleScopedClasses['system-grid']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            roles: roles,
            stats: stats,
            users: users,
            healthText: healthText,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
