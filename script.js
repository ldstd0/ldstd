switched=false
$(document).ready(function(){
$('#logo').click(function(){
	if(!switched) {
		switched=true
		$('body').css('background','black');
		$('.gr-bg').css('color','black');
		$('#logo').css('color','black');
		$('.article').css('color','whitesmoke');
		$('.description').css('color','whitesmoke');
		$('.link').css('color','whitesmoke');
		$('.arrow').css('color','whitesmoke');
		$('#author').css('color','whitesmoke');
		$('a').css('color','whitesmoke');
	} else {
		switched=false
		$('body').css('background','white');
		$('.gr-bg').css('color','white');
		$('#logo').css('color','white');
		$('.article').css('color','black');
		$('.description').css('color','black');
		$('.link').css('color','black');
		$('.arrow').css('color','black');
		$('#author').css('color','black');
		$('a').css('color','black	');
	}

})})