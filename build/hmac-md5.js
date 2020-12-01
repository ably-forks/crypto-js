;(function (root, factory) {
	// CommonJS
	module.exports = exports = factory(require("./core"), require("./md5"), require("./hmac"));
}(this, function (CryptoJS) {

	return CryptoJS.HmacMD5;

}));