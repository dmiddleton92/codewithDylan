import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
    return (
        <div>
            <Header />
            
            <Navigation />
            <main>
                <AboutMe />
                <Portfolio />
                <Contact />
                <Resume />
            </main>
            <Footer />
        </div>
    );
}

export default App;