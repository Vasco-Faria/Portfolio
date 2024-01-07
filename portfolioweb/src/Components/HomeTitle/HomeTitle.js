import React,{ useState, useEffect } from 'react';
import './HomeTitle.css'

const greetings = [
    "Welcome to my Website Portfolio!", // English
    "Bem-vindo ao meu Portfólio de Website!", // Portuguese
    "Bienvenido a mi Portafolio de Sitio Web!", // Spanish
    "Bienvenue dans mon Portfolio de Site Web!", // French
    "Willkommen in meinem Website-Portfolio!", // German
    "Benvenuto nel mio Portfolio Sito Web!" // Italian
];

const HomeTitle = () => {

    const [currentGreeting, setCurrentGreeting] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentGreeting((currentGreeting) => (currentGreeting + 1) % greetings.length);
        }, 6000);
    
        return () => clearInterval(intervalId);
    }, []);
    

    return (
        <div className='hometitle'>
            <h2>Vasco Faria</h2>
		    <h2>Vasco Faria</h2>
            <div className='system-print'>
                <h3>System<span style={{color: "white"}}>.</span><span style={{color: "#e06c75"}}>out</span>.<span style={{color: "#9fd3c7"}}>println</span>("</h3>
                    <h3 className="greeting">{greetings[currentGreeting]}</h3>
                <h3 className="closure">");</h3>
            </div>
            
        </div>
    );
};

export default HomeTitle;
