import { readLS, setLS } from "./localStorage.js"

// GLOBALS
const darkModeConfigName = 'dark-mode-on'

// DOM elements y event listeners
const $darkModeOnToggle = document.querySelector('#dark-mode-toggle')
$darkModeOnToggle.addEventListener('change', toggleDarkMode )
const updateDarkModeToggle = () => $darkModeOnToggle.checked = darkModeOn

// utils tema oscuro
const getBrowserDarkModePref = () => window.matchMedia("(prefers-color-scheme: dark)").matches 
const switchDarkMode = () => document.documentElement.className = darkModeOn 
                                                                    ? 'dark-theme' 
                                                                    : 'light-theme'
const readDarkModeLS = () => readLS(darkModeConfigName)
const storeDarkModeLS = () => setLS(darkModeConfigName, darkModeOn)

// Si el tema oscuro no está seteado en localStorage, 
// setear modo oscuro según las preferencias del sistema
let darkModeOn = readDarkModeLS() ?? getBrowserDarkModePref()

export function initializeDarkMode() {
    switchDarkMode()
    updateDarkModeToggle()
    storeDarkModeLS() 
}

function toggleDarkMode(event) {
    darkModeOn = !darkModeOn
    updateDarkModeToggle()
    storeDarkModeLS() 
    switchDarkMode()
}


