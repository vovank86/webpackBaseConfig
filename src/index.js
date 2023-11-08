import Button from './components/Button'
import './styles/global.css'
import WCHeader from "./components/WCHeader";

customElements.define('wc-header', WCHeader);

const button = Button({
    text: 'Test Button Component :)',
    onClick: (event) => {
        const test = window.confirm('Do you want to add message: "Test text added :)"?');
        if(test){
            const divEl = document.createElement('div');
            divEl.innerHTML = `<p>Test text added :)</p>`;
            document.body.appendChild(divEl);

        }
    }
});

document.body.appendChild(button);
