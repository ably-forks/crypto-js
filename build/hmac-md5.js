;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./md5"), require("./hmac"));
	}
	else {
		// AMD
		define(["./core", "./md5", "./hmac"], factory);
	}
}(this, function (CryptoJS) {

	return CryptoJS.HmacMD5;

}));