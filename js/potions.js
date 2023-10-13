'use strict'

const searchBar = document.getElementById('input')
let potions = []

const getPotion = async () => {
    
    try{
        let url = 'https://api.potterdb.com/v1/potions'
        const response = await fetch(url)
        potions = await response.json()
        createPotionCard(potions.data)
    } catch (err) {
        console.error(err)
    }    

}

const createPotionCard = (potion) => {
    
    const optionsContainer = document.getElementById('options-container')
    
    optionsContainer.replaceChildren('')

    potion.map((potion) => {

        const button = document.createElement('a')
        const name = document.createElement('h2')
        const effect = document.createElement('span')
        
        button.href = './potion-info.html'
        button.classList.add('option')
        button.addEventListener('click', () => {
            localStorage.setItem('potion', potion.id)
        })
        
        name.classList.add('title')
        name.textContent = potion.attributes.name
        
        effect.classList.add('description')
        effect.textContent = potion.attributes.effect
        
        optionsContainer.appendChild(button)
        button.replaceChildren(name, effect)
    })
    
}

searchBar.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase()

    const filteredPotions = potions.data.filter((potion) => {
        return (
            potion.attributes.name.toLowerCase().includes(search) ||
            potion.attributes.slug.toLowerCase().includes(search)
        );
    });

    createPotionCard(filteredPotions);

})

getPotion()
