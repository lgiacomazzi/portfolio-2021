import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Router from "next/router";
import Button from "../components/Button";
import Header from "../components/Header";
import Icon from "../components/Icon";
import InlineLink from "../components/InlineLink";
import { Paragraph } from "../components/Text";

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

            <section className="pt-4 pb-4">
                <div className="container">
                    <Button variant="secondary" size="small" onClick={() => Router.back()}><Icon icon="chevron-left" size={16} />Voltar</Button>
                    <h2 className="mt-2 mb-2">Contato</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <Paragraph>Você pode me contatar pelos seguintes canais:</Paragraph>
                            <div className="ml-2">
                                <Paragraph><InlineLink>lucianogiacomazzi@gmail.com</InlineLink></Paragraph>
                                <Paragraph><InlineLink>+ 55 51 99829 0763</InlineLink></Paragraph>
                                <Paragraph><InlineLink>Linkedin</InlineLink></Paragraph>
                                <Paragraph><InlineLink>Github</InlineLink></Paragraph>
                                <Paragraph><InlineLink>Instagram</InlineLink></Paragraph>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 d-flex flex-column">
                            <Paragraph>ou você pode deixar uma mensagem por aqui  :)</Paragraph>
                            <Paragraph>email:<input></input></Paragraph>
                            <Paragraph>mensagem:<input></input></Paragraph>
                        </div> */}
                    </div>
                </div>
            </section>
        </motion.main >
    )
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}
