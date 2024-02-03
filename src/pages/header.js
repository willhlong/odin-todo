import Logo from '../assets/check-all.svg'
import '../styles/mystyles.css'

export default function addHeaderStuff() {
    const el = document.querySelector(".header");
    const title = document.createElement('h1');
    title.innerText = 'Alpha Todo';
    const myLogo = new Image();
    myLogo.src = Logo;

    el.appendChild(myLogo);
    el.appendChild(title);
}