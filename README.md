# 🐰 bunny.js

**Author:** KBS  
**Contact:** admin [AT] dtrh [DOT] net  

**bunny.js** is a creative JavaScript project developed to explore the language while combining elements of **digital art** and **hidden messaging**. This script showcases an interactive display of ASCII art alongside an encoded poetic message.

---

## 🎯 Project Purpose

This project was created as a stepping stone into **JavaScript**, aiming to build familiarity with DOM manipulation, asynchronous loading, and visual effects. Additionally, it serves as a form of artistic expression in two distinct ways:

1. **ASCII Art Rendering:** Displaying visual representations through text characters.
2. **Hidden Poetry:** An encoded message is subtly embedded within the art, relating to the theme of the unknown and exploration.

---

## 🚀 How It Works

bunny.js achieves its visual effects and functionality through several key steps:

1. **ASCII Art Loading:**  
   - The script fetches an ASCII art file containing a bordered layout around an ascii art image (in this case, an evil looking bunny).  
   - Within the border, where bunny is drawn, there are empty spaces. These spaces will serve as the canvas for the message.

    ```javascript
    async function renderASCII() {
        const response = await fetch(asciiFile);
        const asciiArt = await response.text();
        asciiContainer.textContent = asciiArt;
    }
    ```

2. **Hidden Message Encoding:**  
   - An encoded string is inserted within the empty spaces of the ASCII art.  
   - The text is dynamically written from the top-left to the bottom-right of the border.  

    ```javascript
    function drawInnerText() {
        asciiContainer.innerHTML = "";
        rows.forEach((row) => { /* Dynamically populate empty spaces */ });
    }
    ```

3. **Initial Full Fade-in Effect:**  
   - All characters, including borders and spaces, fade in completely to ensure visibility.  
   - This effect allows users to initially observe the entire content before it starts with some text effects

    ```javascript
    let opacity = 0;
    const fadeInterval = setInterval(() => {
        opacity += 0.02;
        asciiContainer.style.opacity = opacity;
    }, 50);
    ```

4. **Random Fade-in and Fade-out:**  
   - The hidden message characters undergo periodic fading effects, creating an illusion of movement.  
   - The characters themselves remain fixed, ensuring consistency in placement, while the art (bunny) and border remain static and visible.  

    ```javascript
    function charFlash(base64Elements) {
        setInterval(() => {
            charElement.style.opacity = charElement.style.opacity === "0" ? "1" : "0";
        }, 500);
    }
    ```

5. **Webpage Copy-Paste Compatibility:**  
   - Despite visual fading, the encoded message remains present in the DOM. 
   - Users can copy and paste the encoded text, making it retrievable regardless of visibility.  

---

## 📂 Project Structure

```
├── img/
│   └── ascii/
│       └── rabbit/
│           └── rbt-ne.txt   # ASCII art text file, ne=no encoding.
├── bunny.js                 # Main script
├── index.html                # Webpage to showcase the artwork
└── README.md                 # Documentation
```

---

## 🛠️ Features

- Smooth ASCII art fade-in effect.
- Dynamic encoding placement within the ASCII border.
- Random fading of encoded message characters.
- Responsive scaling for mobile compatibility.
- Simple text-based input for interactive chaos generation.

---

## 🔧 Usage

1. **Include bunny.js in your HTML file:**

    ```html
    <script src="bunny.js"></script>
    ```

2. **Ensure the ASCII art text file is in the expected directory:**  
   Update the `asciiFile` path in `bunny.js` if needed.

3. **Run the HTML file in a browser to view the interactive effect.**

4. **Decode for a pleasant surprise in the form of poetry**

---

## 🕵️ Hidden Message Challenge

To uncover the hidden poetry, pay attention to the **fading patterns** and experiment with **ways to convert this into a readable form**. Read the section below, Configuration, for a dead giveaway ;)

---

## ⚙️ Configuration

Modify the following variables in `bunny.js` to customize the experience:

```javascript
const asciiFile = "img/ascii/rabbit/rbt-ne.txt";  // Path to ASCII art file
const base64String = "QmVuZWF0aCB0aGUgc3VyZmFjZQ=="; // Encoded hidden message
```


---

## 📱 Mobile Support

The script adjusts the ASCII display for smaller screens using basic window size checks. This could certainly be improved, but was outside of the scope:

```javascript
if (window.innerWidth < 600) {
    asciiContainer.style.fontSize = "8px";
}
```

---

## ⚠️ Challenges Faced

Developing bunny.js introduced various challenges:

- Handling precise placement of characters inside ASCII borders.
- Timing the fade effects while ensuring readability.
- Managing cross-browser text rendering inconsistencies.
- Maintaining copy-paste integrity without breaking the art.
- Formatting webpage

---

## 💡 Lessons Learned

Through this project, the following JavaScript concepts were explored:

- Working with the DOM to dynamically update content.
- Asynchronous file fetching and event handling.
- CSS transitions and opacity manipulation.
- Structuring modular and maintainable code.

---

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify it for your own explorations.

---

## 📬 Contact

For questions, suggestions, or just to chat:

- **Website:** [DTRH.net](https://DTRH.net)
- **GitHub:** [DTRHnet](https://github.com/DTRHnet)
- **Email:** admin [AT] dtrh [DOT] net

---

Enjoy the journey **down the rabbit hole!**
```
