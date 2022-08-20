
import styles from "../styles/components/ImageZoom.module.css";
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: .5 },
}

export default function ImageZoom({src,alt}) {
    const [isOpen, setOpen] = useState(false);

    isOpen && window.document.addEventListener("scroll", () => setOpen(false), { once: true });
    
    const BodyImage = () => (
        <motion.div className={styles.imageContainer} >
            <motion.img 
                src={src} 
                alt={alt} 
                className={styles.image}
                onClick={() => setOpen(!isOpen)} 
                layoutId={src.split('/')[3]}
                />   
            <p className="text-center text-small text-secondary mb-3">{alt}</p>                         
        </motion.div>
    );

    const OverlayImage = () => (
        isOpen &&
        <motion.div   
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            transition={{ duration: 2 }}   
            className={styles.imageContainerOpen}
            onClick={() => setOpen(!isOpen)}
            onScroll={() => setOpen(!isOpen)}
            >
                <motion.img className={styles.imageOpen} src={src} alt={alt} layoutId={src.split('/')[3]}/>
                <p className="text-body">{alt}</p>
        </motion.div>
    );

    return (
            <AnimateSharedLayout>
                <BodyImage />
                <AnimatePresence>
                    <OverlayImage/>
                </AnimatePresence>
            </AnimateSharedLayout>
    );
  };
// export default function ImageZoom({src,alt}) {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <AnimateSharedLayout>
//         <div className={isOpen ? styles.imageContainerOpen : styles.imageContainer}>
//             <motion.img src={src} alt={alt} layoutId={src.split('/')[3]} onClick={() => setOpen(!isOpen)}/>   
//             <p className="text-center text-small text-secondary mb-3">{alt}</p>
            
//             {isOpen && 
//             <AnimatePresence>
//                 <motion.div
//                     animate={isOpen ? "open" : "closed"}
//                     exit="closed"
//                     className={styles.imageOpen}
//                     onClick={() => setOpen(!isOpen)}>
//                         {/* Imagem com Zoom */}
//                         <div>
//                             <motion.img src={src} alt={alt} layoutId={src.split('/')[3]} />
//                         </div>
//                         <p className="text-body">{alt}</p>
//                 </motion.div>
//             </AnimatePresence> 
//             }
//         </div>
//     </AnimateSharedLayout>
//   );
// };