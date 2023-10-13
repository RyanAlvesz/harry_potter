'use strict'

const setHouse = (house) => {

    if(house == 'gryffindor-button')
    localStorage.setItem('house', 'gryffindor')
    else if (house == 'slytherin-button')
    localStorage.setItem('house', 'slytherin')
    else if (house == 'ravenclaw-button')
    localStorage.setItem('house', 'ravenclaw')
    else if (house == 'hufflepuff-button')
    localStorage.setItem('house', 'hufflepuff')
    else if (house == 'none')
    localStorage.setItem('house', 'none')

}

const changeTheme = () =>{

    const house = localStorage.getItem('house')
        
    if (house == 'gryffindor'){
        document.documentElement.style.setProperty('--main-gradient', 'rgba(70,0,0,1) 0%, rgba(174,0,1,1) 100%')
        document.documentElement.style.setProperty('--dark-gradient', 'rgba(89,30,28,1) 0%, rgba(70,24,22,1) 100%')
        document.documentElement.style.setProperty('--main-color', 'rgba(174,0,1,1)')
        document.documentElement.style.setProperty('--second-color', '#EEBA30')
        document.documentElement.style.setProperty('--text-theme-color', '#EEBA30')
    } 
    else if (house == 'slytherin'){
        document.documentElement.style.setProperty('--main-gradient', 'rgba(5,32,28,1) 0%, rgba(8,108,92,1) 100%')
        document.documentElement.style.setProperty('--dark-gradient', 'rgba(2,32,28,1) 0%, rgba(7,49,42,1) 100%')
        document.documentElement.style.setProperty('--main-color', 'rgba(41,97,60,1)')
        document.documentElement.style.setProperty('--second-color', '#FAF8F8')
        document.documentElement.style.setProperty('--text-theme-color', '#FAF8F8')
    } 
    else if (house == 'ravenclaw'){
        document.documentElement.style.setProperty('--main-gradient', 'rgba(7,12,32,1) 0%, rgba(34,47,91,1) 100%')
        document.documentElement.style.setProperty('--dark-gradient', 'rgba(5,10,24,1) 0%, rgba(13,25,63,1) 100%')
        document.documentElement.style.setProperty('--main-color', 'rgba(34,47,91,1)')
        document.documentElement.style.setProperty('--second-color', '#BEBEBE')
        document.documentElement.style.setProperty('--text-theme-color', '#BEBEBE')
    } 
    else if (house == 'hufflepuff'){
        document.documentElement.style.setProperty('--main-gradient', 'rgba(252,181,66,1) 0%, rgba(240,199,94,1) 100%')
        document.documentElement.style.setProperty('--dark-gradient', 'rgba(217,156,59,1) 0%, rgba(199,141,47,1) 100%')
        document.documentElement.style.setProperty('--main-color', 'rgba(199,141,47,1)')
        document.documentElement.style.setProperty('--text-theme-color', 'rgba(240,199,94,1)')
        document.documentElement.style.setProperty('--second-color', '#372E29')
        document.documentElement.style.setProperty('--text-theme-color', 'rgba(240,199,94,1)')
    } 
    else if (house == 'none'){
        document.documentElement.style.setProperty('--main-gradient', 'rgba(93,93,93,1) 0%, rgba(1,1,1,1) 100%')
        document.documentElement.style.setProperty('--dark-gradient', 'rgba(23,9,5,1) 0%, rgba(49,28,23,1) 100%')
        document.documentElement.style.setProperty('--main-color', '#000')
        document.documentElement.style.setProperty('--second-color', '#DBDBDB')
        document.documentElement.style.setProperty('--text-theme-color', '#DBDBDB')
    } 

}

changeTheme()
