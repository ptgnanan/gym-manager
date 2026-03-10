import { computed, onMounted, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import MemberOrderFormDialog from '../../components/member/MemberOrderFormDialog.vue';
import { createMemberOrder, deleteMemberOrder, getMemberList, getMemberOrderList, getMemberPackageList, updateMemberOrder } from '../../api/member';
const dialogVisible = ref(false);
const editingRow = ref(null);
const formData = ref({});
const keyword = ref('');
const paymentStatus = ref('');
const sourceOrders = ref([]);
const memberOptions = ref([]);
const packageOptions = ref([]);
const memberNameMap = ref({});
const packageNameMap = ref({});
const paymentStatusText = (status) => {
    if (status === 'PAID' || status === '已支付')
        return '已支付';
    return '待支付';
};
const paymentStatusCode = (status) => {
    if (status === '已支付' || status === 'PAID')
        return 'PAID';
    return 'UNPAID';
};
const orders = computed(() => sourceOrders.value.filter((item) => {
    const byNo = !keyword.value || item.orderNo?.includes(keyword.value);
    const byStatus = !paymentStatus.value || item.paymentStatusText === paymentStatus.value;
    return byNo && byStatus;
}));
const stats = computed(() => [
    { label: '订单总数', value: sourceOrders.value.length || 0 },
    { label: '已支付', value: sourceOrders.value.filter((i) => i.paymentStatusText === '已支付').length },
    { label: '待支付', value: sourceOrders.value.filter((i) => i.paymentStatusText === '待支付').length },
    {
        label: '订单金额',
        value: `¥${sourceOrders.value.reduce((sum, item) => sum + Number(item.payableAmount || 0), 0).toFixed(2)}`
    }
]);
const reset = () => {
    keyword.value = '';
    paymentStatus.value = '';
};
const mapOrder = (item) => ({
    ...item,
    memberName: memberNameMap.value[item.memberId] || `会员#${item.memberId}`,
    packageName: packageNameMap.value[item.packageId] || `套餐#${item.packageId}`,
    payableAmountText: `¥${Number(item.payableAmount || 0).toFixed(2)}`,
    paymentStatusText: paymentStatusText(item.paymentStatus)
});
const loadOptions = async () => {
    const [memberRes, packageRes] = await Promise.all([getMemberList(), getMemberPackageList()]);
    memberOptions.value = memberRes?.data || [];
    packageOptions.value = packageRes?.data || [];
    memberNameMap.value = Object.fromEntries(memberOptions.value.map((item) => [item.id, item.name]));
    packageNameMap.value = Object.fromEntries(packageOptions.value.map((item) => [item.id, item.packageName]));
};
const loadOrders = async () => {
    if (!memberOptions.value.length || !packageOptions.value.length) {
        await loadOptions();
    }
    const res = await getMemberOrderList();
    sourceOrders.value = (res?.data || []).map(mapOrder);
};
const openCreate = () => {
    editingRow.value = null;
    formData.value = {
        orderNo: '',
        memberId: memberOptions.value[0]?.id,
        packageId: packageOptions.value[0]?.id,
        payableAmount: 0,
        paymentStatus: '待支付'
    };
    dialogVisible.value = true;
};
const openEdit = (row) => {
    editingRow.value = row;
    formData.value = {
        orderNo: row.orderNo,
        memberId: row.memberId,
        packageId: row.packageId,
        payableAmount: Number(row.payableAmount) || 0,
        paymentStatus: row.paymentStatusText
    };
    dialogVisible.value = true;
};
const handleSubmit = async (payload) => {
    const payable = Number(payload.payableAmount) || 0;
    const req = {
        id: editingRow.value?.id,
        orderNo: payload.orderNo,
        memberId: Number(payload.memberId),
        packageId: Number(payload.packageId),
        amount: payable,
        discountAmount: editingRow.value?.discountAmount ?? 0,
        payableAmount: payable,
        paymentStatus: paymentStatusCode(payload.paymentStatus),
        orderStatus: editingRow.value?.orderStatus || 'CREATED',
        auditStatus: editingRow.value?.auditStatus || 'PENDING',
        paymentMethod: editingRow.value?.paymentMethod || 'CASH'
    };
    if (editingRow.value?.id) {
        await updateMemberOrder(req);
        ElMessage.success('订单更新成功');
    }
    else {
        await createMemberOrder(req);
        ElMessage.success('订单创建成功');
    }
    await loadOrders();
};
const removeOrder = async (row) => {
    await ElMessageBox.confirm(`确认删除订单【${row.orderNo}】吗？`, '提示', { type: 'warning' });
    await deleteMemberOrder(row.id);
    ElMessage.success('删除成功');
    await loadOrders();
};
onMounted(async () => {
    await loadOptions();
    await loadOrders();
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
    label: "订单号",
}));
const __VLS_18 = __VLS_17({
    label: "订单号",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入订单号",
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入订单号",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_19;
const __VLS_24 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    label: "支付状态",
}));
const __VLS_26 = __VLS_25({
    label: "支付状态",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    modelValue: (__VLS_ctx.paymentStatus),
    clearable: true,
    placeholder: "请选择",
    ...{ style: {} },
}));
const __VLS_30 = __VLS_29({
    modelValue: (__VLS_ctx.paymentStatus),
    clearable: true,
    placeholder: "请选择",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    label: "已支付",
    value: "已支付",
}));
const __VLS_34 = __VLS_33({
    label: "已支付",
    value: "已支付",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_36 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    label: "待支付",
    value: "待支付",
}));
const __VLS_38 = __VLS_37({
    label: "待支付",
    value: "待支付",
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
    data: (__VLS_ctx.orders),
}));
const __VLS_62 = __VLS_61({
    data: (__VLS_ctx.orders),
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
const __VLS_64 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    prop: "orderNo",
    label: "订单号",
    minWidth: "180",
}));
const __VLS_66 = __VLS_65({
    prop: "orderNo",
    label: "订单号",
    minWidth: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_68 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    prop: "memberName",
    label: "会员",
    minWidth: "120",
}));
const __VLS_70 = __VLS_69({
    prop: "memberName",
    label: "会员",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
const __VLS_72 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    prop: "packageName",
    label: "套餐",
    minWidth: "160",
}));
const __VLS_74 = __VLS_73({
    prop: "packageName",
    label: "套餐",
    minWidth: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
const __VLS_76 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    prop: "payableAmountText",
    label: "应付金额",
    minWidth: "120",
}));
const __VLS_78 = __VLS_77({
    prop: "payableAmountText",
    label: "应付金额",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
const __VLS_80 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    prop: "paymentStatusText",
    label: "支付状态",
    minWidth: "120",
}));
const __VLS_82 = __VLS_81({
    prop: "paymentStatusText",
    label: "支付状态",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
__VLS_83.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_83.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_84 = {}.ElTag;
    /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
        type: (scope.row.paymentStatusText === '已支付' ? 'success' : 'warning'),
    }));
    const __VLS_86 = __VLS_85({
        type: (scope.row.paymentStatusText === '已支付' ? 'success' : 'warning'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_87.slots.default;
    (scope.row.paymentStatusText);
    var __VLS_87;
}
var __VLS_83;
const __VLS_88 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
    label: "操作",
    width: "160",
}));
const __VLS_90 = __VLS_89({
    label: "操作",
    width: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
__VLS_91.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_91.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_92 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }));
    const __VLS_94 = __VLS_93({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    let __VLS_96;
    let __VLS_97;
    let __VLS_98;
    const __VLS_99 = {
        onClick: (...[$event]) => {
            __VLS_ctx.openEdit(scope.row);
        }
    };
    __VLS_95.slots.default;
    var __VLS_95;
    const __VLS_100 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }));
    const __VLS_102 = __VLS_101({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_101));
    let __VLS_104;
    let __VLS_105;
    let __VLS_106;
    const __VLS_107 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removeOrder(scope.row);
        }
    };
    __VLS_103.slots.default;
    var __VLS_103;
}
var __VLS_91;
var __VLS_63;
var __VLS_59;
/** @type {[typeof MemberOrderFormDialog, ]} */ ;
// @ts-ignore
const __VLS_108 = __VLS_asFunctionalComponent(MemberOrderFormDialog, new MemberOrderFormDialog({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑订单' : '创建订单'),
    formData: (__VLS_ctx.formData),
    memberOptions: (__VLS_ctx.memberOptions),
    packageOptions: (__VLS_ctx.packageOptions),
}));
const __VLS_109 = __VLS_108({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑订单' : '创建订单'),
    formData: (__VLS_ctx.formData),
    memberOptions: (__VLS_ctx.memberOptions),
    packageOptions: (__VLS_ctx.packageOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_108));
let __VLS_111;
let __VLS_112;
let __VLS_113;
const __VLS_114 = {
    onSubmit: (__VLS_ctx.handleSubmit)
};
var __VLS_110;
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
            MemberOrderFormDialog: MemberOrderFormDialog,
            dialogVisible: dialogVisible,
            editingRow: editingRow,
            formData: formData,
            keyword: keyword,
            paymentStatus: paymentStatus,
            memberOptions: memberOptions,
            packageOptions: packageOptions,
            orders: orders,
            stats: stats,
            reset: reset,
            openCreate: openCreate,
            openEdit: openEdit,
            handleSubmit: handleSubmit,
            removeOrder: removeOrder,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
