describe("Groovy syntax highlighting for Prism.js", function() {

	it("highlights operators", function() {
		expect($('#plus .operator').text()).toBe('+');
		expect($('#minus .operator').text()).toBe('-');
		expect($('#multiply .operator').text()).toBe('*');
		expect($('#divide .operator').text()).toBe('/');
		expect($('#power .operator').text()).toBe('**');
		expect($('#mod .operator').text()).toBe('%');
		expect($('#or .operator').text()).toBe('|');
		expect($('#and .operator').text()).toBe('&');
		expect($('#xor .operator').text()).toBe('^');
		expect($('#next-prefix .operator').text()).toBe('++');
		expect($('#next-postfix .operator').text()).toBe('++');
		expect($('#previous-prefix .operator').text()).toBe('--');
		expect($('#previous-postfix .operator').text()).toBe('--');
		expect($('#left-shift .operator').text()).toBe('<<');
		expect($('#right-shift .operator').text()).toBe('>>');
		expect($('#bitwise-negate .operator').text()).toBe('~');
		expect($('#negative .operator').text()).toBe('-');
		expect($('#positive .operator').text()).toBe('+');
		expect($('#assignment .operator').text()).toBe('=');
		expect($('#equals .operator').text()).toBe('==');
		expect($('#not-equals .operator').text()).toBe('!=');
		expect($('#spaceship .operator').text()).toBe('<=>');
		expect($('#gt .operator').text()).toBe('>');
		expect($('#gte .operator').text()).toBe('>=');
		expect($('#lt .operator').text()).toBe('<');
		expect($('#lte .operator').text()).toBe('<=');
		expect($('#dereference .operator').text()).toBe('.');
		expect($('#safe-dereference .operator').text()).toBe('?.');
		expect($('#spread .operator').text()).toBe('*.');
		expect($('#java-field .operator').text()).toBe('.@');
		expect($('#spread-java-field .operator').text()).toBe('*.@');
		expect($('#method-ref .operator').text()).toBe('.&');
		expect($('#elvis .operator').text()).toBe('?:');
		expect($('#regex .operator').text()).toBe('=~');
		expect($('#firecracker .operator').text()).toBe('==~');
	});

	it("highlights index operator", function() {
		expect($('#get-at .punctuation').eq(0).text()).toBe('[');
		expect($('#get-at .punctuation').eq(1).text()).toBe(']');
	});

	it("highlights ternary operator", function() {
		expect($('#ternary .operator').eq(0).text()).toBe('?');
		expect($('#ternary .operator').eq(1).text()).toBe(':');
	});

	it("highlights 'keyword' operators", function() {
		expect($('#instanceof .keyword').text()).toBe('instanceof');
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
});
