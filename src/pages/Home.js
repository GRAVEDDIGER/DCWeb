import React, { useEffect } from "react";
import styled from "styled-components";
import { db } from "../functions/firebase";

const HomeContainer = styled.main`
  margin-top: 131px;
  margin-bottom: 101px;
  height: 100%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: justify;
  h2 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;
function Home() {
  let realHeight = window.innerHeight;

  return (
    <HomeContainer realHeight={realHeight}>
      {/* <section>
        <h2>Bienvenidos a Defensa Civil Saladillo</h2>
        <article>
          <h3>¿Que es Defensa Civil?</h3>
          <div>
            <p>
              Defensa Civil es… "un sistema de protección de la población, cuyo
              concepto más moderno consiste en la coordinación de los medios
              públicos y privados para la atención de emergencias". Su objetivo
              es evitar, mitigar y atender los efectos que producen los
              desastres a la comunidad. Estos desastres pueden ser de origen
              natural o antropogénicos.
            </p>
          </div>
        </article>
      </section> */}
    </HomeContainer>
  );
}

export default Home;
