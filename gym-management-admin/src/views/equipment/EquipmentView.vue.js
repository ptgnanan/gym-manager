import { computed, onMounted, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import EquipmentFormDialog from '../../components/equipment/EquipmentFormDialog.vue';
import { getEquipmentSummary } from '../../api/equipment-dashboard';
import { createEquipment, deleteEquipment, getEquipmentList, updateEquipment } from '../../api/equipment';
const dialogVisible = ref(false);
const editingRow = ref(null);
const formData = ref({});
const keyword = ref('');
const status = ref('');
const stats = ref([]);
const sourceItems = ref([]);
const items = computed(() => sourceItems.value.filter(item => {
    const byName = !keyword.value || item.name?.includes(keyword.value);
    const byStatus = !status.value || item.status === status.value;
    return byName && byStatus;
}));
const mapStatusText = (statusValue) => (statusValue === 'NORMAL' ? '正常' : '维护中');
const mapStatusCode = (statusText) => (statusText === '正常' ? 'NORMAL' : 'MAINTAINING');
const mapItem = (item) => ({
    id: item.id,
    equipmentNo: item.equipmentNo,
    name: item.equipmentName,
    category: item.categoryId ?? '-',
    categoryId: item.categoryId,
    quantity: item.quantity,
    location: item.location,
    status: mapStatusText(item.status)
});
const loadData = async () => {
    const [summaryRes, listRes] = await Promise.all([getEquipmentSummary(), getEquipmentList()]);
    if (summaryRes?.data) {
        stats.value = [
            { label: '器材总数', value: summaryRes.data.totalEquipment },
            { label: '正常使用', value: summaryRes.data.normalEquipment },
            { label: '维护中', value: summaryRes.data.maintainingEquipment },
            { label: '库存预警', value: summaryRes.data.warningEquipment }
        ];
    }
    sourceItems.value = (listRes?.data || []).map(mapItem);
};
const openCreate = () => {
    editingRow.value = null;
    formData.value = { equipmentNo: '', name: '', categoryId: 1, quantity: 1, location: '', status: '正常' };
    dialogVisible.value = true;
};
const openEdit = (row) => {
    editingRow.value = row;
    formData.value = { equipmentNo: row.equipmentNo, name: row.name, categoryId: row.categoryId || 1, quantity: row.quantity, location: row.location, status: row.status };
    dialogVisible.value = true;
};
const handleSubmit = async (payload) => {
    const req = {
        id: editingRow.value?.id,
        equipmentNo: payload.equipmentNo,
        equipmentName: payload.name,
        categoryId: Number(payload.categoryId) || 1,
        quantity: Number(payload.quantity) || 0,
        availableQuantity: Number(payload.quantity) || 0,
        location: payload.location,
        status: mapStatusCode(payload.status)
    };
    if (editingRow.value?.id) {
        await updateEquipment(req);
        ElMessage.success('器材更新成功');
    }
    else {
        await createEquipment(req);
        ElMessage.success('器材创建成功');
    }
    await loadData();
};
const removeEquipment = async (row) => {
    await ElMessageBox.confirm(`确认删除器材【${row.name}】吗？`, '提示', { type: 'warning' });
    await deleteEquipment(row.id);
    ElMessage.success('删除成功');
    await loadData();
};
onMounted(loadData);
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
    label: "器材名称",
}));
const __VLS_18 = __VLS_17({
    label: "器材名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入器材名称",
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入器材名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_19;
const __VLS_24 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    label: "状态",
}));
const __VLS_26 = __VLS_25({
    label: "状态",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    modelValue: (__VLS_ctx.status),
    clearable: true,
    placeholder: "请选择状态",
    ...{ style: {} },
}));
const __VLS_30 = __VLS_29({
    modelValue: (__VLS_ctx.status),
    clearable: true,
    placeholder: "请选择状态",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    label: "正常",
    value: "正常",
}));
const __VLS_34 = __VLS_33({
    label: "正常",
    value: "正常",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_36 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    label: "维护中",
    value: "维护中",
}));
const __VLS_38 = __VLS_37({
    label: "维护中",
    value: "维护中",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
var __VLS_31;
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
    data: (__VLS_ctx.items),
}));
const __VLS_46 = __VLS_45({
    data: (__VLS_ctx.items),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    prop: "equipmentNo",
    label: "器材编号",
    minWidth: "140",
}));
const __VLS_50 = __VLS_49({
    prop: "equipmentNo",
    label: "器材编号",
    minWidth: "140",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_52 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    prop: "name",
    label: "器材名称",
    minWidth: "140",
}));
const __VLS_54 = __VLS_53({
    prop: "name",
    label: "器材名称",
    minWidth: "140",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_56 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    prop: "category",
    label: "分类",
    minWidth: "120",
}));
const __VLS_58 = __VLS_57({
    prop: "category",
    label: "分类",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
const __VLS_60 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    prop: "quantity",
    label: "库存",
    minWidth: "100",
}));
const __VLS_62 = __VLS_61({
    prop: "quantity",
    label: "库存",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
const __VLS_64 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    prop: "location",
    label: "位置",
    minWidth: "120",
}));
const __VLS_66 = __VLS_65({
    prop: "location",
    label: "位置",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_68 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    prop: "status",
    label: "状态",
    minWidth: "120",
}));
const __VLS_70 = __VLS_69({
    prop: "status",
    label: "状态",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_71.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_71.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_72 = {}.ElTag;
    /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
        type: (scope.row.status === '正常' ? 'success' : 'danger'),
    }));
    const __VLS_74 = __VLS_73({
        type: (scope.row.status === '正常' ? 'success' : 'danger'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    __VLS_75.slots.default;
    (scope.row.status);
    var __VLS_75;
}
var __VLS_71;
const __VLS_76 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    label: "操作",
    width: "180",
}));
const __VLS_78 = __VLS_77({
    label: "操作",
    width: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
__VLS_79.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_79.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_80 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }));
    const __VLS_82 = __VLS_81({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    let __VLS_84;
    let __VLS_85;
    let __VLS_86;
    const __VLS_87 = {
        onClick: (...[$event]) => {
            __VLS_ctx.openEdit(scope.row);
        }
    };
    __VLS_83.slots.default;
    var __VLS_83;
    const __VLS_88 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }));
    const __VLS_90 = __VLS_89({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_89));
    let __VLS_92;
    let __VLS_93;
    let __VLS_94;
    const __VLS_95 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removeEquipment(scope.row);
        }
    };
    __VLS_91.slots.default;
    var __VLS_91;
}
var __VLS_79;
var __VLS_47;
var __VLS_43;
/** @type {[typeof EquipmentFormDialog, ]} */ ;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent(EquipmentFormDialog, new EquipmentFormDialog({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑器材' : '新增器材'),
    formData: (__VLS_ctx.formData),
}));
const __VLS_97 = __VLS_96({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑器材' : '新增器材'),
    formData: (__VLS_ctx.formData),
}, ...__VLS_functionalComponentArgsRest(__VLS_96));
let __VLS_99;
let __VLS_100;
let __VLS_101;
const __VLS_102 = {
    onSubmit: (__VLS_ctx.handleSubmit)
};
var __VLS_98;
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
            EquipmentFormDialog: EquipmentFormDialog,
            dialogVisible: dialogVisible,
            editingRow: editingRow,
            formData: formData,
            keyword: keyword,
            status: status,
            stats: stats,
            items: items,
            openCreate: openCreate,
            openEdit: openEdit,
            handleSubmit: handleSubmit,
            removeEquipment: removeEquipment,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
