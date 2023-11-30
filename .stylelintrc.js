module.exports = {
	processors: [
		[
			'@mapbox/stylelint-processor-arbitrary-tags',
			{
				fileFilterRegex: [/\.vue$/],
			},
		],
	],
	extends: ['stylelint-config-standard-scss'],
	rules: {
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep'],
			},
		],
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep'],
			},
		],
		'no-empty-first-line': null,
		'no-empty-source': null,
		indentation: [
			2,
			{
				baseIndentLevel: 1,
			},
		],
		'color-hex-length': 'long',
		'declaration-no-important': null,
		'color-function-notation': null,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'selector-class-pattern': null,
		'scss/at-import-no-partial-leading-underscore': null,
		'scss/double-slash-comment-whitespace-inside': null,
		'scss/double-slash-comment-empty-line-before': null,
		'no-missing-end-of-source-newline': null,
		'scss/at-import-partial-extension': null,
		'at-rule-empty-line-before': null,
		'declaration-colon-newline-after': null,
		'number-leading-zero': null,
		'value-list-comma-newline-after': null,
		'scss/no-global-function-names': null,
		'string-quotes': 'single',
    'max-line-length': [true, 180],
    'selector-id-pattern': null
	},
}
