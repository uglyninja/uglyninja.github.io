var cookies = 0;
function clickCookie(xamount) {
	cookies = Number(cookies) + xamount;
	document.getElementById('cookiecount').textContent = cookies;
}