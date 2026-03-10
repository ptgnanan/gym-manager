import { computed, onMounted, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import MemberLevelFormDialog from '../../components/member/MemberLevelFormDialog.vue';
import { createMemberLevel, deleteMemberLevel, getMemberLevelList, updateMemberLevel } from '../../api/member';
const dialogVisible = ref(false);
const editingRow = ref(null);
const formData = ref({});
const keyword = ref('');
const sourceLevels = ref([]);
const levels = computed(() => sourceLevels.value.filter((item) => !keyword.value || item.levelName?.includes(keyword.value)));
const stats = computed(() => [
    { label: '等级总数', value: sourceLevels.value.length || 0 },
    { label: '普通会员', value: sourceLevels.value.filter((i) => i.levelValue === 1).length },
    { label: '高级会员', value: sourceLevels.value.filter((i) => i.levelValue && i.levelValue > 1).length },
    { label: '最高折扣', value: sourceLevels.value[0]?.discountRateText || '-' }
]);
const loadLevels = async () => {
    const res = await getMemberLevelList();
    sourceLevels.value = (res?.data || []).map((item) => ({
        ...item,
        discountRateText: `${item.discountRate}%`
    }));
};
const openCreate = () => {
    editingRow.value = null;
    formData.value = { levelName: '', levelValue: 1, discountRate: 100, description: '' };
    dialogVisible.value = true;
};
const openEdit = (row) => {
    editingRow.value = row;
    formData.value = {
        levelName: row.levelName,
        levelValue: row.levelValue,
        discountRate: Number(row.discountRate),
        description: row.description
    };
    dialogVisible.value = true;
};
const handleSubmit = async (payload) => {
    const req = {
        id: editingRow.value?.id,
        levelName: payload.levelName,
        levelValue: Number(payload.levelValue),
        discountRate: Number(payload.discountRate),
        description: payload.description,
        status: editingRow.value?.status ?? 1
    };
    if (editingRow.value?.id) {
        await updateMemberLevel(req);
        ElMessage.success('等级更新成功');
    }
    else {
        await createMemberLevel(req);
        ElMessage.success('等级创建成功');
    }
    await loadLevels();
};
const removeLevel = async (row) => {
    await ElMessageBox.confirm(`确认删除等级【${row.levelName}】吗？`, '提示', { type: 'warning' });
    await deleteMemberLevel(row.id);
    ElMessage.success('删除成功');
    await loadLevels();
};
onMounted(loadLevels);
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
    onClick: (__VLS_ctx.openCreate)
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
const __VLS_8 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    shadow: "never",
    ...{ class: "toolbar-card" },
}));
const __VLS_10 = __VLS_9({
    shadow: "never",
    ...{ class: "toolbar-card" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    inline: true,
}));
const __VLS_14 = __VLS_13({
    inline: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    label: "等级名称",
}));
const __VLS_18 = __VLS_17({
    label: "等级名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入等级名称",
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入等级名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_19;
const __VLS_24 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    type: "primary",
}));
const __VLS_30 = __VLS_29({
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
var __VLS_31;
const __VLS_32 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ 'onClick': {} },
}));
const __VLS_34 = __VLS_33({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onClick: (...[$event]) => {
        __VLS_ctx.keyword = '';
    }
};
__VLS_35.slots.default;
var __VLS_35;
var __VLS_27;
var __VLS_15;
var __VLS_11;
const __VLS_40 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    shadow: "never",
}));
const __VLS_42 = __VLS_41({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
const __VLS_44 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    data: (__VLS_ctx.levels),
}));
const __VLS_46 = __VLS_45({
    data: (__VLS_ctx.levels),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    prop: "levelName",
    label: "等级名称",
    minWidth: "140",
}));
const __VLS_50 = __VLS_49({
    prop: "levelName",
    label: "等级名称",
    minWidth: "140",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_52 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    prop: "levelValue",
    label: "等级值",
    minWidth: "100",
}));
const __VLS_54 = __VLS_53({
    prop: "levelValue",
    label: "等级值",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_56 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    prop: "discountRateText",
    label: "折扣率",
    minWidth: "120",
}));
const __VLS_58 = __VLS_57({
    prop: "discountRateText",
    label: "折扣率",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
const __VLS_60 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    prop: "description",
    label: "说明",
    minWidth: "180",
}));
const __VLS_62 = __VLS_61({
    prop: "description",
    label: "说明",
    minWidth: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
const __VLS_64 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    label: "操作",
    width: "160",
}));
const __VLS_66 = __VLS_65({
    label: "操作",
    width: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_67.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_67.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_68 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }));
    const __VLS_70 = __VLS_69({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    let __VLS_72;
    let __VLS_73;
    let __VLS_74;
    const __VLS_75 = {
        onClick: (...[$event]) => {
            __VLS_ctx.openEdit(scope.row);
        }
    };
    __VLS_71.slots.default;
    var __VLS_71;
    const __VLS_76 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }));
    const __VLS_78 = __VLS_77({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    let __VLS_80;
    let __VLS_81;
    let __VLS_82;
    const __VLS_83 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removeLevel(scope.row);
        }
    };
    __VLS_79.slots.default;
    var __VLS_79;
}
var __VLS_67;
var __VLS_47;
var __VLS_43;
/** @type {[typeof MemberLevelFormDialog, ]} */ ;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent(MemberLevelFormDialog, new MemberLevelFormDialog({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑等级' : '新增等级'),
    formData: (__VLS_ctx.formData),
}));
const __VLS_85 = __VLS_84({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑等级' : '新增等级'),
    formData: (__VLS_ctx.formData),
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
let __VLS_87;
let __VLS_88;
let __VLS_89;
const __VLS_90 = {
    onSubmit: (__VLS_ctx.handleSubmit)
};
var __VLS_86;
/** @type {__VLS_StyleScopedClasses['page-header']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['toolbar-card']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MemberLevelFormDialog: MemberLevelFormDialog,
            dialogVisible: dialogVisible,
            editingRow: editingRow,
            formData: formData,
            keyword: keyword,
            levels: levels,
            stats: stats,
            openCreate: openCreate,
            openEdit: openEdit,
            handleSubmit: handleSubmit,
            removeLevel: removeLevel,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
