// Fixed version
document.addEventListener('DOMContentLoaded', function() {
    const deployInfo = document.getElementById('deployment-info');
    const timestamp = new Date().toLocaleString();
    deployInfo.textContent = `Deployed automatically with GitHub Actions - Last updated: ${timestamp}`;
    
    console.log('Page loaded successfully');
    
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
