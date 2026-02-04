// Get elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const content = document.getElementById('content');
const celebration = document.getElementById('celebration');

let noBtnClickCount = 0;

// Add Stranger Things inspired lightning effect
function createLightningFlash() {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = '#fff';
    flash.style.opacity = '0';
    flash.style.pointerEvents = 'none';
    flash.style.zIndex = '10000';
    document.body.appendChild(flash);
    
    // Quick flash
    flash.style.transition = 'opacity 0.05s';
    flash.style.opacity = '0.8';
    
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => flash.remove(), 100);
    }, 50);
}

// Random lightning flashes
setInterval(() => {
    if (Math.random() > 0.95 && content.style.display !== 'none') {
        createLightningFlash();
    }
}, 3000);

// Yes button click handler
yesBtn.addEventListener('click', () => {
    // Lightning flash on yes!
    createLightningFlash();
    setTimeout(() => createLightningFlash(), 200);
    setTimeout(() => createLightningFlash(), 400);
    
    // Hide the content and show celebration
    content.style.display = 'none';
    celebration.style.display = 'block';
    
    // Create confetti effect
    createConfetti();
    
    // Add special Stranger Things message
    setTimeout(() => {
        createFloatingMessage("Friends don't lie! ❤️", 3000);
    }, 1000);
});

// No button click handler - make it harder to click no!
noBtn.addEventListener('click', () => {
    noBtnClickCount++;
    
    // Lightning flash when clicking no!
    createLightningFlash();
    
    const messages = [
        "The Upside Down says No! Try again! 🥺",
        "Eleven is using her powers... reconsider! 💔",
        "The Mind Flayer disagrees! Say yes! 😢",
        "Demogorgon alert! Choose wisely! 💔😭",
        "The gang says YES! Join us! 🙏",
        "Like Hopper, I won't give up! ❤️",
        "Friends don't lie, Kaju! Say yes! 🥺👉👈",
        "Even Dustin knows the answer is YES! 😊"
    ];
    
    if (noBtnClickCount <= messages.length) {
        // Change the button text
        noBtn.textContent = messages[noBtnClickCount - 1] || "No 😢";
        
        // Make the Yes button bigger and more attractive with glow
        const newSize = 1 + (noBtnClickCount * 0.15);
        yesBtn.style.transform = `scale(${newSize})`;
        yesBtn.style.boxShadow = `0 0 ${20 + noBtnClickCount * 10}px #ff0040`;
        
        // Make the No button smaller and harder to click
        const noSize = 1 - (noBtnClickCount * 0.1);
        noBtn.style.transform = `scale(${Math.max(noSize, 0.3)})`;
        
        // Move the No button randomly (like it's being controlled by the Upside Down!)
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 100 - 50;
        noBtn.style.position = 'relative';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Add shake animation to the whole content
        content.style.animation = 'shake 0.5s, glitch 0.3s';
        setTimeout(() => {
            content.style.animation = '';
        }, 500);
    }
    
    // After many attempts, hide the No button
    if (noBtnClickCount >= 7) {
        noBtn.style.display = 'none';
        
        // Create a special message
        const specialMsg = document.createElement('p');
        specialMsg.textContent = "The 'No' button got sucked into the Upside Down! Looks like 'Yes' is your only option now! 😄💕";
        specialMsg.style.color = '#ff006e';
        specialMsg.style.fontSize = '1.2em';
        specialMsg.style.marginTop = '20px';
        specialMsg.style.fontWeight = 'bold';
        specialMsg.style.animation = 'fadeIn 1s ease-in, neonPulse 2s ease-in-out infinite';
        specialMsg.style.textShadow = '0 0 10px #ff006e';
        document.querySelector('.buttons').appendChild(specialMsg);
        
        // Add demogorgon roar effect (visual)
        createLightningFlash();
        setTimeout(() => createLightningFlash(), 100);
        setTimeout(() => createLightningFlash(), 300);
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
    const colors = ['#ff0040', '#ff006e', '#00fff9', '#7b2cbf', '#ff6b9d', '#ec407a'];
    const confettiCount = 200;
    
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
            confetti.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 20);
    }
}

// Create floating message function
function createFloatingMessage(text, duration) {
    const msg = document.createElement('div');
    msg.textContent = text;
    msg.style.position = 'fixed';
    msg.style.top = '50%';
    msg.style.left = '50%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.fontSize = '3em';
    msg.style.color = '#00fff9';
    msg.style.textShadow = '0 0 20px #00fff9, 0 0 40px #00fff9';
    msg.style.fontWeight = 'bold';
    msg.style.zIndex = '10000';
    msg.style.animation = 'floatMessage 2s ease-out forwards';
    msg.style.pointerEvents = 'none';
    
    document.body.appendChild(msg);
    
    setTimeout(() => {
        msg.remove();
    }, duration);
}

// Add animation for floating message
const floatMsgStyle = document.createElement('style');
floatMsgStyle.textContent = `
    @keyframes floatMessage {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -60%) scale(0.8);
        }
    }
`;
document.head.appendChild(floatMsgStyle);

// Add floating hearts on hover over Yes button with glow
yesBtn.addEventListener('mouseenter', () => {
    createFloatingHeart(yesBtn);
});

function createFloatingHeart(element) {
    const hearts = ['💖', '❤️', '💝', '💗', '💕'];
    const heart = document.createElement('div');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'absolute';
    heart.style.fontSize = '25px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.filter = 'drop-shadow(0 0 10px #ff0040)';
    
    const rect = element.getBoundingClientRect();
    heart.style.left = rect.left + Math.random() * rect.width + 'px';
    heart.style.top = rect.top + 'px';
    heart.style.animation = 'floatUp 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Add Stranger Things alphabet wall effect
function createAlphabetLights() {
    const alphabet = 'SHRISTI';
    const lights = document.createElement('div');
    lights.style.position = 'fixed';
    lights.style.top = '20px';
    lights.style.left = '50%';
    lights.style.transform = 'translateX(-50%)';
    lights.style.fontSize = '2em';
    lights.style.color = '#00fff9';
    lights.style.textShadow = '0 0 20px #00fff9, 0 0 40px #00fff9';
    lights.style.zIndex = '9999';
    lights.style.fontWeight = 'bold';
    lights.style.letterSpacing = '10px';
    lights.style.pointerEvents = 'none';
    lights.style.animation = 'flicker 3s infinite alternate';
    
    lights.textContent = alphabet;
    document.body.appendChild(lights);
    
    setTimeout(() => {
        lights.remove();
    }, 5000);
}

// Show alphabet lights occasionally
setInterval(() => {
    if (Math.random() > 0.97 && content.style.display !== 'none') {
        createAlphabetLights();
    }
}, 5000);

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

// Add some sparkle effects with Stranger Things colors
function createSparkle(x, y) {
    const sparkles = ['✨', '⚡', '💫', '🌟'];
    const sparkle = document.createElement('div');
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
    sparkle.style.filter = 'drop-shadow(0 0 10px #00fff9)';
    
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
