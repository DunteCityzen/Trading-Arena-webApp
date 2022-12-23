import './App.css';
import Heda from './Heda';
import CryBackground from './CryBackground';
import About from './About';
import Services from './Services';
import WhyUs from './WhyUs';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import Team from './Team';
import ContactUs from './ContactUs';
import Partners from './Partners';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Heda />
      </div>

      <div className="app__body">
        
        <CryBackground />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonial />
        <Team />
        <ContactUs />
        <Partners />
        
      </div>

      <div className="app__footer">

        <Footer />

      </div>

    </div>
  );
}

export default App;
