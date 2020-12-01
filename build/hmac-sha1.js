;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
	}
	else {
		// AMD
		define(["./core", "./sha1", "./hmac"], factory);
	}
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA1;

}));