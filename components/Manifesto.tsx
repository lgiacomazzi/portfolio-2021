import styles from "../styles/components/Manifesto.module.css";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Box from "../components/Box";


export default function Manifesto() {
  return (
    <section className={styles.manifesto + " container-fluid background-white"}>
      <Box type="col" gap={16}>
        <motion.h1 className={styles.manifestoText}>
          hey there, i'm luciano — a product designer experienced in frontend development. Currently solving complex design challenges at Delivery Much.
        </motion.h1>

        <div className={styles.manifestoActions}>
          <Button>Portfólio</Button>
          <Button>Sobre mim</Button>
          <Button>Contato</Button>
        </div>
      </Box>
    </section>
  );
}
