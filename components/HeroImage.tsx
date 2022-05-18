import Image from "next/image";
import styles from "../styles/components/HeroImage.module.css"

export default function HeroImage({ src }) {
    return (
        <section className={styles.HeroImage}>
            <Image
                layout="fill"
                objectFit="cover"
                priority
                src={src} />
        </section>
    )
}