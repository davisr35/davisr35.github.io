


	$(document).ready(function(){ 

		delayedText();

		var timeoutID;
		var timeoutID2;

		function delayedText () {
			timeoutID = window.setTimeout(slowAlert, 2000)
			timeoutID2 = window.setTimeout (Alert2, 4000)
		}

		function slowAlert () {
			console.log('test')
			/* $('.container')html('<p>FOCUS</p>'); */
		}

		function Alert2() {
			console.log(test2);
		}
	

	});
</script>