
const toggleBtn = document.querySelector(".toggle-btn")
const menuCloseBtn = document.querySelector("#menu-close-btn")

toggleBtn.addEventListener("click", () => {
    document.querySelector("#menu").classList.remove("-translate-x-full")
})
menuCloseBtn.addEventListener("click", () => {
    document.querySelector("#menu").classList.add("-translate-x-full")
})

window.onscroll = () => {
    document.querySelector("#menu").classList.add("-translate-x-full")
}



// Hero Section Typed Text using typedjs library
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength traininig', 'Fat Lose', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});