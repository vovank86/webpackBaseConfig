import html from './wc-header.template.html'
import styles from './wc-header.module.css'

export default class WCHeader extends HTMLElement {
    set title(value){
        this.setAttribute('title', value)
    }

    get title(){
        this.getAttribute('title')
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }


    render() {
        const {shadowRoot} = this;

        const htmlContent = this.htmlToElement(html);
        shadowRoot.innerHTML = '';
        shadowRoot.appendChild(htmlContent);
        const header = shadowRoot.querySelector('.header');
        const title = shadowRoot.querySelector('.title');
        header.classList.add(styles.header);
        title.classList.add(styles.title);
        title.innerHTML = this.getAttribute('title');
    }


    htmlToElement(html) {
        const template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }
}