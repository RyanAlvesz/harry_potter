'use strict'

const changeFlag = () =>{

    const house = localStorage.getItem('house')
    const houseFlag = document.getElementById('coat-of-arms')

    if (house == 'gryffindor'){
        houseFlag.setAttribute('src', '../img/houses/gryffindor-flag.svg')
        houseFlag.setAttribute('alt', 'Brasão com um leão em uma fundo vermelho')
    } 
    else if (house == 'slytherin'){
        houseFlag.setAttribute('src', '../img/houses/slytherin-flag.svg')
        houseFlag.setAttribute('alt', 'Brasão com uma cobra em um fundo verde')
    } 
    else if (house == 'ravenclaw'){
        houseFlag.setAttribute('src', '../img/houses/ravenclaw-flag.svg')
        houseFlag.setAttribute('alt', 'Brasão com uma águia em um fundo azul')
    } 
    else if (house == 'hufflepuff'){
        houseFlag.setAttribute('src', '../img/houses/hufflepuff-flag.svg')
        houseFlag.setAttribute('alt', 'Brasão com um texugo em um fundo amarelo')
    } 
    else if (house == 'none'){
        houseFlag.setAttribute('src', '../img/houses/hogwarts-flag.png')
        houseFlag.setAttribute('alt', 'Brasão de Hogwarts')
    } 

}

changeFlag()
