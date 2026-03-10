import { computed, onMounted, reactive, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import MemberFormDialog from '../../components/member/MemberFormDialog.vue';
import { getMemberSummary, getRecentOrders } from '../../api/member-dashboard';
import { createMember, deleteMember, getMemberLevelList, getMemberList, updateMember } from '../../api/member';
const dialogVisible = ref(false);
const editingRow = ref(null);
const formData = ref({});
const query = reactive({ name: '', phone: '' });
const tableData = ref([]);
const levelOptions = ref([]);
const levelNameMap = ref({});
const stats = ref([
    { label: '会员总数', value: 0 },
    { label: '今日新增', value: 0 },
    { label: '有效套餐', value: 0 },
    { label: '待处理订单', value: 0 }
]);
const recentOrders = ref([]);
const memberStructure = ref({ normal: 0, gold: 0, diamond: 0, newThisMonth: 0 });
const filteredMembers = computed(() => tableData.value.filter((item) => {
    const byName = !query.name || item.name?.includes(query.name);
    const byPhone = !query.phone || item.phone?.includes(query.phone);
    return byName && byPhone;
}));
const formatDateTime = (value) => {
    if (!value)
        return '-';
    return value.replace('T', ' ').slice(0, 19);
};
const mapMember = (item) => ({
    ...item,
    levelName: levelNameMap.value[item.levelId] || `等级${item.levelId ?? '-'}`,
    statusText: item.status === 1 ? '正常' : '冻结',
    registerTimeText: formatDateTime(item.registerTime)
});
const reset = async () => {
    query.name = '';
    query.phone = '';
    await loadMembers();
};
const loadLevels = async () => {
    const levelRes = await getMemberLevelList();
    levelOptions.value = levelRes?.data || [];
    levelNameMap.value = Object.fromEntries(levelOptions.value.map((item) => [item.id, item.levelName]));
};
const buildMemberStructure = () => {
    const counts = tableData.value.reduce((acc, item) => {
        if (item.levelName?.includes('普通'))
            acc.normal += 1;
        else if (item.levelName?.includes('黄金'))
            acc.gold += 1;
        else if (item.levelName?.includes('钻石'))
            acc.diamond += 1;
        return acc;
    }, { normal: 0, gold: 0, diamond: 0 });
    memberStructure.value = {
        ...counts,
        newThisMonth: stats.value[1]?.value || 0
    };
};
const loadMembers = async () => {
    if (!levelOptions.value.length) {
        await loadLevels();
    }
    const res = await getMemberList();
    tableData.value = (res?.data || []).map(mapMember);
    buildMemberStructure();
};
const loadDashboard = async () => {
    try {
        const [summaryRes, orderRes] = await Promise.all([getMemberSummary(), getRecentOrders()]);
        if (summaryRes?.data) {
            stats.value = [
                { label: '会员总数', value: summaryRes.data.totalMembers ?? 0 },
                { label: '今日新增', value: summaryRes.data.todayNewMembers ?? 0 },
                { label: '有效套餐', value: summaryRes.data.activePackages ?? 0 },
                { label: '待处理订单', value: summaryRes.data.pendingOrders ?? 0 }
            ];
        }
        if (orderRes?.data) {
            recentOrders.value = orderRes.data;
        }
        buildMemberStructure();
    }
    catch (error) {
        console.warn('member dashboard fallback', error);
    }
};
const openCreate = () => {
    editingRow.value = null;
    formData.value = {
        memberNo: '',
        name: '',
        phone: '',
        levelId: levelOptions.value[0]?.id,
        remark: ''
    };
    dialogVisible.value = true;
};
const openEdit = (row) => {
    editingRow.value = row;
    formData.value = {
        memberNo: row.memberNo,
        name: row.name,
        phone: row.phone,
        levelId: row.levelId,
        remark: row.remark || ''
    };
    dialogVisible.value = true;
};
const handleSubmit = async (payload) => {
    const req = {
        id: editingRow.value?.id,
        memberNo: payload.memberNo,
        name: payload.name,
        phone: payload.phone,
        levelId: Number(payload.levelId) || levelOptions.value[0]?.id,
        status: editingRow.value?.status ?? 1,
        remark: payload.remark
    };
    if (editingRow.value?.id) {
        await updateMember(req);
        ElMessage.success('会员更新成功');
    }
    else {
        await createMember(req);
        ElMessage.success('会员创建成功');
    }
    await loadMembers();
    await loadDashboard();
};
const removeMember = async (row) => {
    await ElMessageBox.confirm(`确认删除会员【${row.name}】吗？`, '提示', { type: 'warning' });
    await deleteMember(row.id);
    ElMessage.success('删除成功');
    await loadMembers();
    await loadDashboard();
};
onMounted(async () => {
    await loadLevels();
    await loadMembers();
    await loadDashboard();
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "actions" },
});
const __VLS_0 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    plain: true,
}));
const __VLS_2 = __VLS_1({
    plain: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
const __VLS_4 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ 'onClick': {} },
    type: "primary",
}));
const __VLS_6 = __VLS_5({
    ...{ 'onClick': {} },
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onClick: (__VLS_ctx.openCreate)
};
__VLS_7.slots.default;
var __VLS_7;
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
    ...{ class: "member-overview-grid" },
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
    data: (__VLS_ctx.recentOrders),
}));
const __VLS_18 = __VLS_17({
    data: (__VLS_ctx.recentOrders),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    prop: "orderNo",
    label: "订单号",
    minWidth: "160",
}));
const __VLS_22 = __VLS_21({
    prop: "orderNo",
    label: "订单号",
    minWidth: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    prop: "memberName",
    label: "会员",
    minWidth: "100",
}));
const __VLS_26 = __VLS_25({
    prop: "memberName",
    label: "会员",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_28 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    prop: "packageName",
    label: "套餐",
    minWidth: "140",
}));
const __VLS_30 = __VLS_29({
    prop: "packageName",
    label: "套餐",
    minWidth: "140",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_32 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    prop: "amount",
    label: "金额",
    minWidth: "100",
}));
const __VLS_34 = __VLS_33({
    prop: "amount",
    label: "金额",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_36 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    prop: "status",
    label: "状态",
    minWidth: "100",
}));
const __VLS_38 = __VLS_37({
    prop: "status",
    label: "状态",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
var __VLS_19;
var __VLS_15;
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
{
    const { header: __VLS_thisSlot } = __VLS_43.slots;
}
const __VLS_44 = {}.ElDescriptions;
/** @type {[typeof __VLS_components.ElDescriptions, typeof __VLS_components.elDescriptions, typeof __VLS_components.ElDescriptions, typeof __VLS_components.elDescriptions, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    column: (1),
    border: true,
}));
const __VLS_46 = __VLS_45({
    column: (1),
    border: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.ElDescriptionsItem;
/** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    label: "普通会员",
}));
const __VLS_50 = __VLS_49({
    label: "普通会员",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
(__VLS_ctx.memberStructure.normal);
var __VLS_51;
const __VLS_52 = {}.ElDescriptionsItem;
/** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    label: "黄金会员",
}));
const __VLS_54 = __VLS_53({
    label: "黄金会员",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
(__VLS_ctx.memberStructure.gold);
var __VLS_55;
const __VLS_56 = {}.ElDescriptionsItem;
/** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    label: "钻石会员",
}));
const __VLS_58 = __VLS_57({
    label: "钻石会员",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
(__VLS_ctx.memberStructure.diamond);
var __VLS_59;
const __VLS_60 = {}.ElDescriptionsItem;
/** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    label: "本月新增",
}));
const __VLS_62 = __VLS_61({
    label: "本月新增",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
(__VLS_ctx.memberStructure.newThisMonth);
var __VLS_63;
var __VLS_47;
var __VLS_43;
const __VLS_64 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    shadow: "never",
    ...{ class: "toolbar-card" },
}));
const __VLS_66 = __VLS_65({
    shadow: "never",
    ...{ class: "toolbar-card" },
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_67.slots.default;
const __VLS_68 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    inline: true,
}));
const __VLS_70 = __VLS_69({
    inline: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_71.slots.default;
const __VLS_72 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    label: "会员姓名",
}));
const __VLS_74 = __VLS_73({
    label: "会员姓名",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_75.slots.default;
const __VLS_76 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    modelValue: (__VLS_ctx.query.name),
    placeholder: "请输入姓名",
}));
const __VLS_78 = __VLS_77({
    modelValue: (__VLS_ctx.query.name),
    placeholder: "请输入姓名",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
var __VLS_75;
const __VLS_80 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    label: "手机号",
}));
const __VLS_82 = __VLS_81({
    label: "手机号",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
__VLS_83.slots.default;
const __VLS_84 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    modelValue: (__VLS_ctx.query.phone),
    placeholder: "请输入手机号",
}));
const __VLS_86 = __VLS_85({
    modelValue: (__VLS_ctx.query.phone),
    placeholder: "请输入手机号",
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
var __VLS_83;
const __VLS_88 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({}));
const __VLS_90 = __VLS_89({}, ...__VLS_functionalComponentArgsRest(__VLS_89));
__VLS_91.slots.default;
const __VLS_92 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
    ...{ 'onClick': {} },
    type: "primary",
}));
const __VLS_94 = __VLS_93({
    ...{ 'onClick': {} },
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_93));
let __VLS_96;
let __VLS_97;
let __VLS_98;
const __VLS_99 = {
    onClick: (__VLS_ctx.loadMembers)
};
__VLS_95.slots.default;
var __VLS_95;
const __VLS_100 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
    ...{ 'onClick': {} },
}));
const __VLS_102 = __VLS_101({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
let __VLS_104;
let __VLS_105;
let __VLS_106;
const __VLS_107 = {
    onClick: (__VLS_ctx.reset)
};
__VLS_103.slots.default;
var __VLS_103;
var __VLS_91;
var __VLS_71;
var __VLS_67;
const __VLS_108 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
    shadow: "never",
}));
const __VLS_110 = __VLS_109({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_109));
__VLS_111.slots.default;
const __VLS_112 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({
    data: (__VLS_ctx.filteredMembers),
}));
const __VLS_114 = __VLS_113({
    data: (__VLS_ctx.filteredMembers),
}, ...__VLS_functionalComponentArgsRest(__VLS_113));
__VLS_115.slots.default;
const __VLS_116 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
    prop: "memberNo",
    label: "会员编号",
    minWidth: "120",
}));
const __VLS_118 = __VLS_117({
    prop: "memberNo",
    label: "会员编号",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_117));
const __VLS_120 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
    prop: "name",
    label: "姓名",
    minWidth: "100",
}));
const __VLS_122 = __VLS_121({
    prop: "name",
    label: "姓名",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_121));
const __VLS_124 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({
    prop: "phone",
    label: "手机号",
    minWidth: "140",
}));
const __VLS_126 = __VLS_125({
    prop: "phone",
    label: "手机号",
    minWidth: "140",
}, ...__VLS_functionalComponentArgsRest(__VLS_125));
const __VLS_128 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({
    prop: "levelName",
    label: "等级",
    minWidth: "120",
}));
const __VLS_130 = __VLS_129({
    prop: "levelName",
    label: "等级",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_129));
const __VLS_132 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({
    prop: "statusText",
    label: "状态",
    minWidth: "100",
}));
const __VLS_134 = __VLS_133({
    prop: "statusText",
    label: "状态",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_133));
__VLS_135.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_135.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_136 = {}.ElTag;
    /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({
        type: (scope.row.status === 1 ? 'success' : 'info'),
    }));
    const __VLS_138 = __VLS_137({
        type: (scope.row.status === 1 ? 'success' : 'info'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    __VLS_139.slots.default;
    (scope.row.statusText);
    var __VLS_139;
}
var __VLS_135;
const __VLS_140 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({
    prop: "registerTimeText",
    label: "注册时间",
    minWidth: "180",
}));
const __VLS_142 = __VLS_141({
    prop: "registerTimeText",
    label: "注册时间",
    minWidth: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_141));
const __VLS_144 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
    label: "操作",
    width: "220",
    fixed: "right",
}));
const __VLS_146 = __VLS_145({
    label: "操作",
    width: "220",
    fixed: "right",
}, ...__VLS_functionalComponentArgsRest(__VLS_145));
__VLS_147.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_147.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_148 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }));
    const __VLS_150 = __VLS_149({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_149));
    let __VLS_152;
    let __VLS_153;
    let __VLS_154;
    const __VLS_155 = {
        onClick: (...[$event]) => {
            __VLS_ctx.openEdit(scope.row);
        }
    };
    __VLS_151.slots.default;
    var __VLS_151;
    const __VLS_156 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }));
    const __VLS_158 = __VLS_157({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    let __VLS_160;
    let __VLS_161;
    let __VLS_162;
    const __VLS_163 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removeMember(scope.row);
        }
    };
    __VLS_159.slots.default;
    var __VLS_159;
}
var __VLS_147;
var __VLS_115;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pagination-wrap" },
});
const __VLS_164 = {}.ElPagination;
/** @type {[typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ]} */ ;
// @ts-ignore
const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({
    layout: "prev, pager, next, total",
    total: (__VLS_ctx.filteredMembers.length),
}));
const __VLS_166 = __VLS_165({
    layout: "prev, pager, next, total",
    total: (__VLS_ctx.filteredMembers.length),
}, ...__VLS_functionalComponentArgsRest(__VLS_165));
var __VLS_111;
/** @type {[typeof MemberFormDialog, ]} */ ;
// @ts-ignore
const __VLS_168 = __VLS_asFunctionalComponent(MemberFormDialog, new MemberFormDialog({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑会员' : '新增会员'),
    formData: (__VLS_ctx.formData),
    levelOptions: (__VLS_ctx.levelOptions),
}));
const __VLS_169 = __VLS_168({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑会员' : '新增会员'),
    formData: (__VLS_ctx.formData),
    levelOptions: (__VLS_ctx.levelOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_168));
let __VLS_171;
let __VLS_172;
let __VLS_173;
const __VLS_174 = {
    onSubmit: (__VLS_ctx.handleSubmit)
};
var __VLS_170;
/** @type {__VLS_StyleScopedClasses['page-header']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['member-overview-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['toolbar-card']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination-wrap']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MemberFormDialog: MemberFormDialog,
            dialogVisible: dialogVisible,
            editingRow: editingRow,
            formData: formData,
            query: query,
            levelOptions: levelOptions,
            stats: stats,
            recentOrders: recentOrders,
            memberStructure: memberStructure,
            filteredMembers: filteredMembers,
            reset: reset,
            loadMembers: loadMembers,
            openCreate: openCreate,
            openEdit: openEdit,
            handleSubmit: handleSubmit,
            removeMember: removeMember,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
