const hamIcon = document.querySelector('#ham-icon');
const menu = document.querySelector('.menu');
hamIcon.onclick = () => {
    menu.classList.toggle('active');
};
