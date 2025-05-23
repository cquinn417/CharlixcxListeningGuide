// intro.js
document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const message = document.getElementById('response-message');

    yesBtn.addEventListener('click', () => {
        window.location.href = 'albums.html';
    });

    noBtn.addEventListener('click', () => {
        message.textContent = "Too bad! You're already here";
        message.classList.remove('hidden');
        
        // Add animation class
        message.classList.add('fade-in');
        
        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'albums.html';
        }, 2000);
    });
});