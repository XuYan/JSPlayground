module.exports = {
	// This regular expression aims to replace code blocks wrapped from @internal-start to @internal-end.
	// One of the useful scenerio is prevent internal code exposure in minified production code.
	// rangeRegex_positive_lookbehind: /\/\/@internal-start:Name(?:1|3)(?:.|[\r\n])*?(?<=@internal-end)/gi,
	rangeRegex: /\/\/@internal-start:Name(?:1|3)(?:.|[\r\n])*?@internal-end/gi
};	