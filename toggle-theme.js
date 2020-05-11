// toggle theme
function toggleTheme() {
    const body = document.querySelector('body');
    const toggle = document.querySelector('input');
    let isLight = body.classList.contains('light-theme');

    toggle.addEventListener('click', () => {
        if(isLight) {
            body.className = body.className.replace('light-theme', 'dark-theme');
            isLight = false;
        } else {
            body.className = body.className.replace('dark-theme', 'light-theme');
            isLight = true;
        }
    });
}

toggleTheme();
