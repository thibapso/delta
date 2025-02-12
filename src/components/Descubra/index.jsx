import styles from "./Descubra.module.css";
import classNames from 'classnames';

function Descubra() {
  return (
    <section id="descubra" className={styles.descubra}>
      <div className={styles.descubraTitle}>
        <h2>Descubra!</h2>
      </div>
      <div className={styles.descubraCards}>
        <div className={styles.Cards__BemEstar}>
          <div className={styles.iconWrapper}>
            <i className="material-icons-outlined">spa</i>
          </div>
          <h2>Bem-estar</h2>
          <div className={`${styles.Tag} bemestar`}>
            <ul>
              <li>
                <a href="#pace">Pace</a>
              </li>
              <li>
                <a href="#imc">IMC</a>
              </li>
            </ul>
          </div>
          <p className={styles.Cards__Paragrafo}>
            Material para saúde e finanças: <span>calculadora de Pace</span>{" "}
            para corredores e <span>calculadora de IMC</span> para o vigor.
          </p>
          <div className={styles.Cards__Button}>
            <a href="#pace">Começar</a>
          </div>
        </div>

        <div className={styles.Cards__Fisica}>
          <div className={styles.iconWrapper}>
            <i className="material-icons-outlined">air</i>
          </div>
          <h2>Física</h2>
          <div className={`${styles.Tag} fisica`}>
            <ul>
              <li>
                <a href="#medidas">Medidas</a>
              </li>
              <li>
                <a href="#temperatura">Temperatura</a>
              </li>
            </ul>
          </div>
          <p className={styles.Cards__Paragrafo}>
            Conversores práticos: <span>medidas</span> para calcular e{" "}
            <span>temperatura</span> para diferentes condições climáticas.
          </p>
          <div className={styles.Cards__Button}>
            <a href="#medidas">Começar</a>
          </div>
        </div>

        <div className={styles.Cards__Geometria}>
          <div className={styles.iconWrapper}>
            <i className="material-icons-outlined">category</i>
          </div>
          <h2>Geometria</h2>
          <div className={`${styles.Tag} geometria`}>
            <ul>
              <li>
                <a href="#formas">Formas</a>
              </li>
            </ul>
          </div>
          <p className={styles.Cards__Paragrafo}>
            Ferramenta para cálculos geométricos:{" "}
            <span>calculadora de formas</span> para encontrar perímetros e
            áreas.
          </p>
          <div className={styles.Cards__Button}>
            <a href="#formas">Começar</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Descubra;
