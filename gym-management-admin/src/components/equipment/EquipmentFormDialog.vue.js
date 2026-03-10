import { computed, reactive, watch } from 'vue';
const props = defineProps();
const emit = defineEmits(['update:modelValue', 'submit']);
const visible = computed({ get: () => props.modelValue, set: (v) => emit('update:modelValue', v) });
const defaultForm = { equipmentNo: '', name: '', categoryId: 1, quantity: 1, location: '', status: '正常' };
const form = reactive({ ...defaultForm });
watch(() => props.modelValue, (open) => {
    if (!open)
        return;
    Object.assign(form, defaultForm, props.formData || {});
}, { immediate: true });
const submit = () => { emit('submit', { ...form }); visible.value = false; };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.visible),
    title: (__VLS_ctx.title),
    width: "620px",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.visible),
    title: (__VLS_ctx.title),
    width: "620px",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    model: (__VLS_ctx.form),
    labelWidth: "90px",
}));
const __VLS_7 = __VLS_6({
    model: (__VLS_ctx.form),
    labelWidth: "90px",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    gutter: (16),
}));
const __VLS_11 = __VLS_10({
    gutter: (16),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
const __VLS_13 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    span: (12),
}));
const __VLS_15 = __VLS_14({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
const __VLS_17 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    label: "器材编号",
}));
const __VLS_19 = __VLS_18({
    label: "器材编号",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
const __VLS_21 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    modelValue: (__VLS_ctx.form.equipmentNo),
}));
const __VLS_23 = __VLS_22({
    modelValue: (__VLS_ctx.form.equipmentNo),
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
var __VLS_20;
var __VLS_16;
const __VLS_25 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    span: (12),
}));
const __VLS_27 = __VLS_26({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
const __VLS_29 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    label: "器材名称",
}));
const __VLS_31 = __VLS_30({
    label: "器材名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_32.slots.default;
const __VLS_33 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    modelValue: (__VLS_ctx.form.name),
}));
const __VLS_35 = __VLS_34({
    modelValue: (__VLS_ctx.form.name),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
var __VLS_32;
var __VLS_28;
const __VLS_37 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    span: (12),
}));
const __VLS_39 = __VLS_38({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_40.slots.default;
const __VLS_41 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    label: "分类ID",
}));
const __VLS_43 = __VLS_42({
    label: "分类ID",
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
__VLS_44.slots.default;
const __VLS_45 = {}.ElInputNumber;
/** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    modelValue: (__VLS_ctx.form.categoryId),
    min: (1),
    max: (9999),
}));
const __VLS_47 = __VLS_46({
    modelValue: (__VLS_ctx.form.categoryId),
    min: (1),
    max: (9999),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
var __VLS_44;
var __VLS_40;
const __VLS_49 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    span: (12),
}));
const __VLS_51 = __VLS_50({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_52.slots.default;
const __VLS_53 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    label: "库存",
}));
const __VLS_55 = __VLS_54({
    label: "库存",
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
__VLS_56.slots.default;
const __VLS_57 = {}.ElInputNumber;
/** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    modelValue: (__VLS_ctx.form.quantity),
    min: (0),
    max: (999),
}));
const __VLS_59 = __VLS_58({
    modelValue: (__VLS_ctx.form.quantity),
    min: (0),
    max: (999),
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
var __VLS_56;
var __VLS_52;
const __VLS_61 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    span: (12),
}));
const __VLS_63 = __VLS_62({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
__VLS_64.slots.default;
const __VLS_65 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
    label: "位置",
}));
const __VLS_67 = __VLS_66({
    label: "位置",
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
__VLS_68.slots.default;
const __VLS_69 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    modelValue: (__VLS_ctx.form.location),
}));
const __VLS_71 = __VLS_70({
    modelValue: (__VLS_ctx.form.location),
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
var __VLS_68;
var __VLS_64;
const __VLS_73 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
    span: (12),
}));
const __VLS_75 = __VLS_74({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_74));
__VLS_76.slots.default;
const __VLS_77 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
    label: "状态",
}));
const __VLS_79 = __VLS_78({
    label: "状态",
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
__VLS_80.slots.default;
const __VLS_81 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
    modelValue: (__VLS_ctx.form.status),
}));
const __VLS_83 = __VLS_82({
    modelValue: (__VLS_ctx.form.status),
}, ...__VLS_functionalComponentArgsRest(__VLS_82));
__VLS_84.slots.default;
const __VLS_85 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    label: "正常",
    value: "正常",
}));
const __VLS_87 = __VLS_86({
    label: "正常",
    value: "正常",
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
const __VLS_89 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
    label: "维护中",
    value: "维护中",
}));
const __VLS_91 = __VLS_90({
    label: "维护中",
    value: "维护中",
}, ...__VLS_functionalComponentArgsRest(__VLS_90));
var __VLS_84;
var __VLS_80;
var __VLS_76;
var __VLS_12;
var __VLS_8;
{
    const { footer: __VLS_thisSlot } = __VLS_3.slots;
    const __VLS_93 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({
        ...{ 'onClick': {} },
    }));
    const __VLS_95 = __VLS_94({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_94));
    let __VLS_97;
    let __VLS_98;
    let __VLS_99;
    const __VLS_100 = {
        onClick: (...[$event]) => {
            __VLS_ctx.visible = false;
        }
    };
    __VLS_96.slots.default;
    var __VLS_96;
    const __VLS_101 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
        ...{ 'onClick': {} },
        type: "primary",
    }));
    const __VLS_103 = __VLS_102({
        ...{ 'onClick': {} },
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_102));
    let __VLS_105;
    let __VLS_106;
    let __VLS_107;
    const __VLS_108 = {
        onClick: (__VLS_ctx.submit)
    };
    __VLS_104.slots.default;
    var __VLS_104;
}
var __VLS_3;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            visible: visible,
            form: form,
            submit: submit,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
