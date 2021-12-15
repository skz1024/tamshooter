module.exports = {
	"globals": {
        "TIC": "readonly",
        "SCN": "readonly",
		"poke": "readonly",
		"rect": "readonly",
		"rectb": "readonly",
		"btnp": "readonly",
		"pmem": "readonly",
		"cls": "readonly",
		"spr": "readonly",
		"line": "readonly",
		"map": "readonly",
		"music": "readonly",
		"btn": "readonly",
		"sfx": "readonly",
		"circ": "readonly",
		"circb": "readonly",
		
    },
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 5
    },
    'rules': {
        'indent': [
            'off',
            2
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
		'no-constant-condition': ['error', { 'checkLoops': false }]
    }
}
