// JavaScript for dynamic content
// This file intentionally contains linting errors for testing

document.addEventListener('DOMContentLoaded', function() {
    // Add deployment timestamp
    const deployInfo = document.getElementById('deployment-info')
    const timestamp = new Date().toLocaleString()
    deployInfo.textContent = `Deployed automatically with GitHub Actions - Last updated: ${timestamp}`
    
    // Intentional linting error: missing semicolon
    console.log('Page loaded successfully')
    
    // Add hover effect to sections
    const sections = document.querySelectorAll('.problem, .solution');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)'
            this.style.transition = 'transform 0.3s ease'
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)'
        })  // Another intentional error: missing semicolon
    });
    
    // Unused variable for linting to catch
    var unusedVariable = "This should trigger a warning"
});
