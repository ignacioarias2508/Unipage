import React, { useState } from "react";
import { Link } from "react-scroll";
import "./styles.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="https://cdn.prod.website-files.com/61f9c07f2811f8795034a1c9/6393be5289f4b15e0415fee0_JCLogo_Black.svg"
          alt="Logo"
        />
      </div>

      <nav className="nav-links">
        <Link to="projects" smooth={true} duration={500}>
          Proyectos
        </Link>

        <button className="nav-link-button" onClick={toggleModal}>
          Sobre Mí
        </button>
        <Link to="contact" smooth={true} duration={500}>
          Contacto
        </Link>
      </nav>

      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="modal-left">
              <img
                src="https://cdn.prod.website-files.com/61f9c07f2811f8795034a1c9/62142715440ab81c51fac3c1_pp.jpeg" /* Reemplaza con tu foto */
                alt="Foto de presentación"
                className="profile-image"
              />
            </div>
            <div className="modal-right">
              <h2>JUAN CARBALLO</h2>
              <p>
              Arquitecto graduado en 2021 de la Facultad de Arquitectura FADU, Uruguay. Mi enfoque se basa en crear soluciones innovadoras y personalizadas, atendiendo las necesidades de los clientes y respetando los recursos disponibles sin comprometer la estética. He sido docente en software de diseño y trabajado en comunicación visual para un medio local, realizando proyectos de diseño gráfico, animación, escenografía y mobiliario para televisión. En mi práctica independiente, he abordado proyectos diversos, desde obras nuevas hasta reformas. Valoro la formación continua y la investigación para mejorar la calidad y eficiencia de mi trabajo.
              </p>
            </div>
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
