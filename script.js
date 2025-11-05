// Fun confetti effect that runs on page load
function startConfetti() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    document.body.appendChild(container);

const colors =     ['#E27D60', '#85DCB3', '#E8A87C', '#C38D9E', '#41B3A3']
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.floor(Math.random() * 8 + 4) + 'px';
        confetti.style.height = Math.floor(Math.random() * 8 + 4) + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = '-10px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.opacity = '0.8';
        confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
        container.appendChild(confetti);
        setTimeout(() => {
            confetti.style.transition = 'transform 3s ease-out, top 3s ease-out';
            confetti.style.top = '110vh';
            confetti.style.transform += ' translateY(110vh)';
        }, Math.random() * 300);
    }

    setTimeout(() => {
        container.remove();
    }, 4500);
}
//
// Fixed version
document.addEventListener('DOMContentLoaded', function() {
    const deployInfo = document.getElementById('deployment-info');
    const timestamp = new Date().toLocaleString();
    deployInfo.textContent = `Deployed automatically with GitHub Actions - Last updated: ${timestamp}`;
    
    console.log('Page loaded successfully');
            // Start confetti effect on load
        startConfetti();
    
    const sections = document.querySelectorAll('.problem, .solution');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});


if (typeof module !== 'undefined') {
  module.exports = { startConfetti };
}
