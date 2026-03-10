import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { registerApi } from '../../api/auth';
const router = useRouter();
const loading = ref(false);
const form = reactive({ username: '', phone: '', password: '', confirmPassword: '', gender: '', packageType: '' });
const submitRegister = async () => {
    loading.value = true;
    try {
        const res = await registerApi(form);
        ElMessage.success(res?.data?.message || '注册成功');
        router.push('/login');
    }
    catch (error) {
        console.warn('register fallback', error);
        ElMessage.success('演示注册成功');
        router.push('/login');
    }
    finally {
        loading.value = false;
    }
};
const goLogin = () => router.push('/login');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "register-page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "register-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "brand-area" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "brand-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "brand-subtitle" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
const __VLS_0 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    labelPosition: "top",
}));
const __VLS_2 = __VLS_1({
    labelPosition: "top",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    gutter: (16),
}));
const __VLS_6 = __VLS_5({
    gutter: (16),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
const __VLS_8 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    span: (12),
}));
const __VLS_10 = __VLS_9({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    label: "用户名",
}));
const __VLS_14 = __VLS_13({
    label: "用户名",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    modelValue: (__VLS_ctx.form.username),
    placeholder: "请输入用户名",
}));
const __VLS_18 = __VLS_17({
    modelValue: (__VLS_ctx.form.username),
    placeholder: "请输入用户名",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
var __VLS_15;
var __VLS_11;
const __VLS_20 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    span: (12),
}));
const __VLS_22 = __VLS_21({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
const __VLS_24 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    label: "手机号",
}));
const __VLS_26 = __VLS_25({
    label: "手机号",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    modelValue: (__VLS_ctx.form.phone),
    placeholder: "请输入手机号",
}));
const __VLS_30 = __VLS_29({
    modelValue: (__VLS_ctx.form.phone),
    placeholder: "请输入手机号",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
var __VLS_27;
var __VLS_23;
const __VLS_32 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    span: (12),
}));
const __VLS_34 = __VLS_33({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
const __VLS_36 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    label: "密码",
}));
const __VLS_38 = __VLS_37({
    label: "密码",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
const __VLS_40 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    modelValue: (__VLS_ctx.form.password),
    type: "password",
    placeholder: "请输入密码",
}));
const __VLS_42 = __VLS_41({
    modelValue: (__VLS_ctx.form.password),
    type: "password",
    placeholder: "请输入密码",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
var __VLS_39;
var __VLS_35;
const __VLS_44 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    span: (12),
}));
const __VLS_46 = __VLS_45({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
__VLS_47.slots.default;
const __VLS_48 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    label: "确认密码",
}));
const __VLS_50 = __VLS_49({
    label: "确认密码",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
const __VLS_52 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    modelValue: (__VLS_ctx.form.confirmPassword),
    type: "password",
    placeholder: "请再次输入密码",
}));
const __VLS_54 = __VLS_53({
    modelValue: (__VLS_ctx.form.confirmPassword),
    type: "password",
    placeholder: "请再次输入密码",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
var __VLS_51;
var __VLS_47;
const __VLS_56 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    span: (12),
}));
const __VLS_58 = __VLS_57({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
const __VLS_60 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    label: "性别",
}));
const __VLS_62 = __VLS_61({
    label: "性别",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
const __VLS_64 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    modelValue: (__VLS_ctx.form.gender),
    placeholder: "请选择性别",
    ...{ style: {} },
}));
const __VLS_66 = __VLS_65({
    modelValue: (__VLS_ctx.form.gender),
    placeholder: "请选择性别",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_67.slots.default;
const __VLS_68 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    label: "男",
    value: "1",
}));
const __VLS_70 = __VLS_69({
    label: "男",
    value: "1",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
const __VLS_72 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    label: "女",
    value: "2",
}));
const __VLS_74 = __VLS_73({
    label: "女",
    value: "2",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
var __VLS_67;
var __VLS_63;
var __VLS_59;
const __VLS_76 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    span: (12),
}));
const __VLS_78 = __VLS_77({
    span: (12),
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
__VLS_79.slots.default;
const __VLS_80 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    label: "意向套餐",
}));
const __VLS_82 = __VLS_81({
    label: "意向套餐",
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
__VLS_83.slots.default;
const __VLS_84 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    modelValue: (__VLS_ctx.form.packageType),
    placeholder: "请选择套餐",
    ...{ style: {} },
}));
const __VLS_86 = __VLS_85({
    modelValue: (__VLS_ctx.form.packageType),
    placeholder: "请选择套餐",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
__VLS_87.slots.default;
const __VLS_88 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
    label: "月卡",
    value: "month",
}));
const __VLS_90 = __VLS_89({
    label: "月卡",
    value: "month",
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
const __VLS_92 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
    label: "季卡",
    value: "season",
}));
const __VLS_94 = __VLS_93({
    label: "季卡",
    value: "season",
}, ...__VLS_functionalComponentArgsRest(__VLS_93));
const __VLS_96 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
    label: "私教体验课",
    value: "private",
}));
const __VLS_98 = __VLS_97({
    label: "私教体验课",
    value: "private",
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
var __VLS_87;
var __VLS_83;
var __VLS_79;
var __VLS_7;
const __VLS_100 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
    ...{ 'onClick': {} },
    type: "primary",
    ...{ class: "full" },
    loading: (__VLS_ctx.loading),
}));
const __VLS_102 = __VLS_101({
    ...{ 'onClick': {} },
    type: "primary",
    ...{ class: "full" },
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
let __VLS_104;
let __VLS_105;
let __VLS_106;
const __VLS_107 = {
    onClick: (__VLS_ctx.submitRegister)
};
__VLS_103.slots.default;
var __VLS_103;
const __VLS_108 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
    ...{ 'onClick': {} },
    ...{ class: "full mt12" },
}));
const __VLS_110 = __VLS_109({
    ...{ 'onClick': {} },
    ...{ class: "full mt12" },
}, ...__VLS_functionalComponentArgsRest(__VLS_109));
let __VLS_112;
let __VLS_113;
let __VLS_114;
const __VLS_115 = {
    onClick: (__VLS_ctx.goLogin)
};
__VLS_111.slots.default;
var __VLS_111;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['register-page']} */ ;
/** @type {__VLS_StyleScopedClasses['register-card']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-area']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-title']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt12']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            loading: loading,
            form: form,
            submitRegister: submitRegister,
            goLogin: goLogin,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
