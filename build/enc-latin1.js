;(function (root, factory) {
	// CommonJS
	module.exports = exports = factory(require("./core"));
}(this, function (CryptoJS) {

	return CryptoJS.enc.Latin1;

}));