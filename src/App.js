import "./style.css";
import Header from "./components/header";
import SectionOne from "./components/sectionOne";
import Testimonial from "./components/testimonial";
import SectionTwo from "./components/sectionTwo";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="main">
      <Header setOpen={setOpenModal} />
      <section id="about">
        <SectionOne />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="gallery">
        <SectionTwo />
      </section>
      <Footer />

      <div
        id="open-modal"
        class="modal-window"
        style={
          openModal
            ? { visibility: "visible", opacity: "1", pointerEvents: "auto" }
            : {}
        }
      >
        <div>
          <a href="#" onClick={() => setOpenModal(false)} id="modelClose">
            <img src="/images/icons8-macos-close-32.png" />
          </a>
          <ul>
            <li>
              <a onClick={() => setOpenModal(false)} href="#about">
                about
              </a>
            </li>
            <li>
              <a onClick={() => setOpenModal(false)} href="#testimonials">
                testimonials
              </a>
            </li>
            <li>
              <a onClick={() => setOpenModal(false)} href="#gallery">
                gallery
              </a>
            </li>
            <li>
              <a onClick={() => setOpenModal(false)} href="#" id="contactBtn">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
