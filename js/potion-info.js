'use strict'

const getPotion = async () => {
    
    const potionId = localStorage.getItem('potion')
    
    try{
        let url = `https://api.potterdb.com/v1/potions/${potionId}`
        const response = await fetch(url)
        let potions = await response.json()
        createPotionCard(potions.data)
    } catch (err) {
        console.error(err)
    }    

}

const createPotionCard = (potion) => {
    
    const boxInfo = document.getElementById('box-info')
    
    boxInfo.replaceChildren('')
    
    document.getElementsByTagName("title")[0].innerText = potion.attributes.name

    const nameLink = document.createElement('a')
    nameLink.href = potion.attributes.wiki
    nameLink.classList.add('title')

    const name = document.createElement('h2')
    name.textContent = potion.attributes.name

    const info = document.createElement('div')
    info.classList.add('info')
    
    if(potion.attributes.difficulty != null){
        const difficulty = document.createElement('span')
        difficulty.textContent = `Difficulty: ${potion.attributes.difficulty}`
        info.appendChild(difficulty)
    }
    
    if(potion.attributes.characteristics != null){
        const characteristics = document.createElement('span')
        characteristics.textContent = `Characteristics: ${potion.attributes.characteristics}`
        info.appendChild(characteristics)
    }
    
    if(potion.attributes.effect != null){
        const effect= document.createElement('span')
        effect.textContent = `Effect: ${potion.attributes.effect}`
        info.appendChild(effect)
    }
    
    if(potion.attributes.side_effects != null){
        const side_effects = document.createElement('span')
        side_effects.textContent = `Side Effects: ${potion.attributes.side_effects}`
        info.appendChild(side_effects)
    }
    
    if(potion.attributes.ingredients != null){
        const ingredients = document.createElement('span')
        ingredients.textContent = `Ingredients: ${potion.attributes.ingredients}`
        info.appendChild(ingredients)
    }
    
    if(potion.attributes.inventors != null){
        const inventors = document.createElement('span')
        inventors.textContent = `Inventor: ${potion.attributes.inventors}`
        info.appendChild(inventors)
    }
    
    if(potion.attributes.time != null){
        const time = document.createElement('span')
        time.textContent = `Preparation time: ${potion.attributes.time}`
        info.appendChild(time)
    }
    
    nameLink.appendChild(name)
    boxInfo.replaceChildren(nameLink, info)
    
}

getPotion()
