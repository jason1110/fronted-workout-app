const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const userField = document.querySelector('#user-id-field')
userField.value = id

fetch(`http://localhost:3000/users/${id})`)
.then(response => response.json())
.then(user =>{
    const h1 = document.createElement('h1')
    h1.textContent = `Welcome, ${user.username}`
    document.body.append(h1)

    // const ul = document.querySelector('ul')
    // user.spell.forEach(spell => {
    //     const li - document.createElement('li')
    //     li.textContent = spell.name
    //     ul.append(li)
    // })
    // })


    // fetch(`http://localhost:3000/workouts`)
    // .then(response => response.json())
    // .then(spells => {
    //     const form = document.querySelector('form')
    //     form.method = 'POST'
    //     form.action = "http://localhost:3000/programs"

    //     const spellDropdown = document.querySelector('#spells')
    //     spells.forEach(spell => {
    //         const option = document.createElement('option')
    //         option.textContent = spell.name
    //         option.value = spell.id
    //         spellDropdown.append(option)
    //     })
        
    // })