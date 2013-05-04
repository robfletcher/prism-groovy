describe("Groovy syntax highlighting for Prism.js", function() {

	describe("Groovy operators", function() {
		var operators = {
			plus: '+',
			minus: '-',
			multiply: '*',
			divide: '/',
			power: '**',
			mod: '%',
			or: '||',
			'bitwise-or': '|',
			and: '&&',
			'bitwise-and': '&',
			xor: '^',
			'next-prefix': '++',
			'next-postfix': '++',
			'previous-prefix': '--',
			'previous-postfix': '--',
			'left-shift': '<<',
			'right-shift': '>>',
			'bitwise-negate': '~',
			negative: '-',
			positive: '+',
			assignment: '=',
			equals: '==',
			'not-equals': '!=',
			spaceship: '<=>',
			gt: '>',
			gte: '>=',
			lt: '<',
			lte: '<=',
			dereference: '.',
			'safe-dereference': '?.',
			spread: '*.',
			'java-field': '.@',
			'spread-java-field': '*.@',
			'method-ref': '.&',
			'elvis': '?:',
			regex: '=~',
			firecracker: '==~'
		};

		for (op in operators) {
			(function(name, symbol) {
				it("highlights the " + name + " operator", function() {
					expect($('#' + name + ' .operator').text()).toBe(symbol);
				});
			})(op, operators[op]);
		}
	});

	it("highlights index operator", function() {
		expect($('#get-at .punctuation').eq(0).text()).toBe('[');
		expect($('#get-at .punctuation').eq(1).text()).toBe(']');
	});

	it("highlights ternary operator", function() {
		expect($('#ternary .operator').eq(0).text()).toBe('?');
		expect($('#ternary .operator').eq(1).text()).toBe(':');
	});

	it("highlights the instanceof operator", function() {
		expect($('#instanceof .keyword').text()).toBe('instanceof');
	});

	it("highlights the type-cast operator", function() {
		expect($('#cast .keyword').text()).toBe('as');
	});

	it("highlights Groovy keywords", function() {
		expect($('#def-var .keyword').text()).toBe('def');
		expect($('#def-return .keyword').text()).toBe('def');
		expect($('#def-param .keyword').eq(1).text()).toBe('def');
		expect($('#import-as .keyword').eq(1).text()).toBe('as');
		expect($('#in .keyword').eq(1).text()).toBe('in');
	});

	it("highlights numeric literals", function() {
		expect($('#int .number').text()).toBe('1234567890');
		expect($('#negative-int .number').text()).toBe('-1');
		expect($('#decimal .number').text()).toBe('12345.67890');
		expect($('#binary .number').text()).toBe('0b01');
		expect($('#hex .number').text()).toBe('0x123456789abcdef0');
		expect($('#float .number').text()).toBe('1.1f');
		expect($('#integer .number').text()).toBe('1i');
		expect($('#long .number').text()).toBe('1L');
		expect($('#big-integer .number').text()).toBe('1g');
		expect($('#big-decimal .number').text()).toBe('1.1g');
	});

	it("highlights Java 7 style numeric literals", function() {
		expect($('#underscore-int .number').text()).toBe('1_000');
		expect($('#underscore-decimal .number').text()).toBe('1_000.000_1');
	});

	it("highlights list literals", function() {
		expect($('#list .punctuation').eq(0).text()).toBe('[');
		expect($('#list .punctuation').eq(1).text()).toBe(',');
		expect($('#list .punctuation').eq(2).text()).toBe(',');
		expect($('#list .punctuation').eq(3).text()).toBe(']');
	});

	it("highlights map literals", function() {
		expect($('#map .punctuation').eq(0).text()).toBe('[');
		expect($('#map .punctuation').eq(1).text()).toBe(':');
		expect($('#map .punctuation').eq(2).text()).toBe(',');
		expect($('#map .punctuation').eq(3).text()).toBe(':');
		expect($('#map .punctuation').eq(4).text()).toBe(']');
	});

	it("highlights range literals", function() {
		expect($('#range .operator').text()).toBe('..');
		expect($('#half-ex-range .operator').text()).toBe('..<');
	});

	it("highlights string literals", function() {
		expect($('#string .string').text()).toBe("'a string'");
		expect($('#gstring .string').text()).toBe('"a GString"');
		expect($('#regex-string .string').text()).toBe('/a regex style string/');
		expect($('#pattern .string').text()).toBe('/a Pattern literal/');
	});

	it("highlights multiline strings", function() {
		expect($('#multiline-string .string').text()).toBe("'''a\nmultiline\nstring'''");
		expect($('#multiline-gstring .string').text()).toBe('"""a\nmultiline\ngstring"""');
	});
});
