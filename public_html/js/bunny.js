// Bunny.js
//
// Author - KBS
// admin [AT] dtrh [DOT] net



// [ Ascii Container ]
// 
// This is being declared here for good reason. I want the header drawn above the ascii container, and the best
// way to do this is in reference to the ascii container. It may seem a bit illogical, but given the ascii container
// is the main focus of the page, drawing it and working with it as a reference ensures the page can be dynamically
// resized and drawing will not be affected.
//
// TODO : Obfuscation or encoding of base64 string data as seen in script source
//        Obfuscation of file paths
//
const asciiContainer = document.getElementById("ascii");
const asciiFile = "img/ascii/rabbit/rbt-ne.txt";
const base64String = "QmVuZWF0aCB0aGUgc3VyZmFjZSwKYSByYWJiaXQgY2FydmVzIGl0cyBob21lLgpUaGUgdHVubmVscyB0d2lzdCB3aXRob3V0IHJlYXNvbiwKYnV0IHRoZSBwdXJwb3NlIGlzIGNsZWFyOgpwcm90ZWN0aW9uLCBlc2NhcGUsCmEgcXVpZXQgcGxhY2UgdG8gYnJlYXRoZS4KV2hhdCBsb29rcyBsaWtlIGNoYW9zIGFib3ZlCmlzIG9yZGVyIGJlbG93LAplYWNoIGNoYW1iZXIgYSBjaG9pY2UsCmVhY2ggcGF0aCBhIHN0b3J5IHVudG9sZC4KCkFib3ZlIHRoZSBzdXJmYWNlLCB0aGUgc3RhcnMgZm9sZCB0aW1lLgpQYXJ0aWNsZXMgdG91Y2ggYWNyb3NzIGltcG9zc2libGUgZGlzdGFuY2VzLAphcyB0aG91Z2ggc3BhY2UgbmV2ZXIgbWF0dGVyZWQuCk9uZSB0dXJucywgdGhlIG90aGVyIGtub3dzLgpFbnRhbmdsZW1lbnQsIHRoZXkgY2FsbCBpdOKAlAphIHdvcmQgZm9yIHNvbWV0aGluZyB3ZeKAmWxsIG5ldmVyIGZ1bGx5IGdyYXNwLgpNYXliZSBpdOKAmXMgYSB0aHJlYWQsCm1heWJlIGl04oCZcyBhIHR1bm5lbCwKbWF5YmUgaXTigJlzIGp1c3QgdGhlIHdheSB0aGUgdW5pdmVyc2Ugd2hpc3BlcnMKdG8gaXRzZWxmLgoKVGhlIGZvcmVzdCBrbm93cyB0aGlzIGxhbmd1YWdlLCB0b28uCkJlbmVhdGggaXRzIHJvb3RzLCBhIG5ldHdvcmsgaHVtcy4KTXljZWxpdW0gd2VhdmVzIHRoZSBkZWFkIGludG8gdGhlIGxpdmluZywKY2FycmllcyB3YXJuaW5ncyBmcm9tIHRyZWUgdG8gdHJlZS4KQSBtb3RoZXIgb2FrIGZlZWRzIGhlciBzYXBsaW5ncwp0aHJvdWdoIGludmlzaWJsZSB2ZWlucywKd2hpbGUgYSBmYWxsZW4gZ2lhbnQgY3J1bWJsZXMKaW50byBub3VyaXNobWVudCBmb3IgdGhlIHdob2xlLgpUaGUgZm9yZXN0IGlzIG5vdCB0cmVlczsKaXQgaXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlbS4KCkFuZCBzbyBhcmUgd2UuCkJlbmVhdGggdGhvdWdodCwKYmVuZWF0aCB0aGUgc3VyZmFjZSBvZiBhd2FyZW5lc3MsCm91ciBtaW5kcyB0d2lzdCBpbnRvIHR1bm5lbHMuCk1lbW9yaWVzIGNvbm5lY3Qgd2hlcmUgdGhleSBzaG91bGRu4oCZdC4KRHJlYW1zIGdyb3cgb3V0IG9mIGZvcmdvdHRlbiBzb2lsLgpXZSB0aGluayB3ZSBhcmUgYWxvbmUsCmJ1dCB0aGUgc3ViY29uc2Npb3VzIHRlbGxzIGEgZGlmZmVyZW50IHN0b3J5LgpXZSBhcmUgd2VicywKZW50YW5nbGVkLApidXJpZWQgaW4gY29ubmVjdGlvbnMgd2XigJlsbCBuZXZlciBmdWxseSBzZWUuCgpBIHJhYmJpdCBidXJyb3cuCkEgcXVhbnR1bSB0aHJlYWQuCkEgZnVuZ2FsIHdlYi4KQSBoaWRkZW4gdGhvdWdodC4KCkVhY2ggb25lIGEgcmFiYml0IGhvbGUsCmxlYWRpbmcgc29tZXdoZXJlIHdlIGNhbm5vdCBuYW1lLgpOb3QgY2hhb3MsCmJ1dCBzdHJ1Y3R1cmUKd2XigJlyZSB0b28gY2xvc2UgdG8gdW5kZXJzdGFuZC4KVGhlIGRlZXBlciB5b3UgZ28sCnRoZSBtb3JlIGl0IGhvbGRzLgpUaGUgZGVlcGVyIHlvdSBnbywKdGhlIG1vcmUgaXQgZnJlZXMu"; // this could be hidden better

