const baseURL = 'http://localhost:7000'
const workoutURL = `${baseURL}/workouts`
const userURL = `${baseURL}/users`


fetch(baseURL)
.then(parseJSON)
.then(workouts => {
    const body = document.body
    workouts.forEach(workout => {
    const h2 = document.createElement('h2')
    h2.innerText = workout.name
    body.append(h2)
    const h3= document.createElement('h3')   
    h2.innerHTML = `<a href="user.html?id=${user.id}">'user-name'</a>`
    body.append(h2)
    })
})

function parseJSON(response){
    response.json
}