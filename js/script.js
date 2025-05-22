// Sample data in js/script.js
const albums = [
    {
        title: "True Romance",
        cover: "images/True_Romance.png",
        year: "2013",
        strengths: "",
        weaknesses: "",
        favorites: [""]
    },
    {
        title: "Sucker",
        cover: "images/Sucker.jpg",
        year: "2014",
        strengths: "",
        weaknesses: "",
        favorites: [""]
    },
    {
        title: "Vroom Vroom EP",
        cover: "images/VroomVroomEP.png",
        year: "2016",
        strengths: "Experimental sound",
        weaknesses: "",
        favorites: [""]
    },
    {
        title: "Number 1 Angel",
        cover: "images/Number_1_Angel.png",
        year: "2017",
        strengths: "",
        weaknesses: "",
        favorites: [""]
    },
    {
        title: "Pop 2",
        cover: "images/Pop_2.png",
        year: "2017",
        strengths: "",
        weaknesses: "",
        favorites: [""]
    },
    {
        title: "Charli",
        cover: "images/Charli.webp",
        year: "2019",
        strengths: "",
        weaknesses: "",
        favorites: [""]
    },
    {
        title: "how i'm feeling now",
        cover: "images/How_Im_Feeling_Now.webp",
        year: "2020",
        strengths: "Intimate lyrics, raw sound",
        weaknesses: "",
        favorites: [""]
    },
    {
        title: "Crash",
        cover: "images/Crash.webp",
        year: "2022",
        strengths: "",
        weaknesses: "Very commercial sound--too much for some listeners",
        favorites: [""]
    },
    {
        title: "Brat",
        cover: "images/Brat.webp",
        year: "2024",
        strengths: "",
        weaknesses: "None!!!",
    },
    {
        title: "Brat and it's completely different but also still brat",
        cover: "images/Brat2.jpg",
        year: "2024",
        strengths: "Innovative sound, strong themes",
        weaknesses: "Some tracks may be polarizing",
        favorites: ["Track 1", "Track 2"]
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
                <h3>Review</h3>
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
    
    // Add to body
    document.body.appendChild(overlay);
    
    // Close when clicking outside content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });


// Initialize when page loads
window.addEventListener('DOMContentLoaded', createAlbumCards);