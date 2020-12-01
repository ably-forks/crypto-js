;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./x64-core"), require("./sha512"), require("./sha384"), require("./hmac"));
	}
	else {
		// AMD
		define(["./core", "./x64-core", "./sha512", "./sha384", "./hmac"], factory);
	}
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA384;

}));