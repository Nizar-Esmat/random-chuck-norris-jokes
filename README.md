# Random Chuck Norris Jokes

This repository contains a simple project that fetches a random Chuck Norris joke from the [Chuck Norris API](https://api.chucknorris.io/). It's a basic example for learning how to work with APIs using JavaScript.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/random-chuck-norris-jokes.git
    ```

2. Navigate to the project directory:

    ```bash
    cd random-chuck-norris-jokes
    ```

3. (Optional) If you want to set up a development server, you can use a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or any other server setup of your choice.

## Usage

1. Open `index.html` in your browser.
2. Click the "Get Joke" button to fetch a random Chuck Norris joke from the API.
3. The joke will be displayed on the screen.

Alternatively, you can run the project locally using a simple HTTP server (such as Live Server for VS Code).

## Technologies

- JavaScript (ES6)
- HTML5
- CSS3
- Fetch API for handling the request to the Chuck Norris API

## Features

- Fetch a random Chuck Norris joke from the API: [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random).
- Display the joke on the screen.
- Learn how to handle API requests and responses using the Fetch API in JavaScript.

## Example Code

```javascript
async function fetchJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log(data.value); // Logs the joke to the console
        document.getElementById('joke').innerText = data.value; // Displays the joke in the webpage
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}
