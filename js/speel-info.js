'use strict'

const getSpell = async () => {
    
    const spellId = localStorage.getItem('spell')
    
    try{
        let url = `https://api.potterdb.com/v1/spells/${spellId}`
        const response = await fetch(url)
        let spells = await response.json()
        createSpellCard(spells.data)
    } catch (err) {
        console.error(err)
    }    

}

const createSpellCard = (spell) => {
    
    const boxInfo = document.getElementById('box-info')
    
    boxInfo.replaceChildren('')
    
    document.getElementsByTagName("title")[0].innerText = spell.attributes.name

    const nameLink = document.createElement('a')
    nameLink.href = spell.attributes.wiki
    nameLink.classList.add('title')

    const name = document.createElement('h2')
    name.textContent = spell.attributes.name


    const info = document.createElement('div')
    info.classList.add('info')

    if(spell.attributes.incantation != null){
        const incantation = document.createElement('span')
        incantation.textContent = `Incantation: ${spell.attributes.incantation}`
        info.appendChild(incantation)
    }

    if(spell.attributes.effect != null){
        const effect= document.createElement('span')
        effect.textContent = `Effect: ${spell.attributes.effect}`
        info.appendChild(effect)
    }

    if(spell.attributes.category != null){
        const category = document.createElement('span')
        category.textContent = `Category: ${spell.attributes.category}`
        info.appendChild(category)
    }

    if(spell.attributes.light != null){
        const light = document.createElement('span')
        light.textContent = `Light: ${spell.attributes.light}`
        info.appendChild(light)
    }

    if(spell.attributes.creator != null){
        const creator = document.createElement('span')
        creator.textContent = `Creator: ${spell.attributes.creator}`
        info.appendChild(creator)
    }
            
    nameLink.appendChild(name)
    boxInfo.replaceChildren(nameLink, info)
    
}

getSpell()
