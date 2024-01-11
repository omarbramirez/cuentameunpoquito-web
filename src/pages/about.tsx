import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Más información" description="Más información" />}>
    <Content>
      <p>
        El Proyecto Cuéntame un PoQuito es un festival de microcuentos dirigido
        a la ciudadanía quiteña que incluye un concurso de microrelatos, una
        campaña de apropación del espacio público, un libro de amplia difusión y
        una campaña de lecto-rescritura en colegios municipales y parroquias del
        Distrito Metropolitano de Quito. El propósito es la promoción de la
        lectura y la escritura sobre la ciudad, el uso de la lengua y la
        apropiación del espacio público.
      </p>
      <p>
        Objetivo: El propósito del proyecto es la promoción de la lectura y la
        escritura sobre la ciudad, el uso particular de la lengua en Quito y la
        apropiación del espacio público. sinopsis de la obra: La obra impresa es
        la compilación de los microcuentos ganadores del Concurso Cuéntame un
        poQuito.
      </p>
    </Content>
  </Main>
);

export default About;
