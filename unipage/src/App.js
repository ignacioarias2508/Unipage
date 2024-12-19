import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import "./components/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpeg";
import project3 from "./assets/project3.jpg";

const App = () => {
  const projectImages = [project1, project2, project3];

  const projectData = [
    { title: "Shellemberg - Chiavia", description: "Reforma de apartamento en edifico de viviendas" },
    { title: "Arquitectura", description: "Trabajo final de carrera (TFC)" },
    { title: "Master Chef Uruguay", description: "Escenografía para programa de televisión entretenimiento, adaptación de formato internacional, Master Chef Uruguay" },
  ];

  return (
    <div>
      <Header />
      <main>
        <Section
          id="projects"
          
          slider={true}
          images={projectImages}
          imageData={projectData}
        />
        <Section id="awards" title="Premios y Reconocimientos" />


        <Section id="contact" title="Contacto">
         
        </Section>
      </main>
      <Footer />
    </div>
  );
};




<Section id="contact" title="Contacto" contact={true} />


export default App;
