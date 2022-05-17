import styles from "../styles/components/Manifesto.module.css";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { Box, Section } from "../components/Box";


export default function Manifesto() {
  return (
    <Section className={styles.manifesto} pt={120} pb={120}>
      <Box column gap={16}>
        <motion.h1 className={styles.manifestoText}>
          hey there, i'm luciano — a product designer experienced in frontend development. Currently solving complex design challenges at Delivery Much.
        </motion.h1>

        <Box row gap={8}>
          <Button>Portfólio</Button>
          <Button>Sobre mim</Button>
          <Button>Contato</Button>
        </Box>
      </Box>
    </Section>
  );
}
