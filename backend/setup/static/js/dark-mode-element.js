const buttonContainer = document.querySelector('ul.navbar-nav.ml-auto')
const darkModeElement = document.createElement('li')
darkModeElement.setAttribute('id', 'darkmode-toggle')
darkModeElement.classList.add('nav-item', 'no-select')
darkModeElement.innerHTML = `
    <span class="nav-link" role="button" title="Enable/disable dark mode">
        ${ darkModeIcons[darkMode] }
    </span>
`
buttonContainer.appendChild(darkModeElement)