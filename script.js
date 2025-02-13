document.getElementById("startStory").addEventListener("click", function() {
    let story = document.getElementById("story");
    let finalMessage = document.getElementById("finalMessage");
    let storyText = document.getElementById("storyText");
    let cat1 = document.getElementById("cat1");
    let cat2 = document.getElementById("cat2");
    
    let messages = [
        "Había una vez un gatito solitario 🐱...",
        "Hasta que un día conoció a una hermosa gatita 😻...",
        "Desde entonces, nunca más quisieron estar separados 💕...",
        "Juntos compartieron aventuras, risas y mucho amor ❤️...",
        "Así como los gatitos, yo solo quiero estar contigo, mi Gatita ❤️"
    ];

    let index = 0;
    story.classList.remove("hidden");

    function showMessage() {
        if (index < messages.length) {
            storyText.innerText = messages[index];
            index++;
            setTimeout(showMessage, 2000);
        } else {
            finalMessage.classList.remove("hidden");
        }
    }

    // Animación de los gatitos acercándose
    let moveInterval = setInterval(() => {
        let left1 = parseInt(getComputedStyle(cat1).left);
        let right2 = parseInt(getComputedStyle(cat2).right);
        
        if (left1 < 40) {
            cat1.style.left = (left1 + 2) + "%";
            cat2.style.right = (right2 + 2) + "%";
        } else {
            clearInterval(moveInterval);
            showMessage();
        }
    }, 100);
});
