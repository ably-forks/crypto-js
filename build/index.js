;(function (root, factory) {
	// CommonJS
	module.exports = exports = factory(require("./core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./sha1"), require("./sha256"), require("./hmac"), require("./evpkdf"), require("./cipher-core"), require("./format-hex"), require("./aes"));
}(this, function (CryptoJS) {

	return CryptoJS;

}));