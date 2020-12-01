;(function (root, factory) {
	// CommonJS
	module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA1;

}));