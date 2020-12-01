;(function (root, factory) {
	// CommonJS
	module.exports = exports = factory(require("./core"), require("./sha256"), require("./sha224"), require("./hmac"));
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA224;

}));