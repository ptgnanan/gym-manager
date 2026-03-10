import { computed, onMounted, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import AnnouncementFormDialog from '../../components/content/AnnouncementFormDialog.vue';
import { getContentSummary } from '../../api/content-dashboard';
import { createAnnouncement, deleteAnnouncement, getAnnouncements, getBanners, updateAnnouncement } from '../../api/content';
const dialogVisible = ref(false);
const editingRow = ref(null);
const formData = ref({});
const keyword = ref('');
const stats = ref([]);
const banners = ref([]);
const sourceAnnouncements = ref([]);
const announcements = computed(() => sourceAnnouncements.value.filter(item => !keyword.value || item.title?.includes(keyword.value)));
const mapStatus = (status) => (status === 'PUBLISHED' ? '已发布' : '草稿');
const loadData = async () => {
    const [summaryRes, announcementRes, bannerRes] = await Promise.all([getContentSummary(), getAnnouncements(), getBanners()]);
    if (summaryRes?.data) {
        stats.value = [
            { label: '轮播图数量', value: summaryRes.data.bannerCount },
            { label: '公告总数', value: summaryRes.data.announcementCount },
            { label: '已发布', value: summaryRes.data.publishedCount },
            { label: '草稿数', value: summaryRes.data.draftCount }
        ];
    }
    banners.value = (bannerRes?.data || []).map((item) => ({
        title: item.title,
        sort: item.sortNo,
        status: item.status === 1 ? '启用' : '停用'
    }));
    sourceAnnouncements.value = (announcementRes?.data || []).map((item) => ({
        id: item.id,
        title: item.title,
        category: item.categoryId ?? '-',
        summary: item.summary,
        content: item.content,
        status: mapStatus(item.publishStatus)
    }));
};
const openCreate = () => {
    editingRow.value = null;
    formData.value = { title: '', categoryId: 1, summary: '', content: '' };
    dialogVisible.value = true;
};
const openEdit = (row) => {
    editingRow.value = row;
    formData.value = { title: row.title, categoryId: row.category || 1, summary: row.summary, content: row.content };
    dialogVisible.value = true;
};
const handleSubmit = async (payload) => {
    const req = {
        id: editingRow.value?.id,
        categoryId: Number(payload.categoryId) || 1,
        title: payload.title,
        summary: payload.summary,
        content: payload.content,
        publishStatus: 'PUBLISHED'
    };
    if (editingRow.value?.id) {
        await updateAnnouncement(req);
        ElMessage.success('公告更新成功');
    }
    else {
        await createAnnouncement(req);
        ElMessage.success('公告发布成功');
    }
    await loadData();
};
const removeAnnouncement = async (row) => {
    await ElMessageBox.confirm(`确认删除公告【${row.title}】吗？`, '提示', { type: 'warning' });
    await deleteAnnouncement(row.id);
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
    label: "公告标题",
}));
const __VLS_18 = __VLS_17({
    label: "公告标题",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入公告标题",
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.keyword),
    placeholder: "请输入公告标题",
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "content-grid" },
});
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
const __VLS_44 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    data: (__VLS_ctx.banners),
}));
const __VLS_46 = __VLS_45({
    data: (__VLS_ctx.banners),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    prop: "title",
    label: "标题",
    minWidth: "120",
}));
const __VLS_50 = __VLS_49({
    prop: "title",
    label: "标题",
    minWidth: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_52 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    prop: "sort",
    label: "排序",
    minWidth: "80",
}));
const __VLS_54 = __VLS_53({
    prop: "sort",
    label: "排序",
    minWidth: "80",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_56 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    prop: "status",
    label: "状态",
    minWidth: "100",
}));
const __VLS_58 = __VLS_57({
    prop: "status",
    label: "状态",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
var __VLS_47;
var __VLS_43;
const __VLS_60 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    shadow: "never",
}));
const __VLS_62 = __VLS_61({
    shadow: "never",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_63.slots;
}
const __VLS_64 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    data: (__VLS_ctx.announcements),
}));
const __VLS_66 = __VLS_65({
    data: (__VLS_ctx.announcements),
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_67.slots.default;
const __VLS_68 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    prop: "title",
    label: "标题",
    minWidth: "180",
}));
const __VLS_70 = __VLS_69({
    prop: "title",
    label: "标题",
    minWidth: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
const __VLS_72 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    prop: "category",
    label: "分类",
    minWidth: "100",
}));
const __VLS_74 = __VLS_73({
    prop: "category",
    label: "分类",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
const __VLS_76 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    prop: "status",
    label: "状态",
    minWidth: "100",
}));
const __VLS_78 = __VLS_77({
    prop: "status",
    label: "状态",
    minWidth: "100",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
const __VLS_80 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    label: "操作",
    width: "160",
}));
const __VLS_82 = __VLS_81({
    label: "操作",
    width: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
__VLS_83.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_83.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_84 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }));
    const __VLS_86 = __VLS_85({
        ...{ 'onClick': {} },
        link: true,
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    let __VLS_88;
    let __VLS_89;
    let __VLS_90;
    const __VLS_91 = {
        onClick: (...[$event]) => {
            __VLS_ctx.openEdit(scope.row);
        }
    };
    __VLS_87.slots.default;
    var __VLS_87;
    const __VLS_92 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }));
    const __VLS_94 = __VLS_93({
        ...{ 'onClick': {} },
        link: true,
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    let __VLS_96;
    let __VLS_97;
    let __VLS_98;
    const __VLS_99 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removeAnnouncement(scope.row);
        }
    };
    __VLS_95.slots.default;
    var __VLS_95;
}
var __VLS_83;
var __VLS_67;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pagination-wrap" },
});
const __VLS_100 = {}.ElPagination;
/** @type {[typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ]} */ ;
// @ts-ignore
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
    layout: "prev, pager, next, total",
    total: (__VLS_ctx.announcements.length),
}));
const __VLS_102 = __VLS_101({
    layout: "prev, pager, next, total",
    total: (__VLS_ctx.announcements.length),
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
var __VLS_63;
/** @type {[typeof AnnouncementFormDialog, ]} */ ;
// @ts-ignore
const __VLS_104 = __VLS_asFunctionalComponent(AnnouncementFormDialog, new AnnouncementFormDialog({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑公告' : '发布公告'),
    formData: (__VLS_ctx.formData),
}));
const __VLS_105 = __VLS_104({
    ...{ 'onSubmit': {} },
    modelValue: (__VLS_ctx.dialogVisible),
    title: (__VLS_ctx.editingRow?.id ? '编辑公告' : '发布公告'),
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
/** @type {__VLS_StyleScopedClasses['content-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination-wrap']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AnnouncementFormDialog: AnnouncementFormDialog,
            dialogVisible: dialogVisible,
            editingRow: editingRow,
            formData: formData,
            keyword: keyword,
            stats: stats,
            banners: banners,
            announcements: announcements,
            openCreate: openCreate,
            openEdit: openEdit,
            handleSubmit: handleSubmit,
            removeAnnouncement: removeAnnouncement,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
