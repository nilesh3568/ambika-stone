// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// ===============================
// Navbar Background on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("shadow");
        navbar.style.background = "#000";
        navbar.style.padding = "10px 0";
    } else {
        navbar.classList.remove("shadow");
        navbar.style.background = "rgba(0,0,0,0.9)";
        navbar.style.padding = "15px 0";
    }

});

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Close Mobile Menu on Click
// ===============================

const navItems = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Gallery Image Hover Effect
// ===============================

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";
        image.style.transition = "0.4s";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// ===============================
// Button Hover Animation
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

// ===============================
// Page Loaded
// ===============================

window.addEventListener("load", () => {
    console.log("Ambika Crusher Website Loaded Successfully.");
});








const form = document.getElementById("contactForm");

form.addEventListener("submit", function () {
    setTimeout(() => {
        form.reset();
    }, 1000);
});



// ================= BACK TO TOP =================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




// ================= Loader =================



window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    setTimeout(function(){

        loader.classList.add("hide");

    }, 1200);

});



// ================= COUNTER =================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 150;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));





//================ LIGHTBOX GALLERY ================

const images = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

let current = 0;

// Open Image

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        current=index;

        showImage();

        lightbox.style.display="flex";

        document.body.style.overflow="hidden";

    });

});

// Show Image

function showImage(){

    lightboxImg.src=images[current].src;

}

// Next Image

nextBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    current++;

    if(current>=images.length){

        current=0;

    }

    showImage();

});

// Previous Image

prevBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    current--;

    if(current<0){

        current=images.length-1;

    }

    showImage();

});

// Close

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

    document.body.style.overflow="auto";

});

// Click Outside

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

        document.body.style.overflow="auto";

    }

});

// Keyboard

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display==="flex"){

        if(e.key==="Escape"){

            lightbox.style.display="none";

            document.body.style.overflow="auto";

        }

        if(e.key==="ArrowRight"){

            current++;

            if(current>=images.length){

                current=0;

            }

            showImage();

        }

        if(e.key==="ArrowLeft"){

            current--;

            if(current<0){

                current=images.length-1;

            }

            showImage();

        }

    }

});
