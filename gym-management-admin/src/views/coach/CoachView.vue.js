import { computed, onMounted, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import CoachFormDialog from '../../components/coach/CoachFormDialog.vue';
import { createCoach, deleteCoach, getCoachList, updateCoach } from '../../api/coach';
const dialogVisible = ref(false);
const editingRow = ref(null);
const coaches = ref([]);
const formData = ref({});
const stats = computed(() => [
    { label: '教练总数', value: coaches.value.length },
    { label: '在职教练', value: coaches.value.filter(i => i.status === '在职').length },
    { label: '明星私教', value: Math.min(3, coaches.value.length) },
    { label: '今日上课', value: 12 }
]);
const mapCoach = (item) => ({
    id: item.id,
    coachNo: item.coachNo,
    name: item.name,
    phone: item.phone,
    specialty: item.specialty,
    introduction: item.introduction,
    status: item.status === 1 ? '在职' : '离职'
});
const loadCoaches = async () => {
    const res = await getCoachList();
    coaches.value = (res?.data || []).map(mapCoach);
};
const openCreate = () => {
    editingRow.value = null;
    formData.value = { coachNo: '', name: '', phone: '', specialty: '', introduction: '' };
    dialogVisible.value = true;
};
const openEdit = (row) => {
    editingRow.value = row;
    formData.value = { ...row };
    dialogVisible.value = true;
};
const handleSubmit = async (payload) => {
    const req = {
        id: editingRow.value?.id,
        coachNo: payload.coachNo,
        name: payload.name,
        phone: payload.phone,
        specialty: payload.specialty,
        introduction: payload.introduction,
        status: 1
    };
    if (editingRow.value?.id) {
        await updateCoach(req);
        ElMessage.success('教练更新成功');
    }
    else {
        await createCoach(req);
        ElMessage.success('教练创建成功');
    }
    await loadCoaches();
};
const removeCoach = async (row) => {
    await ElMessageBox.confirm(`确认删除教练【${row.name}】吗？`, '提示', { type: 'warning' });
    await deleteCoach(row.id);
    ElMessage.success('删除成功');
    await loadCoaches();
};
onMounted(async () => {
    await loadCoaches();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
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
}));
const __VLS_10 = __VLS_9({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    data: (__VLS_ctx.coaches),
}));
const __VLS_14 = __VLS_13({
    data: (__VLS_ctx.coaches),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    prop: "coachNo",
    label: "教练编号",
    minWidth: "130",
}));
const __VLS_18 = __VLS_17({
    prop: "coachNo",
    label: "教练编号",
    minWidth: "130",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_20 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    prop: "name",
    label: "姓名",
    minWidth: "100",
}));
const __VLS_22 = __VLS_21({
    prop: "name",
    label: "姓名",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    prop: "phone",
    label: "手机号",
    minWidth: "140",
}));
const __VLS_26 = __VLS_25({
    prop: "phone",
    label: "手机号",
    minWidth: "140",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_28 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    prop: "specialty",
    label: "擅长方向",
    minWidth: "180",
}));
const __VLS_30 = __VLS_29({
    prop: "specialty",
    label: "擅长方向",
    minWidth: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_32 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    prop: "status",
    label: "状态",
    minWidth: "100",
}));
const __VLS_34 = __VLS_33({
    prop: "status",
    label: "状态",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_35.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_36 = {}.ElTag;
    /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
        type: (scope.row.status === '在职' ? 'success' : 'info'),
    }));
    const __VLS_38 = __VLS_37({
        type: (scope.row.status === '在职' ? 'success' : 'info'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_39.slots.default;
    (scope.row.status);
    var __VLS_39;
}
var __VLS_35;
const __VLS_40 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    label: "操作",
    width: "160",
}));
const __VLS_42 = __VLS_41({
    label: "操作",
    width: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_43.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_44 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }));
    const __VLS_46 = __VLS_45({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    let __VLS_48;
    let __VLS_49;
    let __VLS_50;
    const __VLS_51 = {
        onClick: (...[$event]) => {
            __VLS_ctx.openEdit(scope.row);
        }
    };
    __VLS_47.slots.default;
    var __VLS_47;
    const __VLS_52 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }));
    const __VLS_54 = __VLS_53({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    let __VLS_56;
    let __VLS_57;
    let __VLS_58;
    const __VLS_59 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removeCoach(scope.row);
        }
    };
    __VLS_55.slots.default;
    var __VLS_55;
}
var __VLS_43;
var __VLS_15;
var __VLS_11;
/** @type {[typeof CoachFormDialog, ]} */ ;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent(CoachFormDialog, new CoachFormDialog({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑教练' : '新增教练'),
    formData: (__VLS_ctx.formData),
}));
const __VLS_61 = __VLS_60({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑教练' : '新增教练'),
    formData: (__VLS_ctx.formData),
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
let __VLS_63;
let __VLS_64;
let __VLS_65;
const __VLS_66 = {
    onSubmit: (__VLS_ctx.handleSubmit)
};
var __VLS_62;
/** @type {__VLS_StyleScopedClasses['page-header']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-card']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CoachFormDialog: CoachFormDialog,
            dialogVisible: dialogVisible,
            editingRow: editingRow,
            coaches: coaches,
            formData: formData,
            stats: stats,
            openCreate: openCreate,
            openEdit: openEdit,
            handleSubmit: handleSubmit,
            removeCoach: removeCoach,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
