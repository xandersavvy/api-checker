const username = document.getElementById('username');
const btn = document.getElementById('btn');
const profile = document.getElementById('profile');
let dataArr = ["login","name", "location", "email","company","followers","blog","hireable"];
btn.addEventListener('click', (e) => {
if(username.value !== '') {
githubRequest(username.value);
profile.innerHTML= '';
username.value = "";
}
});

function githubRequest(username) {
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        checkDataValidity(data);
    }).catch(err => {
        console.log(err);
    })
}
function checkDataValidity(data) {

    if(data.message === 'Not Found') {
        profile.innerHTML = `<h1>No user found</h1>`;
        return;
    }
    console.log(data);
    dataArr.forEach(element => {
        data[element] !== null ? profile.innerHTML += `<li>${element}: ${data[element]}</li>` 
            : profile.innerHTML += `<li>${element}: Not Found / Not Public </li>`;
    });
    
}
    