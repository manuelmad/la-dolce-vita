import './styles/style.css';
import Header from './templates/Header.js';
// import './styles/style-tablets.css';
// import './styles/style-desktop.css';



const App = () => {
    const app = document.getElementById("app");
    app.innerHTML = Header();

    // return app;
};

App();