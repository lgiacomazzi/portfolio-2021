import styles from "../styles/components/About.module.css";
import Image from "next/image";
import Button from "./Button";
import Icon from "./Icon";

export default function About() {
    return (
        <section id="start" className={styles.about}>
            <div className={styles.aboutImage}>
                <Image src={"/images"} objectFit="cover" layout="fill" />
            </div>
            <div className={styles.aboutText}>
                <p className="">Apaixonado por tecnologia, tenho formação em engenharia e migrei para o design. Sou original de Porto Alegre mas atualmente moro em Florianópolis.</p>
                <Button size="small"><Icon icon="download" size={24} />Currículo</Button>
                <Button variant="secondary" size="small">Portfólio</Button>
            </div>
        </section>
    )
}