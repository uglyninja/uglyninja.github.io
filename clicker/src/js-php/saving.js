function save() {
	localStorage.setItem('cookies',cookies);
};
function load() {
	cookies = localStorage.getItem('cookies') - 1;
	clickCookie(1);
};
function reset() {
	if (confirm('Do you really want to do this?')) {
		cookies = -1;
		localStorage.setItem('cookies','0');
		clickCookie(1);
	} else {};
};