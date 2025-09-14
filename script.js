// Example: Animate the car on click
document.querySelector('.animated-image').addEventListener('click', function() {
    this.style.animation = 'drive 0.8s linear';
    setTimeout(() => {
        this.style.animation = 'drive 3s linear infinite alternate';
    }, 800);
});
document.getElementById('animate-btn').addEventListener('click', function() {
    const box = document.getElementById('magic-box');
    box.classList.add('animated');
    box.addEventListener('animationend', function handler() {
        box.classList.remove('animated');
        box.removeEventListener('animationend', handler);
    });
});