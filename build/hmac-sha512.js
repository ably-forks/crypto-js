;(function (root, factory) {
	// CommonJS
	module.exports = exports = factory(require("./core"), require("./x64-core"), require("./sha512"), require("./hmac"));
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA512;

}));