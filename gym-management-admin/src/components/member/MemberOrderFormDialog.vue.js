import { computed, reactive, watch } from 'vue';
const props = defineProps();
const emit = defineEmits(['update:modelValue', 'submit']);
const visible = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});
const defaultForm = {
    orderNo: '',
    memberId: undefined,
    packageId: undefined,
    payableAmount: 0,
    paymentStatus: '待支付'
};
const form = reactive({ ...defaultForm });
watch(() => props.modelValue, (open) => {
    if (!open)
        return;
    Object.assign(form, defaultForm, props.formData || {});
    if (!form.memberId && props.memberOptions?.length) {
        form.memberId = props.memberOptions[0].id;
    }
    if (!form.packageId && props.packageOptions?.length) {
        form.packageId = props.packageOptions[0].id;
    }
}, { immediate: true });
const submit = () => {
    emit('submit', { ...form });
    visible.value = false;
};
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
    label: "订单号",
}));
const __VLS_19 = __VLS_18({
    label: "订单号",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
const __VLS_21 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    modelValue: (__VLS_ctx.form.orderNo),
}));
const __VLS_23 = __VLS_22({
    modelValue: (__VLS_ctx.form.orderNo),
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
    label: "会员",
}));
const __VLS_31 = __VLS_30({
    label: "会员",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_32.slots.default;
const __VLS_33 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    modelValue: (__VLS_ctx.form.memberId),
    placeholder: "请选择会员",
    ...{ style: {} },
    filterable: true,
}));
const __VLS_35 = __VLS_34({
    modelValue: (__VLS_ctx.form.memberId),
    placeholder: "请选择会员",
    ...{ style: {} },
    filterable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_36.slots.default;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.memberOptions))) {
    const __VLS_37 = {}.ElOption;
    /** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        key: (item.id),
        label: (item.name),
        value: (item.id),
    }));
    const __VLS_39 = __VLS_38({
        key: (item.id),
        label: (item.name),
        value: (item.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_38));
}
var __VLS_36;
var __VLS_32;
var __VLS_28;
const __VLS_41 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    span: (12),
}));
const __VLS_43 = __VLS_42({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
__VLS_44.slots.default;
const __VLS_45 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    label: "套餐",
}));
const __VLS_47 = __VLS_46({
    label: "套餐",
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
__VLS_48.slots.default;
const __VLS_49 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    modelValue: (__VLS_ctx.form.packageId),
    placeholder: "请选择套餐",
    ...{ style: {} },
    filterable: true,
}));
const __VLS_51 = __VLS_50({
    modelValue: (__VLS_ctx.form.packageId),
    placeholder: "请选择套餐",
    ...{ style: {} },
    filterable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_52.slots.default;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.packageOptions))) {
    const __VLS_53 = {}.ElOption;
    /** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        key: (item.id),
        label: (item.packageName),
        value: (item.id),
    }));
    const __VLS_55 = __VLS_54({
        key: (item.id),
        label: (item.packageName),
        value: (item.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
}
var __VLS_52;
var __VLS_48;
var __VLS_44;
const __VLS_57 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    span: (12),
}));
const __VLS_59 = __VLS_58({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
__VLS_60.slots.default;
const __VLS_61 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    label: "应付金额",
}));
const __VLS_63 = __VLS_62({
    label: "应付金额",
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
__VLS_64.slots.default;
const __VLS_65 = {}.ElInputNumber;
/** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
    modelValue: (__VLS_ctx.form.payableAmount),
    min: (0),
    max: (999999),
    ...{ style: {} },
}));
const __VLS_67 = __VLS_66({
    modelValue: (__VLS_ctx.form.payableAmount),
    min: (0),
    max: (999999),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
var __VLS_64;
var __VLS_60;
const __VLS_69 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    span: (12),
}));
const __VLS_71 = __VLS_70({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
__VLS_72.slots.default;
const __VLS_73 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
    label: "支付状态",
}));
const __VLS_75 = __VLS_74({
    label: "支付状态",
}, ...__VLS_functionalComponentArgsRest(__VLS_74));
__VLS_76.slots.default;
const __VLS_77 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
    modelValue: (__VLS_ctx.form.paymentStatus),
    ...{ style: {} },
}));
const __VLS_79 = __VLS_78({
    modelValue: (__VLS_ctx.form.paymentStatus),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
__VLS_80.slots.default;
const __VLS_81 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
    label: "待支付",
    value: "待支付",
}));
const __VLS_83 = __VLS_82({
    label: "待支付",
    value: "待支付",
}, ...__VLS_functionalComponentArgsRest(__VLS_82));
const __VLS_85 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    label: "已支付",
    value: "已支付",
}));
const __VLS_87 = __VLS_86({
    label: "已支付",
    value: "已支付",
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
var __VLS_80;
var __VLS_76;
var __VLS_72;
var __VLS_12;
var __VLS_8;
{
    const { footer: __VLS_thisSlot } = __VLS_3.slots;
    const __VLS_89 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
        ...{ 'onClick': {} },
    }));
    const __VLS_91 = __VLS_90({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_90));
    let __VLS_93;
    let __VLS_94;
    let __VLS_95;
    const __VLS_96 = {
        onClick: (...[$event]) => {
            __VLS_ctx.visible = false;
        }
    };
    __VLS_92.slots.default;
    var __VLS_92;
    const __VLS_97 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({
        ...{ 'onClick': {} },
        type: "primary",
    }));
    const __VLS_99 = __VLS_98({
        ...{ 'onClick': {} },
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_98));
    let __VLS_101;
    let __VLS_102;
    let __VLS_103;
    const __VLS_104 = {
        onClick: (__VLS_ctx.submit)
    };
    __VLS_100.slots.default;
    var __VLS_100;
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
