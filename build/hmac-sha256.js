;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./sha256"), require("./hmac"));
	}
	else {
		// AMD
		define(["./core", "./sha256", "./hmac"], factory);
	}
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA256;

}));