// [ Header ]
//
const headerContainer = document.createElement("div");
headerContainer.style.textAlign = "center";
headerContainer.style.marginBottom = "20px";
headerContainer.style.fontFamily = "monospace";
headerContainer.style.color = "white";

const poeticMessage = document.createElement("p");
poeticMessage.textContent = "";
poeticMessage.style.fontSize = "16px";
poeticMessage.style.margin = "10px 0";

const emailMessage = document.createElement("p");
emailMessage.textContent = "";
emailMessage.style.fontSize = "14px";
emailMessage.style.opacity = 0.8;
emailMessage.style.margin = "10px 0";

headerContainer.appendChild(poeticMessage);
headerContainer.appendChild(emailMessage);
asciiContainer.parentElement.insertBefore(headerContainer, asciiContainer); // Add header directly above ASCII art


// [ renderASCII ] - Fetch a text file, render it on page with a fade in effect
//
// NOTE - Tab spaces and the like will mess up display, and this script doesnt do any cleaning so the
//        input file needs to be manually cleaned up, or it will display wonky

// Fetch and display ASCII art with fade-in effect
// Fetch and display ASCII art with fade-in effect
async function renderASCII() {
    const response = await fetch(asciiFile);
    const asciiArt = await response.text();

    asciiContainer.style.opacity = 0; // Start hidden
    asciiContainer.textContent = asciiArt; // Use textContent to ensure proper row handling

    // Fade in
    let opacity = 0;
    const fadeInterval = setInterval(() => {
        opacity += 0.02;
        asciiContainer.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeInterval);
    }, 50);
}

// Helper function to flash random Base64 characters
function charFlash(base64Elements) {
    setInterval(() => {
        base64Elements.forEach((charElement) => {
            if (Math.random() > 0.8) {               // Randomly select a subset
                charElement.style.color = "#4d4d4d"; // Set to a visible dark grey
                charElement.style.opacity = charElement.style.opacity === "0" ? "1" : "0";
                charElement.style.transition = "opacity 0.5s ease, color 0.5s ease"; // Smooth fade in/out
            }
        });
    }, 500); // Run every 500ms
}

// Helper function to hide all Base64 characters
function charHide(base64Elements) {
    base64Elements.forEach((charElement) => {
        charElement.style.opacity = "0"; // Make all characters invisible
    });
}

// [ drawInnerText ] - Dynamically type Base64 text in empty spaces without decoding
//
// Cause why decode it? This is the rabbit hole. This functionally started as a strictly
// base4 related function and over time is essentially one which will find all the empty
// spaces within the ascii art box and replace them character by character with a string.
// Of course, its a bit more involved, but thats the idea.

