const searchParams = new URLSearchParams(window.location.search);
const workout_id = searchParams.get('workout_id');
const workoutURL = `http://localhost:7000/workouts/${workout_id}`

fetch(workoutURL)
.then(response => response.json())
.then(workout =>{
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    // const video = document.createElement('video')
    h2.innerText = workout.name
    p.innerText = workout.description
    // video.src = `${workout.video}`
    document.body.append(h2, p)
})