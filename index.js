const baseURL = 'http://localhost:7000'
const workoutURL = `${baseURL}/workouts`
const userURL = `${baseURL}/users`


fetch(workoutURL)
.then(response => response.json())
.then(workouts => {
    const body = document.body
    const workoutCards = document.querySelector('.workout-card')
    workouts.forEach(workout => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<a href="workout.html?workout_id=${workout.id}">${workout.name}</a>`
    workoutCards.append(h2)
    // const h3= document.createElement('h3')   
    // h3.innerHTML = `<a href="user.html?id=${user.id}">'user-name'</a>`
    // body.append(h2)
    })
})