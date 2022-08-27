import Head from "next/head";
import { motion } from "framer-motion";
import HeroImage from "../../components/HeroImage"
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import ImageZoom from "../../components/ImageZoom";
import Router from "next/router";

export default function Portfolio() {
    const variants = {
        hidden: { opacity: 0, x: 200 },
        enter: { opacity: 1, x: 0 },
        exit: { x: 200 },
    }

    const Paragraph = ({ children }) => (
        <p className="text-body">{children}</p>
    )

    return (
        <>
            <Head>
                <title>Doutora Fono | Luciano Giacomazzi </title>
            </Head>

            {/* Introdução */}
            <section id="header" className="pt-4 pb-4">
                <div className='container'>
                    <Button variant="secondary" size="small" onClick={() => Router.back()}><Icon icon="chevron-left" size={16} />Voltar</Button>
                    <motion.h2
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="mt-2 mb-2">Branding Design Doutora Fono
                    </motion.h2>
                    <motion.div className="col-lg-6"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}>
                        <Paragraph>Doutora Fono é um projeto de branding para a fonoaudióloga Rayane Fraga. O propósito da marca é apoiar na construção da identidade da fono para midias sociais trazendo clareza e conscistência na comunicação.</Paragraph>
                    </motion.div>
                </div>
            </section>

            <HeroImage src="/images/main/doutorafono.png" />

            <section className="pt-5 pb-2 bk-white">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-lg-6 m-auto">
                            <h2 className="mb-2">Pesquisa</h2>
                            <Paragraph>Por se tratar de um serviço de fonoaudiologia, exploramos a forma de uma boca para dar vida ao logo.Por se relacionar com crianças, mães e pessoas mais idosas, utilizamos uma paleta de cores divertida e moderna. </Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/doutorafono/refs.png" alt="" />
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </section>

            <section className="pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ImageZoom src="/images/fasesefaces/grid-01.png" alt="" />
                        </div>
                        <div className="col-lg-4">
                            <ImageZoom src="/images/fasesefaces/grid-02.png" alt="" />
                        </div>
                        <div className="col-lg-4">
                            <ImageZoom src="/images/fasesefaces/grid-03.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ImageZoom src="/images/fasesefaces/logo-def-01.png" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/fasesefaces/logo-def-02.png" alt="" />
                        </div>
                    </div>
                    <ImageZoom src="/images/fasesefaces/cards.png" alt="" />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <ImageZoom src="/images/fasesefaces/final-display-01.png" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <ImageZoom src="/images/fasesefaces/final-display-02.png" alt="" />
                    </div>
                </div>
                <div className="container">
                    <ImageZoom src="/images/fasesefaces/social.png" alt="" />
                    <ImageZoom src="/images/fasesefaces/final-logo.png" alt="" />
                </div>
            </section>

        </>
    );
}