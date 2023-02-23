// Si el tema no está seteado en localStorage, setear el tema preferido del sistema
let darkModeOn = JSON.parse(localStorage.getItem('dark-mode-on')) 
                        ?? window.matchMedia("(prefers-color-scheme: dark)").matches 

// DOM elements
const $darkModeOnToggle = document.querySelector('#dark-mode-toggle')

// utilities
const updateDarkModeToggle = () => $darkModeOnToggle.checked = darkModeOn
const storeDarkModeLS = () => localStorage.setItem('dark-mode-on', JSON.stringify(darkModeOn))
const switchDarkMode = () => document.documentElement.className = darkModeOn 
                                                                    ? 'dark-theme' 
                                                                    : 'light-theme'

export function initializeDarkMode() {
    switchDarkMode()
    updateDarkModeToggle()
    storeDarkModeLS() 
}

// Event listeners
$darkModeOnToggle.addEventListener('change', toggleDarkMode )

function toggleDarkMode(event) {
    darkModeOn = !darkModeOn
    updateDarkModeToggle()
    storeDarkModeLS() 
    switchDarkMode()
}


