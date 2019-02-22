window.addEventListener('DOMContentLoaded', function() {
	if(document.URL.match("/abouts"|"/gallery")) {
		var targetTop = $('#target_point').offset().top;
		$('html,body').scrollTop(targetTop + 1);
	}
});