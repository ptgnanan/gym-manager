import { computed, onMounted, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import MemberPackageFormDialog from '../../components/member/MemberPackageFormDialog.vue';
import { createMemberPackage, deleteMemberPackage, getMemberPackageList, updateMemberPackage } from '../../api/member';
const dialogVisible = ref(false);
const editingRow = ref(null);
const formData = ref({});
const keyword = ref('');
const packageType = ref('');
const sourcePackages = ref([]);
const normalizePackageType = (value) => {
    if (value === 'TIME' || value === 'TIME_BASED')
        return 'TIME_BASED';
    if (value === 'COUNT' || value === 'SESSION_BASED')
        return 'SESSION_BASED';
    return value || '';
};
const packageTypeText = (value) => {
    const normalized = normalizePackageType(value);
    if (normalized === 'TIME_BASED')
        return '时长卡';
    if (normalized === 'SESSION_BASED')
        return '次卡/私教';
    return normalized || '-';
};
const packages = computed(() => sourcePackages.value.filter((item) => {
    const byName = !keyword.value || item.packageName?.includes(keyword.value);
    const byType = !packageType.value || item.packageType === packageType.value;
    return byName && byType;
}));
const stats = computed(() => [
    { label: '套餐总数', value: sourcePackages.value.length || 0 },
    { label: '时长卡', value: sourcePackages.value.filter((i) => i.packageType === 'TIME_BASED').length },
    { label: '次卡/私教', value: sourcePackages.value.filter((i) => i.packageType === 'SESSION_BASED').length },
    { label: '热门套餐', value: sourcePackages.value[0]?.packageName || '-' }
]);
const reset = () => {
    keyword.value = '';
    packageType.value = '';
};
const loadPackages = async () => {
    const res = await getMemberPackageList();
    sourcePackages.value = (res?.data || []).map((item) => {
        const normalizedType = normalizePackageType(item.packageType);
        return {
            ...item,
            packageType: normalizedType,
            packageTypeText: packageTypeText(normalizedType),
            priceText: `¥${Number(item.price || 0).toFixed(2)}`,
            durationDays: item.durationDays ?? '-',
            sessionCount: item.sessionCount ?? '-'
        };
    });
};
const openCreate = () => {
    editingRow.value = null;
    formData.value = { packageName: '', packageType: 'TIME_BASED', price: 0, durationOrCount: 30, description: '' };
    dialogVisible.value = true;
};
const openEdit = (row) => {
    editingRow.value = row;
    formData.value = {
        packageName: row.packageName,
        packageType: row.packageType,
        price: Number(row.price) || 0,
        durationOrCount: Number(row.packageType === 'TIME_BASED' ? row.durationDays : row.sessionCount) || 0,
        description: row.description
    };
    dialogVisible.value = true;
};
const handleSubmit = async (payload) => {
    const normalizedType = normalizePackageType(payload.packageType);
    const req = {
        id: editingRow.value?.id,
        packageName: payload.packageName,
        packageType: normalizedType,
        price: Number(payload.price) || 0,
        durationDays: normalizedType === 'TIME_BASED' ? Number(payload.durationOrCount) || null : null,
        sessionCount: normalizedType === 'SESSION_BASED' ? Number(payload.durationOrCount) || null : null,
        description: payload.description,
        status: editingRow.value?.status ?? 1
    };
    if (editingRow.value?.id) {
        await updateMemberPackage(req);
        ElMessage.success('套餐更新成功');
    }
    else {
        await createMemberPackage(req);
        ElMessage.success('套餐创建成功');
    }
    await loadPackages();
};
const removePackage = async (row) => {
    await ElMessageBox.confirm(`确认删除套餐【${row.packageName}】吗？`, '提示', { type: 'warning' });
    await deleteMemberPackage(row.id);
    ElMessage.success('删除成功');
    await loadPackages();
};
onMounted(loadPackages);
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
    label: "套餐名称",
}));
const __VLS_18 = __VLS_17({
    label: "套餐名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入套餐名称",
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入套餐名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_19;
const __VLS_24 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    label: "套餐类型",
}));
const __VLS_26 = __VLS_25({
    label: "套餐类型",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    modelValue: (__VLS_ctx.packageType),
    clearable: true,
    placeholder: "请选择",
    ...{ style: {} },
}));
const __VLS_30 = __VLS_29({
    modelValue: (__VLS_ctx.packageType),
    clearable: true,
    placeholder: "请选择",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    label: "时长卡",
    value: "TIME_BASED",
}));
const __VLS_34 = __VLS_33({
    label: "时长卡",
    value: "TIME_BASED",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_36 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    label: "次卡/私教",
    value: "SESSION_BASED",
}));
const __VLS_38 = __VLS_37({
    label: "次卡/私教",
    value: "SESSION_BASED",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
var __VLS_31;
var __VLS_27;
const __VLS_40 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({}));
const __VLS_42 = __VLS_41({}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
const __VLS_44 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    type: "primary",
}));
const __VLS_46 = __VLS_45({
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
var __VLS_47;
const __VLS_48 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    ...{ 'onClick': {} },
}));
const __VLS_50 = __VLS_49({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
let __VLS_52;
let __VLS_53;
let __VLS_54;
const __VLS_55 = {
    onClick: (__VLS_ctx.reset)
};
__VLS_51.slots.default;
var __VLS_51;
var __VLS_43;
var __VLS_15;
var __VLS_11;
const __VLS_56 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    shadow: "never",
}));
const __VLS_58 = __VLS_57({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
const __VLS_60 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    data: (__VLS_ctx.packages),
}));
const __VLS_62 = __VLS_61({
    data: (__VLS_ctx.packages),
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
const __VLS_64 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    prop: "packageName",
    label: "套餐名称",
    minWidth: "160",
}));
const __VLS_66 = __VLS_65({
    prop: "packageName",
    label: "套餐名称",
    minWidth: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_68 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    prop: "packageTypeText",
    label: "类型",
    minWidth: "120",
}));
const __VLS_70 = __VLS_69({
    prop: "packageTypeText",
    label: "类型",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
const __VLS_72 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    prop: "priceText",
    label: "价格",
    minWidth: "120",
}));
const __VLS_74 = __VLS_73({
    prop: "priceText",
    label: "价格",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
const __VLS_76 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    prop: "durationDays",
    label: "时长(天)",
    minWidth: "120",
}));
const __VLS_78 = __VLS_77({
    prop: "durationDays",
    label: "时长(天)",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
const __VLS_80 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    prop: "sessionCount",
    label: "次数",
    minWidth: "100",
}));
const __VLS_82 = __VLS_81({
    prop: "sessionCount",
    label: "次数",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
const __VLS_84 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    label: "操作",
    width: "160",
}));
const __VLS_86 = __VLS_85({
    label: "操作",
    width: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
__VLS_87.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_87.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_88 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }));
    const __VLS_90 = __VLS_89({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    let __VLS_92;
    let __VLS_93;
    let __VLS_94;
    const __VLS_95 = {
        onClick: (...[$event]) => {
            __VLS_ctx.openEdit(scope.row);
        }
    };
    __VLS_91.slots.default;
    var __VLS_91;
    const __VLS_96 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }));
    const __VLS_98 = __VLS_97({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    let __VLS_100;
    let __VLS_101;
    let __VLS_102;
    const __VLS_103 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removePackage(scope.row);
        }
    };
    __VLS_99.slots.default;
    var __VLS_99;
}
var __VLS_87;
var __VLS_63;
var __VLS_59;
/** @type {[typeof MemberPackageFormDialog, ]} */ ;
// @ts-ignore
const __VLS_104 = __VLS_asFunctionalComponent(MemberPackageFormDialog, new MemberPackageFormDialog({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑套餐' : '新增套餐'),
    formData: (__VLS_ctx.formData),
}));
const __VLS_105 = __VLS_104({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑套餐' : '新增套餐'),
    formData: (__VLS_ctx.formData),
}, ...__VLS_functionalComponentArgsRest(__VLS_104));
let __VLS_107;
let __VLS_108;
let __VLS_109;
const __VLS_110 = {
    onSubmit: (__VLS_ctx.handleSubmit)
};
var __VLS_106;
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
            MemberPackageFormDialog: MemberPackageFormDialog,
            dialogVisible: dialogVisible,
            editingRow: editingRow,
            formData: formData,
            keyword: keyword,
            packageType: packageType,
            packages: packages,
            stats: stats,
            reset: reset,
            openCreate: openCreate,
            openEdit: openEdit,
            handleSubmit: handleSubmit,
            removePackage: removePackage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
