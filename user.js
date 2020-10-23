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
        const userProgram = document.querySelector('#user-program')
        const usernameLine = document.querySelector('#username')
        const goalLine = document.querySelector('#goal')
        const h1 = document.createElement('h1')
        const username = document.createElement('h1')
        const goal = document.createElement('h3')
        h1.textContent = `Welcome, ${user.name}`
        username.textContent = user.username
        goal.textContent = user.goal
        welcome.append(h1)
        usernameLine.appendChild(username)
        goalLine.appendChild(goal)
        const programContainer = document.querySelector('#program-container')
        user.workouts.forEach(workout => {
            const programList = document.createElement('li')
            programList.id =('program-list-id')
            programList.innerHTML = `<a href="workout.html?workout_id=${workout.id}">${workout.name}</a>`
            programContainer.append(programList)

        })  
    })
    fetch(workoutURL)
        .then(response => response.json())
        .then(workouts => {
            const workoutContainer = document.querySelector('.workout-container')
            workouts.forEach(workout => {
                console.log(workout)
                const workoutCards = document.createElement('div')
                const workoutName = document.createElement('h2')
                const addWorkout = document.createElement('form')
                const workoutImage = document.createElement('img')

                workoutCards.classList.add("workout-card")
                workoutImage.id ='image-id'
        
                addWorkout.method = 'POST'
                addWorkout.action = 'http://localhost:7000/programs'
                addWorkout.id = 'add-workout'
                workoutImage.src = workout.image
                //workoutImage.innerHTML = `<a href="workout.html?workout_id=${workout.id}"><img src="${workout.image}"></a>` 
                workoutName.innerHTML = `<a href="workout.html?workout_id=${workout.id}">${workout.name}</a>` 

                const workoutIdInput = document.createElement('input')
                const submitWorkout = document.createElement('input')
                const userIdInput = document.createElement('input')
                submitWorkout.id= 'add-workout'
                submitWorkout.value = "Add to Workout"
                submitWorkout.type = 'submit'

                workoutIdInput.type = 'hidden'
                workoutIdInput.value = workout.id
                userIdInput.type = 'hidden'
                userIdInput.value = id
                workoutIdInput.name = 'workout_id'
                userIdInput.name = 'user_id'
                workoutCards.append(workoutName, workoutImage, addWorkout)
                workoutContainer.append(workoutCards)
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