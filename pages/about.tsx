import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage"
import Button from "../components/Button";
import Icon from "../components/Icon";
import ImageZoom from "../components/ImageZoom";
import Router from "next/router";

export default function About() {
    const Paragraph = ({ children }) => (
        <p className="text-body">{children}</p>
    )

    const ExperienceBubble = ({ children }) => (
        <div className="text-body">{children}</div>
    )

    return (
        <>
            <Head>
                <title>Sobre mim | Luciano Giacomazzi </title>
            </Head>

            <Header />

            <section className="pt-5 pb-5 border-bottom">
                <div className="container">
                    <Button variant="secondary" size="small" onClick={() => Router.back()}><Icon icon="chevron-left" size={16} />Voltar</Button>
                    <motion.h2
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="mt-2 mb-2">Sobre Mim
                    </motion.h2>
                    <div className="row mb-2">
                        <div className="col-lg-6 m-auto text-center">
                            <ImageZoom style={{ borderRadius: "100%", width: "200px" }} src="/images/profile.jpg" alt="" />
                            <h2>luciano giacomazzi</h2>
                            <p className="text-secondary">Florianópolis, SC</p>
                            <p className="text-secondary mb-2">1994 - Hoje</p>
                            <Paragraph>Nascido no Rio Grande do Sul, me formei em Engenharia Mecânica pela UFRGS em Porto Alegre e migrei de área depois de descobrir o mundo do design de produtos. </Paragraph>
                            <Paragraph>Atualmente sou Designer de Produtos Sênior na Tribo de Backoffice e Payments da Delivery Much, em Florianópolis Santa Catarina.</Paragraph>
                            <Paragraph>Trabalho com projetos de design de experiência do usuário, programação frontend e desenvolvimento de marcas. </Paragraph>
                            <Button variant="secondary" size="small" ><Icon icon="download" />Currículo</Button>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </section>

            {/* Objetivo */}
            <section className="pt-4 pb-4 border">
                <div className="container">
                    <div className="col-lg-6">
                        <h2 className="mb-1">Experiência</h2>
                        <ExperienceBubble>Delivery Much</ExperienceBubble>
                        <ExperienceBubble>Voltbras</ExperienceBubble>
                        <ExperienceBubble>Produttare</ExperienceBubble>
                        <ExperienceBubble>TrustCode</ExperienceBubble>

                    </div>
                </div>
            </section>

            {/* 01 - Discovery */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">I - DISCOVER</span>
                            <h2 className="mb-2">Entendendo o contexto e descobrindo problemas</h2>
                            <Paragraph>Durante esta etapa, conversamos com diversos stakeholders para entender mais sobre as visões para o produto e <b>benefícios para os usuários.</b></Paragraph>
                            <Paragraph>Levantamos quais as eram as certezas, suposições e dúvidas dentro do escopo do projeto e definimos quais principais pontos que precisariam ser explorados com pesquisas. </Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}