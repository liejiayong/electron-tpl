import { uid } from "uid";

export default [
	{
		url: "/api/getUsers",
		method: "get",
		response: () => {
			return {
				code: 0,
				data: {
					user: "JyLie",
					token: uid(16),
				},
				message: "登录成功",
			};
		},
	},
];
