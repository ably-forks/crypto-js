;(function (root, factory) {
	// CommonJS
	module.exports = exports = factory(require("./core"), require("./ripemd160"), require("./hmac"));
}(this, function (CryptoJS) {

	return CryptoJS.HmacRIPEMD160;

}));