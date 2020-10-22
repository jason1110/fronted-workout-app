const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id') || window.localStorage.getItem('userId')
const search_term = searchParams.get("search_term")
const baseURL = 'http://localhost:7000'
let userPageURL =(`http://localhost:7000/users/${id})`)
let workoutURL = `${baseURL}/workouts`
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
        h1.textContent = `Welcome, ${user.name}`
        welcome.append(h1)
        const programContainer = document.querySelector('#program-container')
        user.workouts.forEach(workout => {
        const li = document.createElement('li')
        li.innerHTML = `<a href="workout.html?workout_id=${workout.id}">${workout.name}</a>`
        programContainer.append(li)
        })  
    })
    fetch(workoutURL)
        .then(response => response.json())
        .then(workouts => {
            const workoutCards = document.querySelector('.workout-card')
            workouts.forEach(workout => {
                console.log(workout)
                const workoutName = document.createElement('h2')
                const addWorkout = document.createElement('form')
                const workoutImage = document.createElement('img')
                addWorkout.method = 'POST'
                addWorkout.action = 'http://localhost:7000/programs'
                addWorkout.id = 'add-workout'
                workoutImage.src = workout.image
                // workoutImage.innerHTML = `<a href="workout.html?workout_id=${workout.id}"><img src='${workout.image}'></a>`
                workoutName.innerHTML = `<a href="workout.html?workout_id=${workout.id}">${workout.name}</a>` 
                console.log(workout.image)
                const workoutIdInput = document.createElement('input')
                const submitWorkout = document.createElement('input')
                const userIdInput = document.createElement('input')
                submitWorkout.value = "Add Workout"
                submitWorkout.type = 'submit'
                workoutIdInput.type = 'hidden'
                workoutIdInput.value = workout.id
                userIdInput.type = 'hidden'
                userIdInput.value = id
                workoutIdInput.name = 'workout_id'
                userIdInput.name = 'user_id'
                workoutCards.append(workoutName, workoutImage, addWorkout)
                addWorkout.append(workoutIdInput, userIdInput, submitWorkout)
            })
        })
    fetch(workoutURL)
    .then(response => response.json())
    .then(workouts => {
        console.log(workouts)
        const uniqueArr = [...new Set(workouts.map(workout => workout.kind))]
        console.log(uniqueArr)
        uniqueArr.forEach(workout => {
            console.log(uniqueArr)
            const $workoutSelectType = document.getElementById('workout-search')
            const $workoutDropDown = document.createElement('option')
            $workoutDropDown.innerText = workout
            $workoutDropDown.value = (workout)
            $workoutSelectType.append($workoutDropDown)
        })
    })

    function goBack() {
        window.history.back()
    }