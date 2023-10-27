<template>
	<div class="login-cont">
		<el-row>
			<el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
				<el-form ref="$form" :model="form" :rules="formRule" auto-complete="off" class="login-form" label-position="left">
					<div class="title">hello !</div>
					<div class="title-tips">欢迎来到！</div>
					<el-form-item style="margin-top: 40px" prop="userName">
						<el-input v-model.trim="form.userName" v-focus auto-complete="off" placeholder="请输入用户名" tabindex="1" type="text">
							<template #prepend> <el-button :icon="icoUser" /> </template
						></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input
							:key="data.passwordType"
							ref="password"
							v-model.trim="form.password"
							:type="data.passwordType"
							auto-complete="off"
							placeholder="请输入密码"
							tabindex="2"
							@keyup="onLogin"
							><template #prepend> <el-button :icon="icoLock" /> </template
						></el-input>
						<span v-if="data.passwordType === 'password'" class="ico-pwd" @click="onShowPwd">
							<svg-icon name="eye"></svg-icon>
						</span>
						<span v-else class="ico-pwd" @click="onShowPwd">
							<svg-icon name="eye-open"></svg-icon>
						</span>
					</el-form-item>
					<el-button :loading="data.loading" class="login-btn" type="primary" @click="onLogin">登录</el-button>
					<router-link to="/register">
						<div style="margin-top: 20px">注册</div>
					</router-link>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Lock as icoLock, User as icoUser } from "@element-plus/icons-vue";
import { isPassword } from "@/utils/validate";
import useStore from "@/store";

const validateuserName = (rule, value, callback) => {
	if ("" == value) {
		callback(new Error("用户名不能为空"));
	} else {
		callback();
	}
};
const validatePassword = (rule, value, callback) => {
	if (!isPassword(value)) {
		callback(new Error("密码不能少于6位"));
	} else {
		callback();
	}
};
const form = reactive({
	userName: "test",
	password: "123456",
});
const formRule = reactive({
	userName: [
		{
			required: true,
			trigger: "blur",
			validator: validateuserName,
		},
	],
	password: [
		{
			required: true,
			trigger: "blur",
			validator: validatePassword,
		},
	],
});

const store = useStore();
const routes = useRoute();
const router = useRouter();
const data = reactive({
	loading: false,
	passwordType: "password",
});

function onShowPwd() {
	data.passwordType === "password" ? (data.passwordType = "") : (data.passwordType = "password");
	this.$nextTick(() => {
		this.$refs.password.focus();
	});
}
const $form = ref();
function onLogin() {
	$form.value.validate(async (valid) => {
		if (valid) {
			data.loading = true;
			await store.user.login();

			data.loading = false;
		} else {
			return false;
		}
	});
}
</script>
<style lang="scss" scoped>
.login-cont {
	height: 100vh;
	min-height: 600px;
	background: url("@/assets/login.jpg") center center fixed no-repeat;
	background-size: cover;

	.title {
		height: 50px;
		font-size: 54px;
		font-weight: 500;
		color: rgba(14, 18, 26, 1);
	}

	.title-tips {
		height: 24px;
		margin-top: 29px;
		font-size: 26px;
		font-weight: 400;
		color: rgba(14, 18, 26, 1);
	}

	.login-btn {
		display: inherit;
		width: 220px;
		height: 60px;
		margin-top: 5px;
		border: 0;

		&:hover {
			opacity: 0.9;
		}
	}

	.login-form {
		position: relative;
		max-width: 100%;
		margin: 22vh 10% 10%;
		overflow: hidden;

		.forget-password {
			width: 100%;
			margin-top: 40px;
			text-align: left;

			.forget-pass {
				width: 129px;
				height: 19px;
				font-size: 20px;
				font-weight: 400;
				color: rgba(92, 102, 240, 1);
			}
		}
	}

	.tips {
		margin-bottom: 10px;
		font-size: var(--base-font-size-default);
		color: var(--base-color-white);

		span {
			&:first-of-type {
				margin-right: 16px;
			}
		}
	}

	.title-container {
		position: relative;

		.title {
			margin: 0 auto 40px auto;
			font-size: 34px;
			font-weight: bold;
			color: var(--base-color-blue);
			text-align: center;
		}
	}

	.svg-container {
		position: absolute;
		top: 14px;
		left: 15px;
		z-index: var(--base-z-index);
		font-size: 16px;
		color: #d7dee3;
		cursor: pointer;
		user-select: none;
	}

	.ico-pwd {
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translate(0, -50%);
		display: flex;
		align-items: center;
		font-size: 16px;
		color: var(--base-font-color);
		cursor: pointer;
		user-select: none;
	}

	::deep {
		.el-form-item {
			padding-right: 0;
			margin: 20px 0;
			color: #454545;
			background: transparent;
			border: 1px solid transparent;
			border-radius: 2px;

			&__content {
				min-height: var(--base-input-height);
				line-height: var(--base-input-height);
			}

			&__error {
				position: absolute;
				top: 100%;
				left: 18px;
				font-size: var(--base-font-size-small);
				line-height: 18px;
				color: var(--base-color-red);
			}
		}

		.el-input {
			box-sizing: border-box;

			input {
				height: 58px;
				padding-left: 45px;
				font-size: var(--base-font-size-default);
				line-height: 58px;
				color: var(--base-font-color);
				background: #f6f4fc;
				border: 0;
				caret-color: var(--base-font-color);
			}
		}
	}
}
</style>