function drawInnerText() {
    const asciiText = asciiContainer.textContent;
    const rows = asciiText.split("\n");
    const base64Chars = base64String.split("");            // Use raw Base64 string characters
    let charIndex = 0;
    const base64Elements = [];

    // Clear container and create a row-by-row structure for precise element handling
    asciiContainer.innerHTML = "";
    rows.forEach((row, rowIndex) => {
        const rowElement = document.createElement("div");
        rowElement.style.display = "flex";
        rowElement.style.fontFamily = "monospace";         // Ensure consistent spacing
        asciiContainer.appendChild(rowElement);

        row.split("").forEach((char, colIndex) => {
            const charElement = document.createElement("span");
            charElement.textContent = char;
            charElement.style.color = "white";             // ASCII art characters in white
            rowElement.appendChild(charElement);

            if (char === " " && charIndex < base64Chars.length) {      // Empty space and base64 chars remaining
                setTimeout(() => {
                    charElement.textContent = base64Chars[charIndex];  // Correctly assign the character
                    charElement.style.color = "black";                 // Start base64 characters in black

                    // Simulate typing effect
                    // TODO : Functionally, this works, but its not even close to as I imagined it
                    //        Fix left to right top to bottom char by char typing effect.
                    let innerOpacity = 0;
                    charElement.style.opacity = 0; // Ensure it's visible only when typed
                    const typingInterval = setInterval(() => {
                        innerOpacity += 0.1;
                        charElement.style.opacity = innerOpacity;
                        charElement.style.color = "darkgray";           // Transition to dark gray while typing
                        if (innerOpacity >= 1) clearInterval(typingInterval);
                    }, 50);

                    setTimeout(() => {
                        charElement.style.color = "black"; // Turn to black after all are drawn
                    }, 2000);                              // Wait until all characters are drawn

                    base64Elements.push(charElement);      // Collect the element for random flashing

                    charIndex++;
                }, charIndex * 250);                       // Typing delay per character set to 0.25s
            }
        });
    });

    // Begin fun and confusion. These functions here are added so those who miss the initial flash of characters
    // can put it together and realize, THERE IS A HIDDEN MESSAGE AMONGST THESE DANCING CHARACTERS
    //
    setTimeout(() => charFlash(base64Elements), 3000); // Start flashing after initial draw
    setInterval(() => charHide(base64Elements), 10000); // Hide all every 10 seconds for 5 seconds
}

// [ debugFunctions ]
//
function debugFunctions() {
    console.log("ASCII Container:", asciiContainer);
    console.log("Base64 String:", base64String);
    console.log("ASCII Content:", asciiContainer.textContent);
}

// [ fixMobile ] - Rudimentary implementation of mobile device checking based on window size.
//
// TODO : This could be done so much better with proper header checking.
//
function fixMobile() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < 600) {
        asciiContainer.style.fontSize = "8px"; // Smaller font for smaller screens
    } else {
        asciiContainer.style.fontSize = "14px"; // Default font size for desktop
    }
}

// [ Go time! ]
//
window.onload = async () => {
    await renderASCII();       // Step 1: Fade-in ASCII
    setTimeout(() => {
        drawInnerText();       // Step 2: Apply Base64 text typing effect
    }, 2000);                  // Delay to ensure fade-in completes

    fixMobile();               // Step 3: Adjust for mobile
};

function validateInput() {
    const secretInput = document.getElementById('secretInput').value;

    if (secretInput === 'open sesame') {
        // Simulate session cookie setup and redirection for demo purposes
        document.cookie = `session_token=${btoa(Math.random().toString()).substr(10, 10)}; path=/; SameSite=Strict;`;
        alert('Correct! Redirecting to the next page...');
        window.location.href = 'next.html'; // Replace with the actual next page
    } else {
        generateChaos(secretInput);
    }
}

function generateChaos(input) {
    const chaosContainer = document.getElementById('chaosContainer');
    const chaosLevel = 50; // Number of random chaotic characters flying around

    // Clear the container
    chaosContainer.innerHTML = '';

    // Add chaotic characters
    for (let i = 0; i < chaosLevel; i++) {
        const char = input.charAt(Math.floor(Math.random() * input.length)) || '*';
        const span = document.createElement('span');
        span.classList.add('text');
        span.textContent = char;

        // Randomize initial position
        span.style.left = `${Math.random() * 100}vw`;
        span.style.top = `${Math.random() * 100}vh`;

        // Randomize size and animation
        span.style.fontSize = `${Math.random() * 2 + 1}rem`;
        span.style.animationDuration = `${Math.random() * 0.5 + 0.2}s`;

        chaosContainer.appendChild(span);

        // Randomly move the characters periodically
        setInterval(() => {
            span.style.left = `${Math.random() * 100}vw`;
            span.style.top = `${Math.random() * 100}vh`;
        }, Math.random() * 1000 + 500); // Every 0.5-1.5 seconds
    }
}

// Debugging commands
window.debugFunctions = debugFunctions;
