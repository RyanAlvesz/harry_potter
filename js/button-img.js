'use strict'

const changeImg = () =>{

    const house = localStorage.getItem('house')
    const mainImg = document.getElementById('character-img')

    if (house == 'gryffindor'){
        mainImg.setAttribute('src', '../img/characters/character-gryffindor.png')
        mainImg.setAttribute('alt', 'Menino moreno com óculos e uma cicatriz em forma de raio na testa')
    } 
    else if (house == 'slytherin'){
        mainImg.setAttribute('src', '../img/characters/character-slytherin.png')
        mainImg.setAttribute('alt', 'Menino loiro de olhos verdes e terno')
    } 
    else if (house == 'ravenclaw'){
        mainImg.setAttribute('src', '../img/characters/character-ravenclaw.png')
        mainImg.setAttribute('alt', 'Menina loira com olhar curioso e vestes azuis')
    } 
    else if (house == 'hufflepuff'){
        mainImg.setAttribute('src', '../img/characters/character-hufflepuff.png')
        mainImg.setAttribute('alt', 'Menino branco  com cabelo castanho claro e vestes amarelas')
    } 
    else if (house == 'none'){
        mainImg.setAttribute('src', '../img/characters/character-gryffindor.png')
        mainImg.setAttribute('alt', 'Menino moreno com óculos e uma cicatriz em forma de raio na testa')
    } 

}

changeImg()
