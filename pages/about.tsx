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
import { useTranslations } from "next-intl";

export default function About() {
    const about = useTranslations("About");

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
                    <Button variant="secondary" size="small" onClick={() => Router.back()}>
                        <Icon icon="chevron-left" size={16} />{about('back_button')}
                    </Button>
                    <h2 className="mt-2 mb-2">{about('page_title')}</h2>
                    <div className="row mb-2">
                        <div className="col-lg-6 d-flex flex-column m-auto text-center align-items-center">
                            <ImageZoom style={{ borderRadius: "100%", width: "200px" }} src="/images/profile.jpg" alt="" />
                            <h2>luciano giacomazzi</h2>
                            <SmallText><Icon icon="pin" size={12} />Florianópolis, SC</SmallText>
                            <div className="mt-2 d-flex flex-column text-center align-items-center">
                                <Paragraph>{about('bio_paragraph_01')}</Paragraph>
                                <Paragraph>{about('bio_paragraph_02')}</Paragraph>
                                <Paragraph>{about('bio_paragraph_03')}</Paragraph>
                                <Scratch02 />
                                <div className="mt-3 d-flex flex-column text-center justify-space-between align-items-center">
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
                    <h2 className="mb-2">{about("experience_title")}</h2>
                    <ExperienceContainer>
                        <ExperienceBubble content={{
                            title: about("role_01"),
                            company: "Delivery Much",
                            period: "Ago. 2021 - Hoje",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: about("description_role_01")
                        }} />
                        <ExperienceBubble content={{
                            title: about("role_02"),
                            company: "Voltbras",
                            period: "Out. 2020 - Ago. 2021",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: about("description_role_02")
                        }} />
                        <ExperienceBubble content={{
                            title: about("role_03"),
                            company: "Produttare Consultoria",
                            period: "Jun. 2019 - Ago. 2020",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: about("description_role_03")
                        }} />
                        <ExperienceBubble content={{
                            title: about("role_04"),
                            company: "Trust Code",
                            period: "Jun. 2018 - Jun. 2019",
                            location: "Florianópolis, Santa Catarina, Brasil",
                            image: "",
                            description: about("description_role_04")
                        }} />
                    </ExperienceContainer>
                </div>
            </section >

            <Projects />

        </motion.main >
    );
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}