// Sample data in js/script.js
const albums = [
    {
        title: "True Romance",
        cover: "images/True_Romance.webp",
        year: "2013",
        strengths: ["Nostalgia for 2013", " Lorde vibes"],
        weaknesses: ["Not as polished as later work", " Certain parts sound dated"],
        favorites: ["You're the One", "How Can I", "Lock You Up"]
    },
    {
        title: "Sucker",
        cover: "images/Sucker.jpg",
        year: "2014",
        strengths: ["Catchy, fun beats", " 2014 nostalgia"],
        weaknesses: ["Not super hard hitting"],
        favorites: ["London Queen", "Boom Clap"]
    },
    {
        title: "Vroom Vroom EP",
        cover: "images/Vroom_Vroom.webp",
        year: "2016",
        strengths: ["Produced by SOPHIE", " Opening and closing tracks"],
        weaknesses: "Can be jarring to some",
        favorites: ["Vroom Vroom", "Secret (Shh)"]
    },
    {
        title: "Number 1 Angel",
        cover: "images/Num_1_Angel.webp",
        year: "2017",
        strengths: ["Catchy songs", " Great production"],
        weaknesses: "Tracks vary in quality",
        favorites: ["Roll With Me", "Emotional", "ILY2"]
    },
    {
        title: "Pop 2",
        cover: "images/Pop_2.webp",
        year: "2017",
        strengths: ["Good concepts", " Charli's hooks & verses"],
        weaknesses: "Most features are disappointing compared to Charli",
        favorites: ["Tears", "I Got It", "Unlock It", "Track 10"]
    },
    {
        title: "Charli",
        cover: "images/Charli.webp",
        year: "2019",
        strengths: ["Futuristic sound", " Great mix of pop, hyperpop, and experimental"],
        weaknesses: "Tracks vary in quality",
        favorites: ["Next level Charli", "Cross You Out", "1999", "White Mercedes"]
    },
    {
        title: "how i'm feeling now",
        cover: "images/How_Im_Feeling_Now.webp",
        year: "2020",
        strengths: ["Intimate lyrics", " Raw sound", " Authentic to the time period"],
        weaknesses: "None!!",
        favorites: ["claws", "party 4 u", "anthems"]
    },
    {
        title: "Crash",
        cover: "images/Crash.webp",
        year: "2022",
        strengths: ["Amazing pop record", " Cohesive sound", " High energy"],
        weaknesses: ["Somewhat commercial sounding", " Describes it as her 'sellout album'"],
        favorites: ["Crash", "Beg for You", "Used to Know Me"]
    },
    {
        title: "Brat",
        cover: "images/Brat.webp",
        year: "2024",
        strengths: ["Cultural phenomenon", " Reflection on her career", " Defined an era"],
        weaknesses: "None!!!",
        favorites: ["Club Classics", "Sympathy is a Knife", "Von Dutch", "B2b", "365"]
    },
    {
        title: "Brat and it's completely different but also still brat",
        cover: "images/Brat2.jpg",
        year: "2024",
        strengths: ["Brat era comes full circle", " Gave the people what they needed"],
        weaknesses: ["Some songs feel like features rather than remixes", " Guess remix..."],
        favorites: ["360 feat. Robyn & Yung Lean", "Sympathy is a Knife feat. Ariana Grande", "Club Classics feat bb trickz", "Talk Talk feat. Troye Sivan", "Everything is Romantic feat. Caroline Polachek", "Girl So Confusing feat. Lorde", "Hello Goodbye"]
    }
];

// Function to create album cards
function createAlbumCards() {
    const grid = document.querySelector('.album-grid');
    
    albums.forEach(album => {
        const card = document.createElement('div');
        card.className = 'album-card';
        card.innerHTML = `
            <img src="${album.cover}" alt="${album.title}">
            <h3>${album.title} (${album.year})</h3>
        `;
        
        card.addEventListener('click', () => {
            showAlbumDetail(album);
        });
        
        grid.appendChild(card);
    });
}

function showAlbumDetail(album) {
    // Create overlay container
    const overlay = document.createElement('div');
    overlay.className = 'album-overlay';
    
    // Create close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        closeOverlay(overlay);
    });
    
    // Create content
    overlay.innerHTML = `
        <div class="album-zoom-container">
            <img src="${album.cover}" alt="${album.title}" class="zoomed-cover">
        </div>
        <div class="album-review">
            ${closeBtn.outerHTML}
            <h2>${album.title} (${album.year})</h2>
            <div class="review-section">
                <p><strong>Strengths:</strong> ${album.strengths}</p>
                <p><strong>Weaknesses:</strong> ${album.weaknesses}</p>
                <p><strong>Favorites:</strong> ${album.favorites.join(', ')}</p>
            </div>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(overlay);
    
    // Prevent scrolling when overlay is open
    document.body.style.overflow = 'hidden';
    
    // Close when clicking outside content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay(overlay);
        }
    });
}

function closeOverlay(overlay) {
    // Add closing animation
    overlay.style.animation = 'fadeOut 0.3s ease-out forwards';
    
    // Wait for animation to complete before removing
    setTimeout(() => {
        document.body.removeChild(overlay);
        document.body.style.overflow = ''; // Restore scrolling
    }, 300);
}


// Initialize when page loads
window.addEventListener('DOMContentLoaded', createAlbumCards);
console.log("Album script initialized");