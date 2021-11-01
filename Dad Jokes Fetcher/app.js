const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();


function generateJoke(){

    const config = {
        headers:{
            'Accept':'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }
    fetch("https://icanhazdadjoke.com",config).then(res=>res.json()).then(data=>joke.innerText=data.joke);
}

jokeBtn.addEventListener('click',generateJoke);