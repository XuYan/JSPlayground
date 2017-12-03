const regex = require('./jsregex');

var str = `
	//@internal-start:Name1
	function a() {
	}
	//@internal-end

	function b() {

	}

	//@internal-start:Name2
	function c() {
	}
	//@internal-end

	//@internal-start:Name3
	function d() {
	}
	//@internal-end

	//@internal-start:Name1
	function e() {
	}
	//@internal-end
`;

var newStr = str.replace(regex.rangeRegex, "replaced");
console.log(newStr);