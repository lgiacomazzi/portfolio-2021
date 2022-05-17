import styles from "../styles/components/Manifesto.module.css";
import { motion } from "framer-motion";
import Button from "../components/Button";


export default function Manifesto() {
  return (
    <section className={styles.manifesto}>
      <div className="container">
        <h1 className={styles.manifestoText}>
          hey there, i'm luciano — a product designer experienced in frontend development. Currently solving complex design challenges at Delivery Much.
        </h1>
        <div className={styles.manifestoActions}>
          <Button variant="secondary">Portfólio</Button>
          <Button variant="secondary">Sobre mim</Button>
          <Button variant="secondary">Contato</Button>
        </div>
      </div>
    </section>
  );
}
