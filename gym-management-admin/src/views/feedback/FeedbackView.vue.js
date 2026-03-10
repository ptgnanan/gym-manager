import { computed, onMounted, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { createMetric, deleteMetric, getFeedbackList, getMetricList } from '../../api/feedback';
const reviews = ref([]);
const metrics = ref([]);
const stats = computed(() => [
    { label: '评价总数', value: reviews.value.length },
    { label: '待审核', value: reviews.value.filter(i => i.status === '待审核').length },
    { label: '本周体测', value: metrics.value.length },
    { label: '高分课程', value: reviews.value.filter(i => Number(i.rating) >= 5).length }
]);
onMounted(async () => {
    await loadData();
});
const loadData = async () => {
    const [reviewRes, metricRes] = await Promise.all([getFeedbackList(), getMetricList()]);
    reviews.value = (reviewRes?.data || []).map((item) => ({
        id: item.id,
        member: item.memberId,
        target: `${item.targetType}-${item.targetId}`,
        rating: item.rating,
        status: item.auditStatus
    }));
    metrics.value = (metricRes?.data || []).map((item) => ({
        id: item.id,
        member: item.memberId,
        weight: item.weightKg,
        fat: item.bodyFatRate ? `${item.bodyFatRate}%` : '-',
        bmi: item.bmi
    }));
};
const addMetric = async () => {
    await createMetric({ memberId: 1, coachId: 1, heightCm: 170, weightKg: 65, bodyFatRate: 18, bmi: 22.5 });
    ElMessage.success('体测记录已新增');
    await loadData();
};
const removeMetric = async (row) => {
    await ElMessageBox.confirm('确认删除该体测记录吗？', '提示', { type: 'warning' });
    await deleteMetric(row.id);
    ElMessage.success('删除成功');
    await loadData();
};
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
    ...{ 'onClick': {} },
    type: "primary",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.addMetric)
};
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "feedback-grid" },
});
const __VLS_8 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    shadow: "never",
}));
const __VLS_10 = __VLS_9({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_11.slots;
}
const __VLS_12 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    data: (__VLS_ctx.reviews),
}));
const __VLS_14 = __VLS_13({
    data: (__VLS_ctx.reviews),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    prop: "member",
    label: "会员",
    minWidth: "100",
}));
const __VLS_18 = __VLS_17({
    prop: "member",
    label: "会员",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_20 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    prop: "target",
    label: "对象",
    minWidth: "120",
}));
const __VLS_22 = __VLS_21({
    prop: "target",
    label: "对象",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    prop: "rating",
    label: "评分",
    minWidth: "100",
}));
const __VLS_26 = __VLS_25({
    prop: "rating",
    label: "评分",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_28 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    prop: "status",
    label: "状态",
    minWidth: "100",
}));
const __VLS_30 = __VLS_29({
    prop: "status",
    label: "状态",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
var __VLS_15;
var __VLS_11;
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
    data: (__VLS_ctx.metrics),
}));
const __VLS_38 = __VLS_37({
    data: (__VLS_ctx.metrics),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
const __VLS_40 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    prop: "member",
    label: "会员",
    minWidth: "100",
}));
const __VLS_42 = __VLS_41({
    prop: "member",
    label: "会员",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_44 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    prop: "weight",
    label: "体重/kg",
    minWidth: "100",
}));
const __VLS_46 = __VLS_45({
    prop: "weight",
    label: "体重/kg",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_48 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    prop: "fat",
    label: "体脂率",
    minWidth: "100",
}));
const __VLS_50 = __VLS_49({
    prop: "fat",
    label: "体脂率",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_52 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    prop: "bmi",
    label: "BMI",
    minWidth: "80",
}));
const __VLS_54 = __VLS_53({
    prop: "bmi",
    label: "BMI",
    minWidth: "80",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_56 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    label: "操作",
    width: "120",
}));
const __VLS_58 = __VLS_57({
    label: "操作",
    width: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_59.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_60 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }));
    const __VLS_62 = __VLS_61({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    let __VLS_64;
    let __VLS_65;
    let __VLS_66;
    const __VLS_67 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removeMetric(scope.row);
        }
    };
    __VLS_63.slots.default;
    var __VLS_63;
}
var __VLS_59;
var __VLS_39;
var __VLS_35;
/** @type {__VLS_StyleScopedClasses['page-header']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['feedback-grid']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            reviews: reviews,
            metrics: metrics,
            stats: stats,
            addMetric: addMetric,
            removeMetric: removeMetric,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
