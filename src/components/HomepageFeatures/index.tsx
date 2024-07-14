import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="margin-vert--lg">
      <div className="container hero">
        <div className="row">
          <div className={clsx("col col--3")}>
            <img
              src={require("@site/static/img/photo.jpeg").default}
              style={{
                display: `inline-block`,
                marginBottom: 0,
                borderRadius: `50%`,
                backgroundClip: `padding-box`,
                border: `3px solid white`,
                boxShadow: `0px 0px 10px #c6c6c6`,
              }}
              width="200px"
            />
          </div>
          <div className={clsx("col col--8")}>
            <div className="padding-horiz--md">
              <p className={styles.title}>
                On this site you'll find my thoughts about things that interest
                me. <br />
              </p>
              <p className={styles.sectitle}>
                I hope you find something useful here. 💡
              </p>
              <p>
                If you have any questions or comments, feel free to{" "}
                <a
                  target="__blank"
                  href="https://www.linkedin.com/in/software-engineer-vinicius-morais-dutra/"
                  className="touchme"
                >
                  reach out to me.
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
