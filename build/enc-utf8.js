;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else {
		// AMD
		define(["./core"], factory);
	}
}(this, function (CryptoJS) {

	return CryptoJS.enc.Utf8;

}));