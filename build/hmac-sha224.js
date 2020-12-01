;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./sha256"), require("./sha224"), require("./hmac"));
	}
	else {
		// AMD
		define(["./core", "./sha256", "./sha224", "./hmac"], factory);
	}
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA224;

}));