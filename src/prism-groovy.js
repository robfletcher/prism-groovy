Prism.languages.groovy = Prism.languages.extend('clike', {
    'keyword': /\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g,
    'number': /\b0b[01]+\b|\b0x[\da-f]+(\.[\da-fp\-]+)?\b|\b\d+(\.\d+[e]?[\d]*)?[glidf]\b|\d+(\.\d+)?\b/gi,
    'operator': /={0,2}~|\?\.|\*?\.@|\.&amp;|\.(?=\w)|\.{2}(&lt;)?(?!\.)|-&gt;|\?:|[-+]{1,2}|!|(&lt;=)?&gt;|&lt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\^|%/g
});

Prism.languages.insertBefore('groovy', 'punctuation', {
    'block-label': /\b(setup|given|when|then|and|cleanup|expect|where):/g
});

Prism.languages.insertBefore('groovy', 'keyword', {
    'string': {
    	pattern: /("""|''')[\W\w]*?\1|("|'|\/).*?\2/g,
    	inside: {
    		'expression': {
    			pattern: /([^\\])(\$(\{.*?\}|[\w\.]*))/,
		    	lookbehind: true,
    			inside: Prism.languages.extend('groovy', {
    				'punctuation': /[{}[\];(),.:$]/g
    			})
    		}
    	}
    }
});
