const myDiv = document.querySelectorAll(".collapse ul li a");

myDiv.forEach(m => {
    m.addEventListener("click",(e) => {
        document.querySelectorAll(".active").forEach(s => {
            s.classList.remove("active");
        })
        e.target.classList.add("active");
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
