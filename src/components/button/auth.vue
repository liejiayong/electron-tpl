<template>
	<Button @click="setStatus" :type="type" :ghost="ghost" :size="size" :shape="shape" :disabled="value">{{ txt }}</Button>
</template>

<script>
export default {
	name: "AuthButton",
	props: {
		tip: {
			type: String,
			default: "请稍后在试~",
		},
		text: {
			type: String,
			default: "获取验证码",
		},
		type: {
			type: String,
			default: "default",
		},
		ghost: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: "default",
		},
		shape: {
			type: String,
		},
		second: {
			type: Number,
			default: 60,
		},
		value: {
			type: Boolean, // 是否允许点击，true：禁用；false：可点
			default: false,
		},
		disableTxt: {
			type: String,
			default: "请输入手机号码~",
		},
	},
	model: {
		prop: "value",
		event: "countdown",
	},
	data() {
		return {
			txt: this.text,
			currTime: this.second,
		};
	},
	methods: {
		setStatus() {
			const { timer, tip, value, disableTxt } = this;

			if (value) return this.$Message.info({ content: disableTxt });

			if (timer) return this.$Message.info({ content: tip });

			this.$emit("onchange", true);
			this.$emit("countdown", true);

			this.countdown();
		},
		countdown() {
			const { second } = this;
			let { currTime } = this;
			this.timer = setTimeout(() => {
				if (currTime < 0) {
					clearTimeout(this.timer);
					this.txt = this.text;
					this.timer = null;
					this.currTime = second;
					this.$emit("countdown", false);
				} else {
					this.txt = `重新发送(${currTime})`;
					currTime--;
					this.currTime = currTime;
					this.countdown();
				}
			}, 1000);
		},
	},
	mounted() {
		this.timer = null;
	},
	unmounted() {
		if (this.timer) clearTimeout(this.timer);
	},
};
</script>
