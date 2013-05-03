describe("Groovy syntax highlighting for Prism.js", function() {
	beforeEach(function() {
		this.operators = $('#operators');
		this.keywords = $('#keywords');
	});

	it("highlights operators", function() {
		expect(this.operators.find('#plus .operator').text()).toBe('+');
		expect(this.operators.find('#minus .operator').text()).toBe('-');
		expect(this.operators.find('#multiply .operator').text()).toBe('*');
		expect(this.operators.find('#divide .operator').text()).toBe('/');
		expect(this.operators.find('#power .operator').text()).toBe('**');
		expect(this.operators.find('#mod .operator').text()).toBe('%');
		expect(this.operators.find('#or .operator').text()).toBe('|');
		expect(this.operators.find('#and .operator').text()).toBe('&');
		expect(this.operators.find('#xor .operator').text()).toBe('^');
		expect(this.operators.find('#next-prefix .operator').text()).toBe('++');
		expect(this.operators.find('#next-postfix .operator').text()).toBe('++');
		expect(this.operators.find('#previous-prefix .operator').text()).toBe('--');
		expect(this.operators.find('#previous-postfix .operator').text()).toBe('--');
		expect(this.operators.find('#left-shift .operator').text()).toBe('<<');
		expect(this.operators.find('#right-shift .operator').text()).toBe('>>');
		expect(this.operators.find('#bitwise-negate .operator').text()).toBe('~');
		expect(this.operators.find('#negative .operator').text()).toBe('-');
		expect(this.operators.find('#positive .operator').text()).toBe('+');
		expect(this.operators.find('#equals .operator').text()).toBe('==');
		expect(this.operators.find('#not-equals .operator').text()).toBe('!=');
		expect(this.operators.find('#spaceship .operator').text()).toBe('<=>');
		expect(this.operators.find('#gt .operator').text()).toBe('>');
		expect(this.operators.find('#gte .operator').text()).toBe('>=');
		expect(this.operators.find('#lt .operator').text()).toBe('<');
		expect(this.operators.find('#lte .operator').text()).toBe('<=');
		expect(this.operators.find('#dereference .operator').text()).toBe('.');
		expect(this.operators.find('#safe-dereference .operator').text()).toBe('?.');
		expect(this.operators.find('#spread .operator').text()).toBe('*.');
		expect(this.operators.find('#java-field .operator').text()).toBe('.@');
		expect(this.operators.find('#spread-java-field .operator').text()).toBe('*.@');
		expect(this.operators.find('#method-ref .operator').text()).toBe('.&');
		expect(this.operators.find('#elvis .operator').text()).toBe('?:');
		expect(this.operators.find('#regex .operator').text()).toBe('=~');
		expect(this.operators.find('#firecracker .operator').text()).toBe('==~');
	});

	it("highlights index operator", function() {
		var punctuations = this.operators.find('#get-at .punctuation');
		expect(punctuations.eq(0).text()).toBe('[');
		expect(punctuations.eq(1).text()).toBe(']');
	});

	it("highlights 'keyword' operators", function() {
		expect(this.operators.find('#instanceof .keyword').text()).toBe('instanceof');
		expect(this.operators.find('#cast .keyword').text()).toBe('as');
	});

	it("highlights Groovy keywords", function() {
		expect(this.keywords.find('#def-var .keyword').text()).toBe('def');
		expect(this.keywords.find('#def-return .keyword').text()).toBe('def');
		expect(this.keywords.find('#def-param .keyword').eq(1).text()).toBe('def');
		expect(this.keywords.find('#import-as .keyword').eq(1).text()).toBe('as');
		expect(this.keywords.find('#in .keyword').eq(1).text()).toBe('in');
	});
});
