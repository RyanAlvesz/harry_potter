'use strict'

const searchBar = document.getElementById('input')
let spells

const getSpell = async () => {
    
    try{
        let url = 'https://api.potterdb.com/v1/spells?page[number]=1'
        const response = await fetch(url)
        spells = await response.json()

        let url2 = 'https://api.potterdb.com/v1/spells?page[number]=2'
        const response2 = await fetch(url2)
        let page2 = await response2.json()
        page2.data.forEach(spell => {
            spells.data.push(spell)
        });

        let url3 = 'https://api.potterdb.com/v1/spells?page[number]=3'
        const response3 = await fetch(url3)
        let page3 = await response3.json()
        page3.data.forEach(spell => {
            spells.data.push(spell)
        });

        let url4 = 'https://api.potterdb.com/v1/spells?page[number]=4'
        const response4 = await fetch(url4)
        let page4 = await response4.json()
        page4.data.forEach(spell => {
            spells.data.push(spell)
        });

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
            spell.attributes.slug.toLowerCase().includes(search) ||
            spell.attributes.incantation?.toLowerCase().includes(search) 
        );
    });

    createSpellCard(filteredSpells);

})

getSpell()
