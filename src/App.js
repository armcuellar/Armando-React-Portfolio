import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [categories] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {currentCategory === categories[0] ?
          (<About></About>) : currentCategory === categories[1] ?
            (<Portfolio></Portfolio>) : currentCategory === categories[2] ?
              (<Resume></Resume>) : (
                <ContactForm></ContactForm>
              )}
      </main>
      <Footer />

    </div>
  );
}

export default App;
