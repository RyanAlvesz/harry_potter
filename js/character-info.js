'use strict'

const getCharacters = async () => {
    
    const characterId = localStorage.getItem('character')

    try{
        let url = `https://hp-api.onrender.com/api/character/${characterId}`
        const response = await fetch(url)
        let character = await response.json()
        createCharacterCard(character[0])
    } catch (err) {
        console.error(err)
    }    

}

const createCharacterCard = (character) => {
    
    let characterHouse, wizardStatus, status
        
    if(character.house != ''){
        characterHouse = character.house.toLowerCase()
    }else if(character.house == ''){
        characterHouse = 'default'
    }

    const boxInfo = document.getElementById('character-info')

    if(character.house.toLowerCase() != 'hufflepuff')
    boxInfo.classList.add(`${characterHouse}-color`)
    else
    boxInfo.style.color = 'var(--hufflepuff-main-color)'

    boxInfo.classList.add(`${characterHouse}-shadow`)
    
    boxInfo.replaceChildren('')
    
    document.getElementsByTagName("title")[0].innerText = character.name

    const characterContainer = document.createElement('div')
    characterContainer.classList.add('character')
    
    const characterDescription = document.createElement('div')
    characterDescription.classList.add('character-description')
    
    const name = document.createElement('h2')
    name.textContent = character.name
    
    const alive = document.createElement('span')
    const wizard = document.createElement('span')

    if(character.image != ''){
        const imgContainer = document.createElement('div')
        imgContainer.classList.add('character-img')
        imgContainer.classList.add(`${characterHouse}-main-border`)
        imgContainer.style.backgroundImage = `url(${character.image})`
        characterContainer.appendChild(imgContainer)
    }
    
    if(character.house != ''){
        const house = document.createElement('span')
        house.textContent = `House: ${character.house}`
        characterDescription.appendChild(house)
    }
    
    if(character.dateOfBirth != null){
        const dateOfBirth = document.createElement('span')
        dateOfBirth.textContent = `Birth: ${character.dateOfBirth.replace('-', '/').replace('-', '/')}`
        characterDescription.appendChild(dateOfBirth)
    }
    
    if(character.actor != ''){
        const actor = document.createElement('span')
        actor.textContent = `Actor: ${character.actor}`
        characterDescription.appendChild(actor)
    }
    
    if(character.patronus != ''){
        const patronus = document.createElement('span')
        patronus.textContent = `Patronus: ${character.patronus}`
        characterDescription.appendChild(patronus)
    }
    
    if(character.wizard == true){
        wizardStatus = 'Yes'
    }else if(character.wizard == false)
        wizardStatus = 'No'
    
    wizard.textContent = `Wizard: ${wizardStatus}`
    characterDescription.appendChild(wizard)

    if(character.alive == true){
        status = 'Alive'
    }else if(character.alive == false)
        status = 'Dead'
    
    alive.textContent = `Status: ${status}`
    characterDescription.appendChild(alive)
    
    characterContainer.appendChild(name)
    boxInfo.replaceChildren(characterContainer, characterDescription)
    
}

getCharacters()