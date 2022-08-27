import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Router from "next/router";
import Button from "../components/Button";
import Header from "../components/Header";
import Icon from "../components/Icon";

export default function Contact() {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
        >
            <Head>
                <title>Contato</title>
            </Head>

            <section className="pt-4 pb-4 border-bottom">
                <div className="container">
                    <Button variant="secondary" size="small" onClick={() => Router.back()}><Icon icon="chevron-left" size={16} />Voltar</Button>
                    <h2 className="mt-2 mb-2">Contato</h2>
                    <div className="row">

                    </div>
                </div>
            </section>
        </motion.main >
    )
}
