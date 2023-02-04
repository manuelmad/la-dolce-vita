import '@styles/style.css';
import Header from '@templates/Header.js';


const App = () => {
    const app = document.getElementById("app");
    app.innerHTML = Header();
};

App();