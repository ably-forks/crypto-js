;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./ripemd160"), require("./hmac"));
	}
	else {
		// AMD
		define(["./core", "./ripemd160", "./hmac"], factory);
	}
}(this, function (CryptoJS) {

	return CryptoJS.HmacRIPEMD160;

}));