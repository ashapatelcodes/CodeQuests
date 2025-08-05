document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const originalText = 'Code Quests';
    
    // Smooth typing animation on page load
    function typeWriter() {
        title.textContent = '';
        title.setAttribute('data-text', '');
        
        let i = 0;
        const typing = setInterval(() => {
            if (i <= originalText.length) {
                title.textContent = originalText.substring(0, i);
                title.setAttribute('data-text', originalText.substring(0, i));
                i++;
            } else {
                clearInterval(typing);
                // Show subtitle after title completes with slide-up animation
                setTimeout(() => {
                    subtitle.classList.add('animate-in');
                }, 300);
            }
        }, 120);
    }
    
    // Start typing animation after a brief delay
    setTimeout(typeWriter, 800);
});
