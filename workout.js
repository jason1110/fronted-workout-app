const searchParams = new URLSearchParams(window.location.search);
const workout_id = searchParams.get('workout_id');
const workoutURL = `http://localhost:7000/workouts/${workout_id}`

fetch(workoutURL)
.then(response => response.json())
.then(workout =>{ console.log(workout)
    const panel = document.querySelector('#video-panel')
    const infoCard = document.querySelector('#info-card')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const video = document.createElement('iframe')
    h2.innerText = workout.name
    p.innerText = workout.description
    video.setAttribute('src', workout.video)
    video.setAttribute('width', '590')
    video.setAttribute('height', '400')
    video.setAttribute('controls', 'controls')
    infoCard.append(h2, p)
    panel.append(video)
})



 /* <iframe width="1361" height="597" src="https://www.youtube.com/embed/dDI8ClxRS04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */