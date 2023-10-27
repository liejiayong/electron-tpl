const prefix = "testStore_";

export function setItem(a, b) {
	const name = prefix + a;
	let c;
	try {
		window.localStorage.setItem(name, b);
	} catch (e) {
		console.log("ios localStorage not support", e);
		c = new Date();
		c.setTime(c.getTime() + 31536e6), (document.cookie = name + "=" + encodeURIComponent(b) + ";expires=" + c.toGMTString());
	}
}

/*
获取localStorage
*/
export function getItem(a) {
	const name = prefix + a;
	let b;
	try {
		return window.localStorage.getItem(name);
	} catch (e) {
		console.log("ios localStorage not support", e);
		b = document.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)"));
		return null != b ? decodeURIComponent(b[2]) : null;
	}
}

/*
删除localStorage
*/
export function removeItem(a) {
	const name = prefix + a;
	let b, c;
	try {
		window.localStorage.removeItem(name);
	} catch (e) {
		(b = new Date()),
			b.setTime(b.getTime() - 1),
			(c = getItem(a)),
			null != c && (document.cookie = name + "=" + c + ";expires=" + b.toGMTString());
	}
}

export default {
	getItem,
	setItem,
	removeItem,
};
