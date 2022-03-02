date=new Date();hour=date.getHours();theme='light';
function theme_set(i){
	if(i=='dark'){
		document.body.style.background='black';
		document.getElementById('qr').style.background='url(img/tg-dark.png)';
		document.getElementById('qr').style.backgroundSize='cover';
		document.getElementsByTagName('h1')[0].style.color='whitesmoke';
		document.getElementsByTagName('h1')[1].style.color='whitesmoke';
		document.getElementsByTagName('h2')[0].style.color='whitesmoke';
		document.getElementsByTagName('h2')[1].style.color='whitesmoke';
		document.getElementsByClassName('gr')[0].style.color='black';
		document.getElementsByClassName('b')[0].style.color='black';
		theme='dark';
	}else{
		document.body.style.background='whitesmoke';
		document.getElementById('qr').style.background='url(img/tg.png)';
		document.getElementById('qr').style.backgroundSize='cover';
		document.getElementsByTagName('h1')[0].style.color='black';
		document.getElementsByTagName('h1')[1].style.color='black';
		document.getElementsByTagName('h2')[0].style.color='black';
		document.getElementsByTagName('h2')[1].style.color='black';
		document.getElementsByClassName('gr')[0].style.color='whitesmoke';
		document.getElementsByClassName('b')[0].style.color='whitesmoke';
		theme='light';
	}
}if(hour>20||hour<10){theme_set('dark')}
function theme_switch(){if(theme=='dark'){theme_set('light')}else{theme_set('dark')}}
function tg(){document.location.href='https://t.me/ldstd'}