function createStars() {
    const container = document.querySelector('body');
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        
        const duration = Math.random() * 4 + 1;
        const delay = Math.random() * 5;

        star.style.animation = `twinkle ${duration}s infinite`;
        star.style.animationDelay = `${delay}s`;
        
        container.appendChild(star);
    }
}

createStars();