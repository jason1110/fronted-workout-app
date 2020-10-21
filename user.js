const searchParams = new URLSearchParams(window.location.search)
const quearyParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const search_term = quearyParams.get("search_term")
const baseURL = 'http://localhost:7000'
let userPageURL =(`http://localhost:7000/users/${id})`)
let workoutURL = `${baseURL}/workouts`
const userURL = `${baseURL}/users`

if(search_term) {
    userPageURL = `${userPageURL}?search_term=${search_term}`
}

fetch(userPageURL)
.then(response => response.json())
.then(user =>{
    const h1 = document.querySelector('#welcome')
    h1.textContent = `Welcome, ${user.username}`
    document.body.append(h1)

    })

    
    fetch(workoutURL)
    .then(response => response.json())
    .then(workouts => {
        const body = document.body
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
        workouts.forEach(workout => {
            const $workoutSelectType = document.getElementById('workout-search')
            const $workoutDropDown = document.createElement('option')
            $workoutDropDown.innerText = workout.kind
            $workoutDropDown.value = `${workout.kind}`
            $workoutSelectType.append($workoutDropDown)
        })
    })
    
        