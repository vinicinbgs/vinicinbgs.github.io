import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="margin-vert--lg">
      <div className="container">
        <div className="row">
          <div className={clsx("col col--3")}>
            <img
              src={require("@site/static/img/network.webp").default}
              style={{
                display: `inline-block`,
                marginBottom: 0,
                borderRadius: `50%`,
                backgroundClip: `padding-box`,
                border: `3px solid white`,
                boxShadow: `0px 0px 10px #c6c6c6`,
              }}
              width="350px"
            />
          </div>
          <div className={clsx("col col--8 margin-top--md")}>
            <div className="padding-horiz--md">
              <p className={styles.title}>
                <Translate>
                  Minha Jornada na Engenharia e Arquitetura de Software
                </Translate>
              </p>
              <p className={styles.sectitle}>
                <Translate>
                  Tenho dedicado minha trajetória a explorar e implementar as
                  "melhores práticas" em engenharia e arquitetura de software.
                </Translate>
              </p>
              <p className={styles.sectitle}>
                <Translate>
                  Aqui, compartilho minhas experiências, lições aprendidas e as
                  últimas tendências que estão moldando o futuro do
                  desenvolvimento de software.
                </Translate>
              </p>
              <p>
                <Translate>Se tiver alguma dúvida ou comentário,</Translate>{" "}
                <a
                  target="__blank"
                  href="https://www.linkedin.com/in/software-engineer-vinicius-morais-dutra/"
                  className="touchme"
                >
                  <Translate>me mande mensgem.</Translate>
                </a>
              </p>
            </div>
          </div>
          <div className={clsx("col col--1")}></div>
        </div>
      </div>
    </section>
  );
}
