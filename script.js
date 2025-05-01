function loadText(filePath, elementId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            document.getElementById(elementId).textContent = text;
        })
        .catch(error => console.error(error));
}

// Load text into each paragraph
if (document.title === 'Navigating Industry and Independence') {
    loadText('about_the_mixtape_paragraphs/paragraph1.txt', 'about-text-p1');
    loadText('about_the_mixtape_paragraphs/paragraph2.txt', 'about-text-p2');
}

if (document.title === 'Reflective Essay') {
    loadText('../reflective_essay_paragraphs/paragraph_1.txt', 'paragraph1');
    loadText('../reflective_essay_paragraphs/paragraph_2.txt', 'paragraph2');
    loadText('../reflective_essay_paragraphs/paragraph_3.txt', 'paragraph3');
    loadText('../reflective_essay_paragraphs/paragraph_4.txt', 'paragraph4');
}

if (document.title === 'Critical Playlist Essay') {
    loadText('../Essay-1/paragraph1.txt', 'essay1-paragraph1');
    loadText('../Essay-1/paragraph2.txt', 'essay1-paragraph2');
    loadText('../Essay-1/paragraph3.txt', 'essay1-paragraph3');
    loadText('../Essay-1/paragraph4.txt', 'essay1-paragraph4');  
    loadText('../Essay-1/paragraph5.txt', 'essay1-paragraph5');
    loadText('../Essay-1/quote1.txt', 'essay1-quote1');
    loadText('../Essay-1/paragraph6.txt', 'essay1-paragraph6');
    loadText('../Essay-1/paragraph7.txt', 'essay1-paragraph7');
    loadText('../Essay-1/paragraph8.txt', 'essay1-paragraph8'); 
    loadText('../Essay-1/paragraph9.txt', 'essay1-paragraph9');
}

if (document.title === 'Mixtape Essay') {
    loadText('../Essay-2/paragraph1.txt', 'essay2-paragraph1');
    loadText('../Essay-2/paragraph2.txt', 'essay2-paragraph2');
    loadText('../Essay-2/paragraph3.txt', 'essay2-paragraph3');
    loadText('../Essay-2/paragraph4.txt', 'essay2-paragraph4');
    loadText('../Essay-2/paragraph5.txt', 'essay2-paragraph5');
    loadText('../Essay-2/paragraph6.txt', 'essay2-paragraph6');
    loadText('../Essay-2/paragraph7.txt', 'essay2-paragraph7');
    loadText('../Essay-2/paragraph8.txt', 'essay2-paragraph8');
    loadText('../Essay-2/paragraph9.txt', 'essay2-paragraph9');
    loadText('../Essay-2/paragraph10.txt', 'essay2-paragraph10');
    loadText('../Essay-2/paragraph11.txt', 'essay2-paragraph11');
    loadText('../Essay-2/quote1.txt', 'essay2-quote1');
    loadText('../Essay-2/quote2.txt', 'essay2-quote2');
    loadText('../Essay-2/quote3.txt', 'essay2-quote3');
}

// Array of image filenames in the "images" folder
const imageFilenames = [
    "album cover.jpg",
    "alt 2014 fhd cover.jpeg",
    "IMG_3204.png",
    "IMG_3205.png",
    "IMG_3451.png",
    "IMG_3803.png",
    "j cole 2014fhd deluxe.jpeg",
    "j cole msg show.jpeg",
    "larussell.jpeg",
    "lp_image.png",
    "lupe label protest.jpeg",
    "mavi cover art.jpeg",
    "mavi image 1.jpeg",
    "mavi ltst.jpeg",
    "redveil_campfloggnaw.jpeg",
    "redveil-campfloggnaw-2.jpeg",
    "shadow box album cover.jpeg",
    "learn2swim.jpeg"
];

// Dynamically load images into the images container
document.addEventListener("DOMContentLoaded", () => {
    const imagesContainer = document.querySelector(".images-container");

    imageFilenames.forEach(filename => {
        const img = document.createElement("img");
        img.src = `images/${filename}`; // Path to the image
        img.alt = filename; // Use the filename as the alt text
        imagesContainer.appendChild(img); // Add the image to the container
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});