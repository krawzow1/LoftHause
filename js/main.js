const navBtn = document.querySelector('nav-icon-btn')
const navIcon = document.querySelector('nav-icon')

navBtn.onclic = function() {
    navIcon.classList.toggle('header_top-row--mobile')
}