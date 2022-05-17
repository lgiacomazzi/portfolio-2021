import Image from "next/image";
import styles from "../styles/components/HeroImage.module.css"

export default function HeroImage({ src }) {
    return (
        <section className={styles.HeroImage}>
            <Image
                layout="intrinsic"
                width={1120}
                height={540}
                src={src} />
        </section>
    )
}