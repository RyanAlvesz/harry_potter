'use strict'

const searchBar = document.getElementById('input')
let spells = []

const getSpell = async () => {
    
    try{
        let url = 'https://api.potterdb.com/v1/spells'
        const response = await fetch(url)
        spells = await response.json()
        createSpellCard(spells.data)
    } catch (err) {
        console.error(err)
    }    

}

const createSpellCard = (spell) => {
    
    const optionsContainer = document.getElementById('options-container')
    
    optionsContainer.replaceChildren('')

    spell.map((spell) => {

        const button = document.createElement('a')
        const name = document.createElement('h2')
        const effect = document.createElement('span')
        
        button.href = './spell-info.html'
        button.classList.add('option')
        button.addEventListener('click', () => {
            localStorage.setItem('spell', spell.id)
        })
        
        name.classList.add('title')
        name.textContent = spell.attributes.name
        
        effect.classList.add('description')
        effect.textContent = spell.attributes.effect
        
        optionsContainer.appendChild(button)
        button.replaceChildren(name, effect)
    })
    
}

searchBar.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase()

    const filteredSpells = spells.data.filter((spell) => {
        return (
            spell.attributes.name.toLowerCase().includes(search) ||
            spell.attributes.slug.toLowerCase().includes(search)
        );
    });

    createSpellCard(filteredSpells);

})

getSpell()
