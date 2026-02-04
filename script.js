// Get elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const content = document.getElementById('content');
const celebration = document.getElementById('celebration');

let noBtnClickCount = 0;

// Yes button click handler
yesBtn.addEventListener('click', () => {
    // Hide the content and show celebration
    content.style.display = 'none';
    celebration.style.display = 'block';
    
    // Create confetti effect
    createConfetti();
    
    // Play celebration sound (optional - you can add an audio file)
    // const audio = new Audio('celebration.mp3');
    // audio.play();
});

// No button click handler - make it harder to click no!
noBtn.addEventListener('click', () => {
    noBtnClickCount++;
    
    const messages = [
        "Are you sure? 🥺",
        "Please reconsider! 💔",
        "Really? Give it another thought! 😢",
        "You're breaking my heart! 💔😭",
        "Come on, just say yes! 🙏",
        "I promise to make you happy! ❤️",
        "Pretty please? 🥺👉👈",
        "You know you want to say yes! 😊"
    ];
    
    if (noBtnClickCount <= messages.length) {
        // Change the button text
        noBtn.textContent = messages[noBtnClickCount - 1] || "No 😢";
        
        // Make the Yes button bigger and more attractive
        const newSize = 1 + (noBtnClickCount * 0.15);
        yesBtn.style.transform = `scale(${newSize})`;
        
        // Make the No button smaller and harder to click
        const noSize = 1 - (noBtnClickCount * 0.1);
        noBtn.style.transform = `scale(${Math.max(noSize, 0.3)})`;
        
        // Move the No button randomly
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 100 - 50;
        noBtn.style.position = 'relative';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Add shake animation to the whole content
        content.style.animation = 'shake 0.5s';
        setTimeout(() => {
            content.style.animation = '';
        }, 500);
    }
    
    // After many attempts, hide the No button
    if (noBtnClickCount >= 7) {
        noBtn.style.display = 'none';
        
        // Create a special message
        const specialMsg = document.createElement('p');
        specialMsg.textContent = "The 'No' button ran away! Looks like 'Yes' is your only option now! 😄💕";
        specialMsg.style.color = '#e91e63';
        specialMsg.style.fontSize = '1.2em';
        specialMsg.style.marginTop = '20px';
        specialMsg.style.fontWeight = 'bold';
        specialMsg.style.animation = 'fadeIn 1s ease-in';
        document.querySelector('.buttons').appendChild(specialMsg);
    }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Confetti creation function
function createConfetti() {
    const colors = ['#ff6b9d', '#c06c84', '#e91e63', '#ff1744', '#f06292', '#ec407a'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.position = 'fixed';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Add floating hearts on hover over Yes button
yesBtn.addEventListener('mouseenter', () => {
    createFloatingHeart(yesBtn);
});

function createFloatingHeart(element) {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    
    const rect = element.getBoundingClientRect();
    heart.style.left = rect.left + Math.random() * rect.width + 'px';
    heart.style.top = rect.top + 'px';
    heart.style.animation = 'floatUp 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Add float up animation for hearts
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);

// Add some sparkle effects
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(2) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Add sparkles on mouse move over the page
let lastSparkleTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkleTime > 100) {
        if (Math.random() > 0.7) {
            createSparkle(e.clientX, e.clientY);
        }
        lastSparkleTime = now;
    }
});

// Add keyboard shortcut - press Enter or Space to select Yes
document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && content.style.display !== 'none') {
        e.preventDefault();
        yesBtn.click();
    }
});
