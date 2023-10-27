import { request } from "@/utils/request";

export function getUserInfo() {
	return request({
		url: "api/getUsers",
		method: "get",
		canRepeat: false,
	});
}
