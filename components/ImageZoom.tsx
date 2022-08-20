
import styles from "../styles/components/ImageZoom.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
}

export default function ImageZoom({src,alt}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <AnimatePresence>
        <div className={isOpen ? styles.imageContainerOpen : styles.imageContainer}>
            <motion.img src={src} alt={alt} layoutId="teste"  onClick={() => setOpen(!isOpen)}/>   
            <p className="text-center text-small text-secondary mb-3">{alt}</p>
            
            {isOpen && 
                <motion.div
                    className={styles.imageOpen}
                    onClick={() => setOpen(!isOpen)}>
                        {/* Imagem com Zoom */}
                        <div>
                            <motion.img src={src} alt={alt} layoutId="teste"/>
                        </div>
                        <p className="text-body">{alt}</p>
                </motion.div> 
            }
        </div>
    </AnimatePresence>
  );
};