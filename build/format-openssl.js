;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
}(this, function (CryptoJS) {

	return CryptoJS.format.OpenSSL;

}));