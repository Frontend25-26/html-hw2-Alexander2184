const sinner = document.getElementById('sinner-side');
const repent = document.getElementById('repent-side');
const portrait = document.getElementsByClassName('portrait');

const portraitSwapper = ()  => {
    sinner.classList.toggle('clicked');
    repent.classList.toggle('clicked');
}

portrait[0].addEventListener('click', portraitSwapper);

portrait[1].addEventListener('click', portraitSwapper);