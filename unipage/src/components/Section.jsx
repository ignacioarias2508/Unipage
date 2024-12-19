import React, { useState } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const Section = ({ id, title, images = [], slider = false, imageData = [] }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

 
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  const closeInfoBox = () => {
    setIsAnimating(true); 
    setTimeout(() => {
      setSelectedImage(null); 
      setIsAnimating(false); 
    }, 500); 
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${inView ? "visible" : "hidden"}`}
    >
      <div className="section-content">
        <h2>{title}</h2>

        {slider && (
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(imageData[index])}
                >
                  <img
                    src={src}
                    alt={`Slider ${index}`}
                    className="slider-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

{id === "awards" && (
  <div className="awards-section">
    <div className="awards-list">
      {[
        {
          link: "https://www.veredictas.com/es/trabajo/19629/montevideo_dibujado",
          image: "https://www.veredictas.com/img/trabajos/900-675-ADAPTA/f90cbc97d437dc292d8cf6dee8cfe0.jpg", 
          title: "Primer Premio Ilustración Montevideo",
        },
        {
          link: "https://www.salaodesign.com.br/es/wp-content/uploads/2024/09/5278-Taba.png",
          image: "https://www.salaodesign.com.br/es/wp-content/uploads/2024/09/5278-Taba.png",
          title: "Primer Premio Diseño Industrial Mobiliario Urbano",
        },
        {
          link: "https://www.veredictas.com/es/trabajo/19394/mesa_y_silla_k02",
          image: "https://www.veredictas.com/img/trabajos/900-675-ADAPTA/859ed6e310d4c6acf1d3b5b85d15db.jpg",
          title: "Selección Diseño Industrial Beneficio Social",
        },
        {
          link: "https://www.sau.org.uy/constructiva-2022-lanzamiento-concurso-de-mobiliario/",
          image: "https://www.sau.org.uy/wp-content/uploads/CONCURSO-DE-MOBILIARIO.jpg",
          title: "Primer Premio Concurso Mobiliario Constructiva FADU",
        },

      ].map((award, index) => (
        <div key={index} className="award-card">
          <a href={award.link} target="_blank" rel="noopener noreferrer">
            <div
              className="award-image"
              style={{ backgroundImage: `url(${award.image})` }}
            ></div>
          </a>
          <p className="award-title">{award.title}</p>
        </div>
      ))}
    </div>
  </div>
)}

        {id === "contact" && (
          <div className="contact-form-container">
            <form className="contact-form">
              <input
                type="text"
                placeholder="Nombre"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                required
              />
              <input
                type="text"
                placeholder="Asunto"
                className="form-input"
                required
              />
              <textarea
                placeholder="Mensaje"
                className="form-textarea"
                required
              ></textarea>
              <button type="submit" className="form-button">
                Enviar
              </button>
            </form>

            <div className="social-icons">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        )}
      </div>
      <div
        className={`info-box ${
          selectedImage ? "active" : isAnimating ? "closing" : ""
        }`}
      >
        {selectedImage && (
          <>
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.description}</p>
            <button className="close-btn" onClick={closeInfoBox}>
              Cerrar
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Section;
