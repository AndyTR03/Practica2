import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Descripcion',
    imageUrl: 'https://eventos.senati.marketing/wp-content/uploads/2020/10/senati.png',
    description: (
      <>
        El Servicio Nacional de Adiestramiento en Trabajo Industrial (SENATI) es una institución de formación profesional que tiene por finalidad proporcionar formación profesional y capacitación para la actividad industrial manufacturera y para las labores de instalación, reparación y mantenimiento realizadas en las demás actividades económicas. Fue creado por ley en 1961, a iniciativa de la Sociedad Nacional de Industrias. Su creación fue impulsada por visionarios empresarios industriales con el propósito de responder a la demanda de personal competente para lograr el desarrollo sostenido del Sector Industrial. Desde su ley de creación, fue definido como una persona jurídica de derecho público, con autonomía técnica, pedagógica, administrativa y económica, y con patrimonio propio, a fin de que pudiera tener la flexibilidad que exige la dinámica del desarrollo industrial. Reglamentación actual en la ley 26272. El SENATI como Institución de Formación Profesional, moderna, eficiente y de calidad comprobada, con más de 49 años al servicio de la educación, ha desarrollado el Programa Nacional de Informática (PNI), que cuenta con el respaldo de las más destacadas empresas de Hardware y Software de la Industria de Tecnologías de la Información.
      </>
    ),
  },
  {
    title: 'Vision',
    imageUrl: 'https://iepnpsrljuliaca.edu.pe/wp-content/uploads/2020/12/Vision_2-2.png', 
    description: (
      <>
        En el año 2013, el SENATI ha consolidado su posición de liderazgo en el Perú y América Latina, en educación para el desarrollo de la empleabilidad y de la competitividad de las unidades productivas.
      </>
    ),
  },
  {
    title: 'Mision',
    imageUrl: 'https://iepnpsrljuliaca.edu.pe/wp-content/uploads/2020/12/MISION-5-1.png', 
    description: (
      <>
        Formar y capacitar a las personas para empleos dignos y de alta productividad, en apoyo a la industria nacional en el contexto global, y para contribuir a la mejora de la calidad de vida de la sociedad.
      </>
    ),
  },
  {
    title: 'Objetivo',
    imageUrl: 'https://www.senati.edu.pe/sites/default/files/archivos/2019/nosotros/12/senati-nosotros-web-1800x677.jpg',
    description: (
      <>
        - Contribuir al incremento de la productividad y al desarrollo del sector industrial manufacturero y de los demás sectores productivos, mediante la formación y la capacitación profesional.
        - Contribuir al desarrollo del potencial humano para mejorar la empleabilidad a través de la formación  y capacitación profesional.
        - Responder efectivamente a la demanda de calificación para el trabajo de los sectores productivos.
        - Contribuir a mejorar la educación del personal técnico profesional con los últimos avances tecnológicos.
        - Propiciar la permanente satisfacción de sus clientes en la formación y la capacitación profesional, así como en los servicios técnicos y empresariales que brinde.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageUrl} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
