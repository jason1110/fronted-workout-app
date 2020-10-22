const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id') || window.localStorage.getItem('userId')
const search_term = searchParams.get("search_term")
const baseURL = 'http://localhost:7000'
let userPageURL =(`http://localhost:7000/users/${id})`)
let workoutURL = `${baseURL}/workouts`
const userURL = `${baseURL}/users`
const searchForm = document.querySelector('#search-form')
if(search_term) {
    workoutURL = `${workoutURL}?search_term=${search_term}`
}
if(id){
    window.localStorage.setItem('userId', `${id}`)
    searchForm.action = `http://localhost:3000/user.html?id=${id}`
}

    fetch(userPageURL)
    .then(response => response.json())
    .then(user =>{
        const welcome = document.querySelector('#welcome')
        const h1 = document.createElement('h1')
        h1.textContent = `Welcome, ${user.username}`
        welcome.append(h1)
        
        const programContainer = document.querySelector('#program-container')
        user.workout.forEach(workouts => {
        const li = document.createElement('li')
        li.textContent = workouts.name
        programContainer.append(li)
        })
    })

    fetch(workoutURL)
    .then(response => response.json())
    .then(workouts => {
        const workoutCards = document.querySelector('.workout-card')
        workouts.forEach(workout => {
        const h2 = document.createElement('h2')
        h2.innerHTML = `<a href="workout.html?workout_id=${workout.id}">${workout.name}</a>`
        workoutCards.append(h2)
        })
    })
    
    
    fetch(workoutURL)
    .then(response => response.json())
    .then(workouts => {
        const $workoutSelectType = document.getElementById('workout-search')
        workouts.forEach(workout => {
            const $workoutDropDown = document.createElement('option')
            $workoutDropDown.innerText = workout.kind
            $workoutDropDown.value = `${workout.kind}`
            $workoutSelectType.append($workoutDropDown)
        })
    })
    
     //delete   