
import styles from "../styles/components/ImageZoom.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0.8, scale: .5 },
}

export default function ImageZoom({src,alt}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={isOpen ? styles.imageContainerOpen : styles.imageContainer}>
        {isOpen && 
        <AnimatePresence>
            <motion.div
                animate="open"
                initial="closed"
                variants={variants}
                className={styles.imageOpen}
                onClick={() => setOpen(!isOpen)}>
                    {/* Imagem com Zoom */}
                    <div>
                        <img src={src} alt={alt}/>
                    </div>
                    <p className="text-body">{alt}</p>
            </motion.div> 
        </AnimatePresence> }
        {/* Imagem do documento */}
        <img src={src} alt={alt} onClick={() => setOpen(!isOpen)}/>
        <p className="text-center text-small text-secondary mb-3">{alt}</p>
    </div>
  );
};