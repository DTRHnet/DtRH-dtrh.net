# DTRH.net

A place for me to go when I am in my head...  
To get away,
or show the world something about me.

This is where I can just be myself
Unfiltered and raw.

---

## What I'm Working On

I've been familiarizing myself with different aspects of web programming and web application security as a result of taking a recent interest in the idea of bug bounty. 
Naturally, I decided doing some work in Javascript would be beneficial. 
Having ditched the idea of running a blog at this point, the result is - undefined at the moment. And that's ok.

I combined bunny.js with my love for ASCII art (even if I suck at it). The rabbit visualized in ASCII is a personal attempt at Frank from Donnie Darko.

I wrote **bunny.js** to do the following:

1. Load an ASCII art file in txt format I've made and render it to screen.
2. Take a secret, encoded in Base64, and render it (top-to-bottom, left-to-right), character by character, in every empty space within the ASCII art's border.
3. Perform visual effects like fading in and out and "dancing" randomized characters.
4. No decoding function is provided, but for anyone from my world who is curious, I'll offer some hints..

DTRH.net is much more than this though. I will be programmaticly adding hidden things about myself, blowing off steam, writing about whatever I care to. It's gonna be a lot of random. This is just the first thing I decided to do.

---

### bunny.js Code (Partial Example)

```javascript
// Load ASCII art and Base64 secrets
const asciiFile = "rbt-ne.txt";
const base64String = "<BASE64 SECRET>";
...
// [ drawInnerText ] - Dynamically type Base64 text in empty spaces without decoding
//
// Cause why decode it? This is the rabbit hole. This functionally started as a strictly
// base4 related function and over time is essentially one which will find all the empty
// spaces within the ascii art box and replace them character by character with a string.
// Of course, its a bit more involved, but thats the idea.

function drawInnerText() {
    // Seamlessly merge encoded text into ascii art
}
```

### Decoded Secrets

Exerpt:
```
Above the surface, the stars fold time.
Particles touch across impossible distances,
as though space never mattered.
One turns, the other knows.
Entanglement, they call it—
a word for something we’ll never fully grasp.
Maybe it’s a thread,
maybe it’s a tunnel,
maybe it’s just the way the universe whispers
to itself.
...
```

**Fun Fact:** The ASCII art itself encodes hidden layers—representing the chaos above and order below.

---

**I hope some people take the time to decode the poem in full, especially those of you who know me in person.  And I hope you enjoy.**

**KBS** [dec 26, 2024]
**admin** [AT] **dtrh** [DOT] **net**



