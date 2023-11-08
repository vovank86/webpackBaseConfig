import buttonHtml from'./button.template.html'
import styles from './button.module.css'

const Button = ({text, onClick}) => {
    const template = document.createElement('template');
    template.innerHTML = buttonHtml.trim();

    const button = template.content.cloneNode(true).firstChild;
    button.classList.add(styles.myButton);
    button.innerText = text;
    button.addEventListener('click', onClick);

    return button;
}

export default Button