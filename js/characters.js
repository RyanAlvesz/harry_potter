'use strict'

const searchBar = document.getElementById('input')
let characters = []

const getCharacters = async () => {
    
    try{
        let url = 'https://hp-api.onrender.com/api/characters'
        const response = await fetch(url)
        characters = await response.json()
        createCharacterCard(characters)
    } catch (err) {
        console.error(err)
    }    

}

const createCharacterCard = (character) => {
    
    const optionsContainer = document.getElementById('character-container')
    
    optionsContainer.replaceChildren('')

    character.map((character) => {
        
        const button = document.createElement('a')
        const info = document.createElement('div')
        const name = document.createElement('h2')
        
        name.textContent = character.name
        
        optionsContainer.appendChild(button)
        button.appendChild(info)
        info.replaceChildren(name)
        
        let characterHouse
        
        if(character.house != ''){
            const house = document.createElement('span')
            house.classList.add(`character-house`)
            characterHouse = character.house.toLowerCase()
            house.textContent = `House: ${characterHouse}`
            info.appendChild(house)
        }else if(character.house == ''){
            characterHouse = 'default'
        }

        if(character.image != ''){
            const imgContainer = document.createElement('div')
            const img = document.createElement('img')
            imgContainer.classList.add(`character-img`)
            imgContainer.classList.add(`${characterHouse}-second-border`)
            imgContainer.classList.add(`${characterHouse}-second-border`)
            img.src = character.image
            img.alt = character.name
            button.appendChild(imgContainer)
            imgContainer.appendChild(img)

            if(character.name == "Dolores Umbridge"){
                img.classList.add('umbridge')
            }

            if(character.name == "Severus Snape"){
                img.classList.add('snape')
            }

        }
        
        button.href = './character-info.html'
        button.classList.add('character-box')
        button.classList.add(`${characterHouse}-background`)
        button.classList.add(`${characterHouse}-color`)
        button.addEventListener('click', () => {
            localStorage.setItem('character', character.id)
        })
        info.classList.add(`character-info`)
        name.classList.add(`character-name`)

    })
    
}

searchBar.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase()

    const filteredCharacters = characters.filter((character) => {
        return (
            character.name.toLowerCase().includes(search) ||
            character.house.toLowerCase().includes(search)
        );
    });

    createCharacterCard(filteredCharacters);

})

getCharacters()
