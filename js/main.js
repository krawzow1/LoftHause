const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.header_top-row')

navBtn.onclick = () => {
    navIcon.classList.toggle('nav-icon--active')
    nav.classList.toggle('header_top-row--mobile')
    document.body.classList.toggle('no-scroll')
}