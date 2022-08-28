import Head from "next/head";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Icon from "../components/Icon";
import ImageZoom from "../components/ImageZoom";
import Router from "next/router";
import Projects from "../components/Projects";
import { ExperienceContainer, ExperienceBubble } from "../components/ExperienceBubble";
import { SmallText } from "../components/Text";
import InlineLink from "../components/InlineLink";
import Scratch02 from "../public/svg/scratch02.svg"

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
                            <SmallText><Icon icon="pin" size={12} />Florianópolis, SC</SmallText>
                            <div className="mt-2 d-flex flex-column text-center align-items-center">
                                <Paragraph>Nascido no Rio Grande do Sul, tenho formação em Engenharia Mecânica pela UFRGS em Porto Alegre, sempre fui apaixonado por tecnologia e migrei para o design de produtos em 2020. </Paragraph>
                                <Paragraph>Atualmente sou Designer de Produtos Sênior nas Tribos de Payments e Backoffice da Delivery Much em Florianópolis, Santa Catarina.</Paragraph>
                                <Paragraph>Hoje, trabalho com projetos de design de experiência do usuário, programação criativa frontend e desenvolvimento de identidade de marcas.</Paragraph>
                                <Scratch02 />
                                <div className="mt-2 d-flex flex-column text-center justify-space-between align-items-center">
                                    <Paragraph><InlineLink href="mailto:lucianogiacomazzi@gmail.com">lucianogiacomazzi@gmail.com</InlineLink></Paragraph>
                                    <Paragraph><InlineLink href="tel:+ 55 51 99829 0763">+ 55 51 99829 0763</InlineLink></Paragraph>
                                    <Paragraph><InlineLink href="https://www.linkedin.com/in/lgiacomazzi/">Linked In</InlineLink></Paragraph>
                                    {/* <Button variant="secondary" size="small" >Currículo<Icon icon="download" size={16} /></Button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Objetivo */}
            < section className="pt-4 pb-4 bk-light" >
                <div className="container">
                    <h2 className="mb-1">Experiência</h2>
                    <ExperienceContainer>
                        <ExperienceBubble content={{
                            title: "Designer de Produtos Sênior",
                            company: "Delivery Much",
                            period: "Ago. 2021 - Hoje",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: "Hoje atuo como product designer nas equipes de Pagamentos e Backoffice. Na minha rotina, realizo product discovery e entrevistas exploratórias, defino requisitos de produto e analiso de métricas para priorização de roadmap, faço o design das interfaces das aplicações internas da empresa e conduzo testes de usabilidade. Além disso, estou envolvido no projeto de criação e documentação do Design System da empresa."
                        }} />
                        <ExperienceBubble content={{
                            title: "UX/UI Designer",
                            company: "Voltbras",
                            period: "Out. 2020 - Ago. 2021",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: "Responsável por todas as atividades de design de experiência do usuário na Voltbras. Condução de pesquisas exploratórias, design de interfaces e testes de usabilidade. Junto do time, criamos features valiosas para a Startup como Agendamento de Recargas, Pagamento Online e Dashboard de Operações."
                        }} />
                        <ExperienceBubble content={{
                            title: "Programador de RPA  ",
                            company: "Produttare Consultoria",
                            period: "Jun. 2019 - Ago. 2020",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: "Consultor responsável por desenvolver e implementar processos automatizados por meio de robôs, Robotic Process Automation, RPA. Realizei diversos tipos de automatizações utilizando sistemas internos de clientes, buscando redução de custos e redução de esforço."
                        }} />
                        <ExperienceBubble content={{
                            title: "Consultor de Implantação",
                            company: "Trust Code",
                            period: "Jun. 2018 - Jun. 2019",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: "Responsável por projetos de implantação do sistema ERP em empresas e Startup Brasileiras, parametrização do sistema e consultorias voltadas para implementação das necessidades do Cliente. Análise e levantamento de requisitos e consequentemente adaptações à módulos e extensões em Python, HTML, CSS e Javascript."
                        }} />
                    </ExperienceContainer>
                </div>
            </section >

            <Projects />

        </motion.main >
    );
}