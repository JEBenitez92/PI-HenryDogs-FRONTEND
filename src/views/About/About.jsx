import React from "react";
import Style from "./About.module.css";

const About = () => {
  return (
    <div className={Style.contenedorGeneral}>
      <div className={Style.contenedorText}>
        <h1>PI Henry-Dogs</h1>
        <div className={Style.contenedorP}>
        <p>
         Es una SPA (Single-Page-Application) creada para el bootcamp de Henry,
          donde se busca que se apliquen todos los conocimientos adquiridos
          durante el curso. 
          </p>
          <p>
          Esta SPA busca mostrar distintas razas de perros,
          donde podremos ver una imagen e información que nos ayudará a
          informarnos acerca de cómo puede llegar a ser el perro. Entre la
          información, vamos a poder encontrar el tamaño aproximado, el peso y
          los temperamentos del animal. 
          </p>
          <p>
          Esta página fue creada con las
          siguientes tecnologías:
        </p>
        </div>
      </div>
      <div className={Style.contenedorImagenes}>
        <div className={Style.ImagenCss} />
        <div className={Style.ImagenHtml} />
        <div className={Style.ImagenJs} />
        <div className={Style.ImagenNode} />
        <div className={Style.ImagenPosgres} />
        <div className={Style.ImagenReact} />
        <div className={Style.ImagenRedux} />
      </div>

      <div className={Style.contenedorContacto}>
        <div className={Style.contacto}><h3>Contactame:</h3></div>
        <div className={Style.contenedorGithub}>
        <div className={Style.ImagenGithub} />
          <div className={Style.EnlaceGithub}>
          <a href="https://github.com/JEBenitez92">Mi GitHub</a>
          </div>
        </div>

        <div className={Style.contenedroLikedin}>
        <div className={Style.ImagenLikedin}></div> 
        <div className={Style.EnlaceLinkedin}>
          <a href="https://www.linkedin.com/in/jonathan-ezequiel-benitez/">Mi Linkedin</a>
        </div>
        </div>

        <div className={Style.contenedorCorreo}>  
        <div className={Style.ImagenCorreo}/> 
        <div className={Style.EnlaceCorreo}>
          <a href="mailto:Jonathan92_24@hotmail.com?subject=Te contacto desde Henry-Dogs">Mi correo</a>
        </div>
        </div>

        <div className={Style.contenedorWhatsapp}>
        <div className={Style.ImagenWhatsapp}/>
        <div className={Style.EnlaceWhatsapp}>
        <a href="https://wa.me/+541150645938">Enviame un mensaje de WhatsApp</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
