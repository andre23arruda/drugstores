const darkModeToggle = document.querySelector('#darkmode-toggle')
darkModeToggle.addEventListener('click', () => {
    const darkMode = !getDarkMode()
    applyDarkMode(darkMode)
    changeIcon(darkMode)
    setDarkMode()
})

changeIcon(darkMode)