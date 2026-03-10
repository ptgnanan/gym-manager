import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { loginApi } from '../../api/auth';
import { setToken, setUser } from '../../utils/auth';
const router = useRouter();
const loading = ref(false);
const form = reactive({ username: 'admin', password: '123456' });
const goHome = async () => {
    loading.value = true;
    try {
        const res = await loginApi(form);
        if (res?.data?.token) {
            setToken(res.data.token);
            setUser({
                username: res.data.username,
                nickname: res.data.nickname,
                userId: res.data.userId
            });
            ElMessage.success(`登录成功，欢迎 ${res.data.nickname || res.data.username}`);
            router.push('/dashboard');
        }
        else {
            ElMessage.error('登录失败，请检查返回数据');
        }
    }
    catch (error) {
        console.error('login error', error);
    }
    finally {
        loading.value = false;
    }
};
const goRegister = () => router.push('/register');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "login-page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "login-card" },
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
const __VLS_4 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    label: "账号",
}));
const __VLS_6 = __VLS_5({
    label: "账号",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
const __VLS_8 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    modelValue: (__VLS_ctx.form.username),
    placeholder: "请输入账号",
}));
const __VLS_10 = __VLS_9({
    modelValue: (__VLS_ctx.form.username),
    placeholder: "请输入账号",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_7;
const __VLS_12 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    label: "密码",
}));
const __VLS_14 = __VLS_13({
    label: "密码",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    modelValue: (__VLS_ctx.form.password),
    type: "password",
    placeholder: "请输入密码",
}));
const __VLS_18 = __VLS_17({
    modelValue: (__VLS_ctx.form.password),
    type: "password",
    placeholder: "请输入密码",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
var __VLS_15;
const __VLS_20 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    ...{ 'onClick': {} },
    type: "primary",
    ...{ class: "full" },
    loading: (__VLS_ctx.loading),
}));
const __VLS_22 = __VLS_21({
    ...{ 'onClick': {} },
    type: "primary",
    ...{ class: "full" },
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
let __VLS_24;
let __VLS_25;
let __VLS_26;
const __VLS_27 = {
    onClick: (__VLS_ctx.goHome)
};
__VLS_23.slots.default;
var __VLS_23;
const __VLS_28 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ 'onClick': {} },
    ...{ class: "full mt12" },
}));
const __VLS_30 = __VLS_29({
    ...{ 'onClick': {} },
    ...{ class: "full mt12" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
let __VLS_32;
let __VLS_33;
let __VLS_34;
const __VLS_35 = {
    onClick: (__VLS_ctx.goRegister)
};
__VLS_31.slots.default;
var __VLS_31;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "tips" },
});
/** @type {__VLS_StyleScopedClasses['login-page']} */ ;
/** @type {__VLS_StyleScopedClasses['login-card']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-area']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-title']} */ ;
/** @type {__VLS_StyleScopedClasses['brand-subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['mt12']} */ ;
/** @type {__VLS_StyleScopedClasses['tips']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            loading: loading,
            form: form,
            goHome: goHome,
            goRegister: goRegister,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
