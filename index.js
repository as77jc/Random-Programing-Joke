const setupDiv = document.getElementById('setup');
const punchlinDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let punchline = '';
setupDiv.innerHTML = 'Ready to read a jock ...'


async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();
    
         if (jokePromise.ok) {
            newJokeBtn.style.display = 'none';
            punchlineBtn.style.display = 'block';
            
            punchlinDiv.classList.remove('bubble')
            punchline = ''
            punchlinDiv.innerHTML = punchline;
            
            setupDiv.innerHTML = joke[0].setup;
            punchline = joke[0].punchline;
            
         } else {
             setupDiv.innerHTML = `Eroor code: ${jokePromise.status}, please try again...`;
         }
}

function punchLine () {
    punchlineBtn.style.display = 'none';
    newJokeBtn.style.display = 'block';
    
    punchlinDiv.classList.add('bubble')
    punchlinDiv.innerHTML = punchline;
}

newJokeBtn.addEventListener('click', getJoke);
punchlineBtn.addEventListener('click', punchLine);
