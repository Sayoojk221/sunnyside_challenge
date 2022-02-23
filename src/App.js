import './style.css';
import Header from './components/header';
import SectionOne from './components/sectionOne';
import Testimonial from './components/testimonial';
import SectionTwo from './components/sectionTwo';
import Footer from './components/footer';

function App() {
  return (
    <div className='main'>
      <Header />
      <SectionOne />
      <Testimonial />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
