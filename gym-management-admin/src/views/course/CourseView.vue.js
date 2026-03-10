import { computed, onMounted, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import CourseFormDialog from '../../components/course/CourseFormDialog.vue';
import { getCourseSummary, getTodaySchedules } from '../../api/course-dashboard';
import { createCourse, deleteCourse, getCourseList, updateCourse } from '../../api/course';
const dialogVisible = ref(false);
const editingRow = ref(null);
const formData = ref({});
const keyword = ref('');
const courseType = ref('');
const stats = ref([]);
const schedules = ref([]);
const sourceCourses = ref([]);
const courses = computed(() => sourceCourses.value.filter(item => {
    const byName = !keyword.value || item.name?.includes(keyword.value);
    const byType = !courseType.value || item.category === courseType.value;
    return byName && byType;
}));
const mapCourse = (item) => ({
    id: item.id,
    name: item.courseName,
    category: item.courseType === 'GROUP' ? '团课' : '私教',
    coach: item.coachId ?? '待分配',
    duration: item.durationMinutes,
    capacity: item.capacity,
    status: item.status === 1 ? '上架' : '下架',
    courseType: item.courseType,
    categoryId: item.categoryId,
    coachId: item.coachId,
    durationMinutes: item.durationMinutes,
    description: item.description
});
const loadData = async () => {
    const [summaryRes, scheduleRes, listRes] = await Promise.all([
        getCourseSummary(),
        getTodaySchedules(),
        getCourseList()
    ]);
    if (summaryRes?.data) {
        stats.value = [
            { label: '课程总数', value: summaryRes.data.totalCourses },
            { label: '本周排期', value: summaryRes.data.weeklySchedules },
            { label: '今日预约', value: summaryRes.data.todayReservations },
            { label: '私教记录', value: summaryRes.data.privateTrainingRecords }
        ];
    }
    schedules.value = scheduleRes?.data || [];
    sourceCourses.value = (listRes?.data || []).map(mapCourse);
};
const openCreate = () => {
    editingRow.value = null;
    formData.value = { courseName: '', courseType: 'GROUP', categoryId: 1, coachId: 1, durationMinutes: 60, capacity: 20, description: '' };
    dialogVisible.value = true;
};
const openEdit = (row) => {
    editingRow.value = row;
    formData.value = {
        courseName: row.name,
        courseType: row.courseType,
        categoryId: row.categoryId || 1,
        coachId: row.coachId || 1,
        durationMinutes: row.durationMinutes || row.duration,
        capacity: row.capacity || 20,
        description: row.description || ''
    };
    dialogVisible.value = true;
};
const handleSubmit = async (payload) => {
    const req = {
        id: editingRow.value?.id,
        courseName: payload.courseName,
        courseType: payload.courseType,
        categoryId: Number(payload.categoryId) || 1,
        coachId: Number(payload.coachId) || 1,
        durationMinutes: Number(payload.durationMinutes) || 60,
        capacity: Number(payload.capacity) || 20,
        description: payload.description,
        status: editingRow.value?.status === '下架' ? 0 : 1
    };
    if (editingRow.value?.id) {
        await updateCourse(req);
        ElMessage.success('课程更新成功');
    }
    else {
        await createCourse(req);
        ElMessage.success('课程创建成功');
    }
    await loadData();
};
const removeCourse = async (row) => {
    await ElMessageBox.confirm(`确认删除课程【${row.name}】吗？`, '提示', { type: 'warning' });
    await deleteCourse(row.id);
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "schedule-panel" },
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
const __VLS_12 = {}.ElTimeline;
/** @type {[typeof __VLS_components.ElTimeline, typeof __VLS_components.elTimeline, typeof __VLS_components.ElTimeline, typeof __VLS_components.elTimeline, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.schedules))) {
    const __VLS_16 = {}.ElTimelineItem;
    /** @type {[typeof __VLS_components.ElTimelineItem, typeof __VLS_components.elTimelineItem, typeof __VLS_components.ElTimelineItem, typeof __VLS_components.elTimelineItem, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        key: (item.time + item.name),
        timestamp: (item.time),
    }));
    const __VLS_18 = __VLS_17({
        key: (item.time + item.name),
        timestamp: (item.time),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_19.slots.default;
    (item.name);
    (item.coach);
    (item.location);
    var __VLS_19;
}
var __VLS_15;
var __VLS_11;
const __VLS_20 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    shadow: "never",
    ...{ class: "toolbar-card" },
}));
const __VLS_22 = __VLS_21({
    shadow: "never",
    ...{ class: "toolbar-card" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
const __VLS_24 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    inline: true,
}));
const __VLS_26 = __VLS_25({
    inline: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    label: "课程名称",
}));
const __VLS_30 = __VLS_29({
    label: "课程名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入课程名称",
}));
const __VLS_34 = __VLS_33({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入课程名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
var __VLS_31;
const __VLS_36 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    label: "课程分类",
}));
const __VLS_38 = __VLS_37({
    label: "课程分类",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
const __VLS_40 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    modelValue: (__VLS_ctx.courseType),
    clearable: true,
    placeholder: "请选择",
    ...{ style: {} },
}));
const __VLS_42 = __VLS_41({
    modelValue: (__VLS_ctx.courseType),
    clearable: true,
    placeholder: "请选择",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
const __VLS_44 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    label: "团课",
    value: "团课",
}));
const __VLS_46 = __VLS_45({
    label: "团课",
    value: "团课",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_48 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    label: "私教",
    value: "私教",
}));
const __VLS_50 = __VLS_49({
    label: "私教",
    value: "私教",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
var __VLS_43;
var __VLS_39;
var __VLS_27;
var __VLS_23;
const __VLS_52 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    shadow: "never",
}));
const __VLS_54 = __VLS_53({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
const __VLS_56 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    data: (__VLS_ctx.courses),
}));
const __VLS_58 = __VLS_57({
    data: (__VLS_ctx.courses),
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
const __VLS_60 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    prop: "name",
    label: "课程名称",
    minWidth: "160",
}));
const __VLS_62 = __VLS_61({
    prop: "name",
    label: "课程名称",
    minWidth: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
const __VLS_64 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    prop: "category",
    label: "课程分类",
    minWidth: "120",
}));
const __VLS_66 = __VLS_65({
    prop: "category",
    label: "课程分类",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_68 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    prop: "coach",
    label: "教练",
    minWidth: "100",
}));
const __VLS_70 = __VLS_69({
    prop: "coach",
    label: "教练",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
const __VLS_72 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    prop: "duration",
    label: "时长(分钟)",
    minWidth: "120",
}));
const __VLS_74 = __VLS_73({
    prop: "duration",
    label: "时长(分钟)",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
const __VLS_76 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    prop: "capacity",
    label: "容量",
    minWidth: "100",
}));
const __VLS_78 = __VLS_77({
    prop: "capacity",
    label: "容量",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
const __VLS_80 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    prop: "status",
    label: "状态",
    minWidth: "100",
}));
const __VLS_82 = __VLS_81({
    prop: "status",
    label: "状态",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
__VLS_83.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_83.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_84 = {}.ElTag;
    /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
        type: (scope.row.status === '上架' ? 'success' : 'warning'),
    }));
    const __VLS_86 = __VLS_85({
        type: (scope.row.status === '上架' ? 'success' : 'warning'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_87.slots.default;
    (scope.row.status);
    var __VLS_87;
}
var __VLS_83;
const __VLS_88 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
    label: "操作",
    width: "180",
}));
const __VLS_90 = __VLS_89({
    label: "操作",
    width: "180",
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
            __VLS_ctx.removeCourse(scope.row);
        }
    };
    __VLS_103.slots.default;
    var __VLS_103;
}
var __VLS_91;
var __VLS_59;
var __VLS_55;
/** @type {[typeof CourseFormDialog, ]} */ ;
// @ts-ignore
const __VLS_108 = __VLS_asFunctionalComponent(CourseFormDialog, new CourseFormDialog({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑课程' : '新增课程'),
    formData: (__VLS_ctx.formData),
}));
const __VLS_109 = __VLS_108({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑课程' : '新增课程'),
    formData: (__VLS_ctx.formData),
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
/** @type {__VLS_StyleScopedClasses['schedule-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['toolbar-card']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CourseFormDialog: CourseFormDialog,
            dialogVisible: dialogVisible,
            editingRow: editingRow,
            formData: formData,
            keyword: keyword,
            courseType: courseType,
            stats: stats,
            schedules: schedules,
            courses: courses,
            openCreate: openCreate,
            openEdit: openEdit,
            handleSubmit: handleSubmit,
            removeCourse: removeCourse,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
