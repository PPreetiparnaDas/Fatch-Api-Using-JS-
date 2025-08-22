# 😂 Random Joke Generator (Fetch API Project)

This is a simple **JavaScript project** that demonstrates how to use the **Fetch API** to get data from an external API and display it on a webpage.

## 🚀 Features
- Fetches random jokes from [Official Joke API](https://official-joke-api.appspot.com/)
- Displays a new joke each time you click the button
- Simple and responsive UI

## 📂 Project Structure
fetch-jokes/
│── index.html # Main HTML file
│── style.css # Styling (optional)
│── script.js # JavaScript logic (Fetch API)

pgsql
Copy
Edit

## 🛠️ How to Run
1. Download or clone this repository
2. Open `index.html` in your browser
3. Click the **"Get New Joke"** button to see a new joke

## 📝 Code Overview
The core logic is inside `script.js`:

```javascript
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      jokeEl.textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      jokeEl.textContent = "Oops! Something went wrong.";
      console.error(error);
    });
}
Uses Fetch API to get JSON data

Updates the DOM dynamically

Handles errors gracefully

📊 Output
Default: shows "Click the button to load a joke!"

After clicking: displays a random joke

Example:

pgsql
Copy
Edit
Why don’t skeletons ever go trick or treating? - Because they have no body to go with.
📦 Technologies Used
HTML

CSS

JavaScript (Fetch API)
