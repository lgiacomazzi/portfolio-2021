
import styles from "../styles/components/ImageZoom.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ImageZoom({src,alt}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={isOpen ? styles.imageContainerOpen : styles.imageContainer}>
        { isOpen &&
            <motion.div
                className={styles.imageOpen}
                onClick={() => setOpen(!isOpen)}>
                    {/* Imagem com Zoom */}
                    <img src={src} alt={alt}/>
                    <p className="text-body">{alt}</p>
            </motion.div> 
        }
        {/* Imagem do documento */}
        <img src={src} alt={alt} onClick={() => setOpen(!isOpen)}/>
        <p className="text-center text-small text-secondary mb-3">{alt}</p>
    </div>
  );
};