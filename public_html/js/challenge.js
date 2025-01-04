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
