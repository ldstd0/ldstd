date = new Date()
hour = date.getHours()
theme = 'light'
function theme_set(i) {
	if (i == 'dark') {
		$('body').css('background','black')
		$('#qr').css('background','url(img/tg-dark.png)')
		$('#qr').css('background-size','cover')
		$('h1').css('color', 'whitesmoke')
		$('h2').css('color', 'whitesmoke')
		$('.gr').css('color','whitesmoke')
		$('h3').css('color','whitesmoke')
		theme='dark'
	}else{
		$('body').css('background','whitesmoke')
		$('#qr').css('background','url(img/tg.png)')
		$('#qr').css('background-size','cover')
		$('h1').css('color', 'black')
		$('h2').css('color', 'black')
		$('.gr').css('color','whitesmoke')
		$('#l').css('color', 'whitesmoke')
		$('h3').css('color','whitesmoke')
		theme='light'
	}
}if(hour>20||hour<10){theme_set('dark')}
function theme_switch(){if(theme=='dark'){theme_set('light')}else{theme_set('dark')}}
function tg(){document.location.href='https://t.me/ldstd'}
function gh(){document.location.href='https://github.com/ldstd0/notty'}