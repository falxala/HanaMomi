$(function(){
	var _window = $(window),
		_header = $('.site-header'),
		headpBottom;
	
	_window.on('scroll',function(){		
		headpBottom = $('.headp').height();
		if(_window.scrollTop() > headpBottom){
			_header.addClass('fixed');   
		}
		else{
			_header.removeClass('fixed');   
		}
	});
	
	_window.trigger('scroll');
});