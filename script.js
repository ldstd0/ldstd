date=new Date();hour=date.getHours();theme='light';
function theme_set(i){
	if(i=='dark'){
		$('body').css('background','black');
		$('#qr').css('background','url(img/tg-dark.png)');
		$('#qr').css('background-size','cover');
		$('h1,h2,h3,p,a').css('color','whitesmoke');
		$('.gr,.b').css('color','black');
		theme='dark';
	}else{
		$('body').css('background','whitesmoke');
		$('#qr').css('background','url(img/tg.png)');
		$('#qr').css('background-size','cover');
		$('h1,h2,h3,p,a').css('color','black');
		$('.gr,.b').css('color','whitesmoke');
		theme='light';
	}
}if(hour>20||hour<10){theme_set('dark')}
function theme_switch(){if(theme=='dark'){theme_set('light')}else{theme_set('dark')}}