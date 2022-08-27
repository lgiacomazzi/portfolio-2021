import Head from "next/head";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Icon from "../components/Icon";
import ImageZoom from "../components/ImageZoom";
import Router from "next/router";
import Projects from "../components/Projects";
import { ExperienceContainer, ExperienceBubble } from "../components/ExperienceBubble";

export default function About() {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }

    const Paragraph = ({ children }) => (
        <p className="text-body">{children}</p>
    )

    return (
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
        >
            <Head>
                <title>Sobre mim | Luciano Giacomazzi </title>
            </Head>

            <section className="pt-4 pb-4 border-bottom">
                <div className="container">
                    <Button variant="secondary" size="small" onClick={() => Router.back()}><Icon icon="chevron-left" size={16} />Voltar</Button>
                    <h2 className="mt-2 mb-2">Sobre Mim</h2>
                    <div className="row mb-2">
                        <div className="col-lg-6 d-flex flex-column m-auto text-center align-items-center">
                            <ImageZoom style={{ borderRadius: "100%", width: "200px" }} src="/images/profile.jpg" alt="" />
                            <h2>luciano giacomazzi</h2>
                            <p className="text-secondary">Florianópolis, SC</p>
                            <Paragraph>Nascido no Rio Grande do Sul, me formei em Engenharia Mecânica pela UFRGS em Porto Alegre e migrei de área depois de descobrir o mundo do design de produtos. </Paragraph>
                            <Paragraph>Atualmente sou Designer de Produtos Sênior na Tribo de Backoffice e Payments da Delivery Much, em Florianópolis Santa Catarina.</Paragraph>
                            <Paragraph>Trabalho com projetos de design de experiência do usuário, programação frontend e desenvolvimento de marcas. </Paragraph>
                            <Button variant="secondary" size="small" >Currículo<Icon icon="download" size={16} /></Button>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </section>

            {/* Objetivo */}
            <section className="pt-4 pb-4 bk-light">
                <div className="container">
                    <h2 className="mb-1">Experiência</h2>
                    <ExperienceContainer>
                        <ExperienceBubble content={{
                            title: "Designer de Produtos Sênior",
                            company: "Delivery Much",
                            period: "Ago. 2021 - Hoje",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: "Hoje atuo como product designer nas equipes de Pagamentos e Backoffice. Na minha rotina, atuo com entrevistas, testes de usabilidade, análise de métricas, product discovery, criação de interfaces, entre outros. Além disso, estou envolvido no projeto de criação e documentação do design system da empresa."
                        }} />
                        <ExperienceBubble content={{
                            title: "UX/UI Designer",
                            company: "Voltbras",
                            period: "Out. 2020 - Ago. 2021",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                        }} />
                        <ExperienceBubble content={{
                            title: "Programador de RPA  ",
                            company: "Produttare Consultoria",
                            period: "Jun. 2019 - Ago. 2020",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                        }} />
                        <ExperienceBubble content={{
                            company: "Trust Code",
                            period: "Jun. 2018 - Jun. 2019",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                        }} />
                    </ExperienceContainer>
                </div>
            </section>

            <Projects />

        </motion.main>
    );
}