describe("Groovy syntax highlighting for Prism", function() {

	describe("operators", function() {
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
	});

	describe("keywords", function() {
		it("highlights Groovy keywords", function() {
			expect($('#def-var .keyword').text()).toBe('def');
			expect($('#def-return .keyword').text()).toBe('def');
			expect($('#def-param .keyword').eq(1).text()).toBe('def');
			expect($('#import-as .keyword').eq(1).text()).toBe('as');
			expect($('#in .keyword').eq(1).text()).toBe('in');
		});
	});

	describe("numeric literals", function() {
		var numerics = {
			int:                  '1234567890',
			'negative-int':       '-1',
			decimal:              '12345.67890',
			binary:               '0b01',
			hex:                  '0x123456789abcdef0',
			float:                '1.1f',
			integer:              '1i',
			long:                 '1L',
			'big-integer':        '1g',
			'big-decimal':        '1.1g',
			'underscore-int':     '1_000',
			'underscore-decimal': '1_000.000_1'
		}

		for (num in numerics) {
			(function(name, value) {
				it("highlights a literal " + name + " number", function() {
					expect($('#' + name + ' .number').text()).toBe(value);
				});
			})(num, numerics[num]);
		}
	});

	describe("collection literals", function() {
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
		});

		it("highlights half-exclusive range literals", function() {
			expect($('#half-ex-range .operator').text()).toBe('..<');
		});
	});

	describe("string literals", function() {
		var stringTypes = {
			string:              "'a string'",
			gstring:             '"a GString"',
			'regex-string':      '/a regex style string/',
			pattern:             '/a Pattern literal/',
			'multiline-string':  "'''a\nmultiline\nstring'''",
			'multiline-gstring': '"""a\nmultiline\nGString"""'
		};

		for (str in stringTypes) {
			(function(name, value) {
				it("highlights " + name + " literals", function() {
					expect($('#' + name + ' .string').text()).toBe(value);
				});
			})(str, stringTypes[str])
		}
	});

	describe("string interpolation", function() {
		it("highlights variables in GStrings", function() {
			expect($('#gstring-with-variable .string').text()).toBe('"var ref  in GString"');
			expect($('#gstring-with-variable .punctuation').text()).toBe('$');
			expect($('#gstring-with-variable .operator').text()).toBe('.');
		});

		it("highlights expressions in GStrings", function() {
			expect($('#gstring-with-expression .string').text()).toBe('"expression  in GString"');
			expect($('#gstring-with-expression .punctuation').text()).toBe('${()}');
			expect($('#gstring-with-expression .operator').text()).toBe('.+');
		});

		it("highlights expressions in multiline GStrings", function() {
			expect($('#gstring-with-expression .string').text()).toBe('"an\nexpression  inside a\nmultiline\nGString"');
			expect($('#gstring-with-expression .punctuation').text()).toBe('${()}');
			expect($('#gstring-with-expression .operator').text()).toBe('.+');
		});
	});

	describe("comments", function() {
		it("highlights line comments", function() {
			expect($('#line-comment .comment').text()).toBe(' // line comment swallows() all + "tokens"\n');
		});

		it("highlights block comments", function() {
			expect($('#block-comment .comment').text()).toBe('/* block comment\nspans\nlines */');
		});
	});
});
