;(function (root, factory) {
	// CommonJS
	module.exports = exports = factory(require("./core"), require("./cipher-core"));
}(this, function (CryptoJS) {

	return CryptoJS.format.OpenSSL;

}));