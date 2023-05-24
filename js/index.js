const data = require('./data.js')
const canvas = document.getElementById('canvas')

data.forEach((data) => {
    canvas.innerHTML += `
    <img src="./img/${data.image}" alt="Avatar" style="width:100%">
        <div class="container" >
        <h4>${data.title}, ${data.date}</h4>
        <p>${data.content}</p>
    </div>
    `
});