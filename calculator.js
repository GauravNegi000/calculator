	function press(n) {
		document.forms['calc']['result'].value += n;
	}

	function clearscreen() {
		document.forms['calc']['result'].value = '';
	}

	function back() {

		document.forms['calc']['result'].value = document.forms['calc']['result'].value.substring(0,document.forms['calc']['result'].value.length -1);
	}

	function calculate() {
		try {
				document.forms['calc']['result'].value = eval(document.forms['calc']['result'].value)

		}
		catch(e) {
			document.forms['calc']['result'].value = 'Syntax Error';
		}
	}
	function square() {
		document.forms['calc']['result'].value = Math.pow(document.forms['calc']['result'].value, 2);
	}
	function cube() {
		document.forms['calc']['result'].value = Math.pow(document.forms['calc']['result'].value, 3);
	}
	function sqrt() {
		document.forms['calc']['result'].value = Math.sqrt(document.forms['calc']['result'].value);
	}
	function sin() {
		document.forms['calc']['result'].value = Math.sin(document.forms['calc']['result'].value);
	}
	function cos() {
		document.forms['calc']['result'].value = Math.cos(document.forms['calc']['result'].value);
	}
	function tan() {
		document.forms['calc']['result'].value = Math.tan(document.forms['calc']['result'].value);
	}
	function log() {
		document.forms['calc']['result'].value = Math.log(document.forms['calc']['result'].value);
	}