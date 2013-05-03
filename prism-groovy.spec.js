describe("Groovy syntax highlighting for Prism.js", function() {
	beforeEach(function() {
		this.operators = $('#operators');
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
	});
});
