const setColorMode = (mode) => {
    if(mode) {
        document.documentElement.setAttribute('data-force-color-mode', mode)
        window.localStorage.setItem('color-mode', mode)
        document.querySelector('#toggle-darkmode').checked = (mode === 'dark')
    } else { //if no mode is given
        document.documentElement.removeAttribute('color-mode') 
        window.localStorage.removeItem('color-mode')
        document.querySelector('#toggle-darkmode').checked = window.matchMedia('(prefers-color-scheme: dark').mathces
    }
}


document.querySelector('#toggle-darkmode').addEventListener('click', (e) => {
	setColorMode(e.target.checked ? 'dark' : 'light');
});

document.querySelector('#reset').addEventListener('click', (e) => {
	e.preventDefault();
	setColorMode(false);
});

// Keep an eye out for System Light/Dark Mode Changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addListener(() => {
	// Ignore change if there's an override set
	if (document.documentElement.getAttribute('data-force-color-mode')) {
		return;
	}

	// Make sure the checkbox is up-to-date
 	document.querySelector('#toggle-darkmode').checked = mediaQuery.matches;
});
