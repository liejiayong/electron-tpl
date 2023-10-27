import Request from "@liejy/request";

const service = new Request({
	baseURL: import.meta.VUE_APP_BASE_URL,
	successMap: { code: 0 },
	interceptors: {
		// 实例请求拦截
		requestInterceptors: (config) => {
			return config;
		},
		// 实例响应拦截
		responseInterceptors: (result) => {
			return result;
		},
	},
});

export const request = (config) => {
	return service.request(config);
};

export default service;
