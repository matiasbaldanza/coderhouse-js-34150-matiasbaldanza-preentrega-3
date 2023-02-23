export const readLS = (setting) => JSON.parse(localStorage.getItem(setting)) 

export const setLS  = (setting, value) => 
    localStorage.setItem(setting, JSON.stringify(value))