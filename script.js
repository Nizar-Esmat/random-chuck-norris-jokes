let joke = document.getElementById('joke');
let changeJoke = document.getElementById('joke-btn');


let jenrateJoke = ()=>{const xjr = new XMLHttpRequest();


    xjr.open('GET',  'https://api.chucknorris.io/jokes/random')

    xjr.onreadystatechange = function () {
        if (xjr.status === 200 && xjr.readyState ===  4) {
            joke.style.color = "black";
            let data = JSON.parse(xjr.responseText);
            joke.innerText = (data.value)
        }else{
            joke.style.color = "red";
            joke.innerText = ("something went wrong");
        }
    }
    xjr.send();
}



changeJoke.addEventListener('click' , jenrateJoke);
document.addEventListener('DOMContentLoaded', jenrateJoke)