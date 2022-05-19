import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/components/HeroImage.module.css"

export default function HeroImage({ src }) {
    return (
        <AnimatePresence>
            <motion.div className={styles.HeroImage} layoutId="voltbras">
                <Image
                    layout="fill"
                    unoptimized
                    objectFit="cover"
                    priority
                    src={src} />
            </motion.div>
        </AnimatePresence>
    )
}