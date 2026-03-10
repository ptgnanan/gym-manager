import { computed, reactive, watch } from 'vue';
const props = defineProps();
const emit = defineEmits(['update:modelValue', 'submit']);
const visible = computed({ get: () => props.modelValue, set: (v) => emit('update:modelValue', v) });
const defaultForm = { title: '', categoryId: 1, summary: '', content: '' };
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
    width: "680px",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.visible),
    title: (__VLS_ctx.title),
    width: "680px",
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
const __VLS_9 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    label: "公告标题",
}));
const __VLS_11 = __VLS_10({
    label: "公告标题",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
const __VLS_13 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    modelValue: (__VLS_ctx.form.title),
}));
const __VLS_15 = __VLS_14({
    modelValue: (__VLS_ctx.form.title),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
var __VLS_12;
const __VLS_17 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    label: "分类ID",
}));
const __VLS_19 = __VLS_18({
    label: "分类ID",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
const __VLS_21 = {}.ElInputNumber;
/** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    modelValue: (__VLS_ctx.form.categoryId),
    min: (1),
    max: (9999),
}));
const __VLS_23 = __VLS_22({
    modelValue: (__VLS_ctx.form.categoryId),
    min: (1),
    max: (9999),
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
var __VLS_20;
const __VLS_25 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    label: "公告摘要",
}));
const __VLS_27 = __VLS_26({
    label: "公告摘要",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
const __VLS_29 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    modelValue: (__VLS_ctx.form.summary),
}));
const __VLS_31 = __VLS_30({
    modelValue: (__VLS_ctx.form.summary),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
var __VLS_28;
const __VLS_33 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    label: "公告内容",
}));
const __VLS_35 = __VLS_34({
    label: "公告内容",
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_36.slots.default;
const __VLS_37 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    modelValue: (__VLS_ctx.form.content),
    type: "textarea",
    rows: (6),
}));
const __VLS_39 = __VLS_38({
    modelValue: (__VLS_ctx.form.content),
    type: "textarea",
    rows: (6),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
var __VLS_36;
var __VLS_8;
{
    const { footer: __VLS_thisSlot } = __VLS_3.slots;
    const __VLS_41 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
        ...{ 'onClick': {} },
    }));
    const __VLS_43 = __VLS_42({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    let __VLS_45;
    let __VLS_46;
    let __VLS_47;
    const __VLS_48 = {
        onClick: (...[$event]) => {
            __VLS_ctx.visible = false;
        }
    };
    __VLS_44.slots.default;
    var __VLS_44;
    const __VLS_49 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
        ...{ 'onClick': {} },
        type: "primary",
    }));
    const __VLS_51 = __VLS_50({
        ...{ 'onClick': {} },
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    let __VLS_53;
    let __VLS_54;
    let __VLS_55;
    const __VLS_56 = {
        onClick: (__VLS_ctx.submit)
    };
    __VLS_52.slots.default;
    var __VLS_52;
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
