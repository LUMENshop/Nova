// =========================
// NovaStudio JavaScript
// =========================

// Dark Mode Toggle
const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// Fade-in Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".card,.plan,.testimonial,.faq-item,.stat").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";
    observer.observe(el);
});

// Counter Animation
const stats = document.querySelectorAll(".stat h2");

stats.forEach(stat => {

    const target = stat.innerText.replace("+","").replace("%","");

    let count = 0;

    const speed = target / 80;

    const update = () => {

        count += speed;

        if(count < target){

            stat.innerText = Math.floor(count);

            if(stat.innerText >= 180)
                stat.innerText += "+";

            requestAnimationFrame(update);

        }else{

            if(target == 98)
                stat.innerText = "98%";

            else if(target == 24)
                stat.innerText = "24/7";

            else
                stat.innerText = target + "+";
        }

    }

    update();

});

// Contact Form Demo
const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert("✅ Thank you! Your message has been received.");

    form.reset();

});
