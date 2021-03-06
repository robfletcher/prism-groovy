describe("Groovy syntax highlighting for Prism", function() {

	describe("operators", function() {
		var operators = {
			plus:                  '+',
			minus:                 '-',
			multiply:              '*',
			divide:                '/',
			power:                 '**',
			mod:                   '%',
			or:                    '||',
			'bitwise-or':          '|',
			and:                   '&&',
			'bitwise-and':         '&',
			xor:                   '^',
			'next-prefix':         '++',
			'next-postfix':        '++',
			'previous-prefix':     '--',
			'previous-postfix':    '--',
			'increment-by':        '+=',
			'decrement-by':        '-=',
			'multiply-by':         '*=',
			'divide-by':           '/=',
			'pow-assign':          '**=',
			'or-assign':           '|=',
			'and-assign':          '&=',
			'xor-assign':          '^=',
			'left-shift':          '<<',
			'right-shift':         '>>',
			'bitwise-right-shift': '>>>',
			'bitwise-negate':      '~',
			negative:              '-',
			positive:              '+',
			assignment:            '=',
			equals:                '==',
			'not-equals':          '!=',
			spaceship:             '<=>',
			gt:                    '>',
			gte:                   '>=',
			lt:                    '<',
			lte:                   '<=',
			dereference:           '.',
			'safe-dereference':    '?.',
			spread:                '*.',
			'java-field':          '.@',
			'spread-java-field':   '*.@',
			'method-ref':          '.&',
			'elvis':               '?:',
			regex:                 '=~',
			firecracker:           '==~'
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
			expect($('#trait .keyword').text()).toBe('trait');
		});
	});

	describe("numeric literals", function() {
		var numerics = {
			int:                  '1234567890',
			decimal:              '12345.67890',
			binary:               '0b01',
			hex:                  '0x123456789abcdef0',
			float:                '1.1f',
			integer:              '1i',
			long:                 '1L',
			'big-integer':        '1g',
			'big-decimal':        '1.1g',
			'underscore-int':     '1_000',
			'underscore-decimal': '1_000.000_1',
			'underscore-binary':  '0b1_01',
			'underscore-hex':     '0xff_ff'
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
			string:                 "'a string'",
			gstring:                '"a GString"',
			'regex-string':         '/a regex style string/',
			pattern:                '/a Pattern literal/',
			'multiline-string':     "'''a\nmultiline\nstring'''",
			'multiline-gstring':    '"""a\nmultiline\nGString"""',
			'dollar-slashy-string': "$/a 'dollar-slashy' string\nsplit over multiple lines\n/$"
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
			expect($('#gstring-with-variable .string').text()).toBe('"var ref $a.b in GString"');
			expect($('#gstring-with-variable .punctuation').text()).toBe('$');
			expect($('#gstring-with-variable .operator').text()).toBe('.');
		});

		it("highlights expressions in GStrings", function() {
			expect($('#gstring-with-expression .string').text()).toBe('"expression ${a.b() + a} in GString"');
			expect($('#gstring-with-expression .punctuation').text()).toBe('${()}');
			expect($('#gstring-with-expression .operator').text()).toBe('.+');
		});

		it("highlights expressions in multiline GStrings", function() {
			expect($('#multiline-gstring-with-expression .string').text()).toBe('"""an\nexpression ${a.b() + a} inside a\nmultiline\nGString"""');
			expect($('#multiline-gstring-with-expression .punctuation').text()).toBe('${()}');
			expect($('#multiline-gstring-with-expression .operator').text()).toBe('.+');
		});

		it("highlights expressions in multiline dollar-slashy strings", function() {
			expect($('#multiline-dollar-slashy-with-expression .string').text()).toBe('$/an\nexpression ${a.b() + a} inside a\nmultiline\ndollar-slashy string/$');
			expect($('#multiline-dollar-slashy-with-expression .punctuation').text()).toBe('${()}');
			expect($('#multiline-dollar-slashy-with-expression .operator').text()).toBe('.+');
		});

		it("does not highlight expressions in single-quoted strings", function() {
			expect($('#string-with-expression .string').text()).toBe('\'single-quoted strings can ${false ? "" : "not"} contain expressions\'');
			expect($('#string-with-expression .expression').length).toBe(0);
		});

		it("does not highlight expressions if the $ is excaped", function() {
			expect($('#gstring-with-escaped-expression .expression').length).toBe(0);
		});

		it("highlights expressions in regex-style strings", function() {
			expect($('#regex-with-expression .expression').length).toBe(1);
		});

		it("does not highlight a standalone dollar in a dollar slashy string", function() {
			expect($('#dollar-slashy-with-dollar .expression').length).toBe(0);
		});

		it("does not highlight a double dollar in a dollar slashy string", function() {
			expect($('#dollar-slashy-with-double-dollar .expression').length).toBe(0);
		});

		it("only a dollar is an escape character in a dollar-slashy string", function() {
			expect($('#dollar-slashy-with-backslash-dollar .expression').length).toBe(1);
			expect($('#dollar-slashy-with-backslash-dollar .expression').text()).toBe('$foo');
		});

		it("does not prematurely terminate a dollar slashy string containing an escaped terminator", function() {
			expect($('#dollar-slashy-with-escaped-delimiter .string').text()).toBe('$/an escaped delimiter like $/$ does not terminate a dollar-slashy string/$');
		});

		it("does not prematurely terminate a dollar slashy string containing a partial terminator", function() {
			expect($('#dollar-slashy-with-partial-delimiter .string').text()).toBe('$/a partial delimiter like / does not terminate a dollar-slashy string/$');
		});

		it("does not highlight things that look like GString expressions in other languages", function() {
			expect($('#non-groovy-gstring-expression .string').text()).toBe('"looks like a GString ${b}"');
			expect($('#non-groovy-gstring-expression .expression').length).toBe(0);
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

	describe("block labels", function() {
		it("highlights labels in Spock specifications", function() {
			expect($('#spock .spock-block').eq(0).text()).toBe('given:');
			expect($('#spock .spock-block').eq(1).text()).toBe('when:');
			expect($('#spock .spock-block').eq(2).text()).toBe('then:');
		});
	});

	describe("method signatures", function() {
		it("highlights varargs parameters", function() {
			expect($('#varargs .punctuation').text()).toBe('(...)');
		})
	});

	describe("annotations", function() {
		it("highlights simple annotations", function() {
			expect($('#simple-annotation .annotation').text()).toBe('@Canonical');
		})

		it("highlights annotations with arguments", function() {
			expect($('#annotation-with-arguments .annotation').text()).toBe('@DelegatesTo');
		})
	})
});
