import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage"
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import ImageZoom from "../../components/ImageZoom";
import Router from "next/router";
import BottomNavigation from "../../components/BottomNavigation"
import { useTranslations } from "next-intl";

export default function Portfolio() {
    const project = useTranslations('Home');

    const voltbras = (string: string) => {
        return useTranslations("Voltbras").rich(string, {
            bold: (children) => <b>{children}</b>,
        })
    }

    const variants = {
        hidden: { opacity: 0, },
        enter: { opacity: 1, y: 0 },
        exit: { y: 200 },
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
                <title>{voltbras('title')}| Luciano Giacomazzi </title>
            </Head>


            {/* Introdução */}
            <section id="header" className="pt-4 pb-4">
                <div className='container'>
                    <Button variant="secondary" size="small" onClick={() => Router.back()}>
                        <Icon icon="chevron-left" size={16} />{voltbras('back_button')}
                    </Button>
                    <motion.h3
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="mt-2 mb-3">
                        {voltbras('main')}
                    </motion.h3>
                    <motion.div
                        className="row"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">{voltbras('main_company_title')}</p>
                            <ul><li>Voltbras</li></ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">{voltbras('main_duration_title')}</p>
                            <ul>{voltbras('main_duration')}</ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">{voltbras('main_role_title')}</p>
                            <ul>{voltbras('main_role')}</ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">{voltbras('main_tools_title')}</p>
                            <ul>
                                <li>Figma,</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            <HeroImage src="/images/main/voltbras.png" />

            {/* Overview */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <h2 className="mb-2">{voltbras('h2_overview')}</h2>
                            <Paragraph>{voltbras('overview_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('overview_paragraph_02')}</Paragraph>
                            <Paragraph>{voltbras('overview_paragraph_03')}</Paragraph>
                            <Paragraph>{voltbras('overview_paragraph_04')}</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom
                                src="/images/voltbras/conectores.png"
                                alt="Tipos diferentes de conectores para veículos elétricos." />
                            <ImageZoom
                                src="/images/voltbras/map.png"
                                alt="Aproximadamente 435 quilômetros de distância, a viagem entre 
                                Rio e São Paulo requer varias paradas para carregar o veículo." />
                        </div>
                    </div>
                </div>
            </section>

            {/* Objective */}
            <section className="pt-4 pb-4 border-vertical">
                <div className="container">
                    <div className="col-lg-6">
                        <h2 className="mb-1">{voltbras('h2_objective')}</h2>
                        <Paragraph>{voltbras('objective_paragraph_01')}</Paragraph>
                        <Paragraph>{voltbras('objective_paragraph_02')}</Paragraph>
                        <Paragraph>{voltbras('objective_paragraph_03')}</Paragraph>
                    </div>
                </div>
            </section>

            {/* 01 - Discovery */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">I - DISCOVER</span>
                            <h2 className="mb-2">{voltbras('h2_discovery')}</h2>
                            <Paragraph>{voltbras('discovery_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('discovery_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom
                                src="/images/voltbras/csd.png"
                                alt="Matriz CSD contendo detalhes do problema a ser explorado" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h3 className="mb-2">{voltbras('h3_interviews')}</h3>
                            <Paragraph>{voltbras('interviews_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('interviews_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">{voltbras('h3_desk_research')}</h3>
                            <Paragraph>{voltbras('desk_research_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('desk_research_paragraph_02')}</Paragraph>
                            <Paragraph>{voltbras('desk_research_paragraph_03')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-4 m-auto">
                            <h3 className="mb-2">{voltbras('h3_personas')}</h3>
                            <Paragraph>{voltbras('personas_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('personas_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-8">
                            <ImageZoom
                                src="/images/voltbras/persona.png"
                                alt="Persona criada para referenciar decisões de design." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">{voltbras('h3_journeys')}</h3>
                            <Paragraph>{voltbras('journeys_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('journeys_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/voltbras/jornada.png" alt="Jornada do usuário na hora de viajar com um veículo elétrico." />
                        </div>
                    </div>
                </div>
            </section>

            {/* 02 - Definição */}
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">II - DEFINE</span>
                            <h2 className="mb-2">{voltbras('h2_define')}</h2>
                            <Paragraph>{voltbras('define_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('define_paragraph_02')}</Paragraph>
                            <Paragraph>{voltbras('define_paragraph_03')}</Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <ImageZoom
                                src="/images/voltbras/user-flow.png"
                                alt="Principais tapas de interação da funcionalidade de agendamento de recargas." />
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom
                                src="/images/voltbras/wire-flow.png"
                                alt="Fluxos de interação da funcionalidade com telas simplificadas de agendamento de recargas." />
                        </div>
                    </div>
                </div>
            </section>

            {/* Diamond 2 */}
            {/* 03 - Develop */}
            <section className="pt-5 bk-white">
                <div className="container">
                    <span className="text-secondary text-small mb-2">III - DESIGN</span>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h2 className="mb-2">{voltbras('h2_design')}</h2>
                            <Paragraph>{voltbras('design_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('design_paragraph_02')}</Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-2">{voltbras('h3_agenda')}</h3>
                            <Paragraph>{voltbras('agenda_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('agenda_paragraph_02')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-5 mt-lg-3">
                        <div className="col-lg-12">
                            <ImageZoom
                                src="/images/voltbras/agenda.png"
                                alt="Imagem mostrando telas da estação de recarga reservável, a agenda de um conector, os detalhes de um agendamento." />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">{voltbras('h3_pins')}</h3>
                            <Paragraph>{voltbras('pins_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('pins_paragraph_02')}</Paragraph>
                            <ImageZoom
                                src="/images/voltbras/pins-evolution.png"
                                alt="Iterações no desenho do pin e seu acessório." />
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom
                                src="/images/voltbras/pins-app.png"
                                alt="Imagem mostrando todos os possíveis pins e seus diferentes significados." />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h3 className="mb-2">{voltbras('h3_pushs')}</h3>
                            <Paragraph>{voltbras('pushs_paragraph_01')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mt-2 mb-2">
                        <div className="col-lg-12">
                            <ImageZoom
                                src="/images/voltbras/pushs.png"
                                alt="Combinação pushs e popups utilizadas para conduzir o usuário à recarga." />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-3">
                            <Paragraph>{voltbras('pushs_paragraph_02')}</Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h3 className="mb-2">{voltbras('h2_usability')}</h3>
                            <Paragraph>{voltbras('usability_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('usability_paragraph_02')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5">
                        <div className="col-lg-8 offset-lg-2">
                            <ImageZoom src="/images/voltbras/usabilidade.png" alt="Captura de tela de teste de usabilidade do aplicativo de reservas." />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-3">
                            <h2 className="mb-2">{voltbras('h2_results')}</h2>
                            <Paragraph>{voltbras('results_paragraph_01')}</Paragraph>
                            <Paragraph>{voltbras('results_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/voltbras/final.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <BottomNavigation content={{
                type: "UX Design",
                href: "delivery",
                imageUrl: "freedelivery.png",
                name: project('delivery_case_title'),
                description: project('delivery_case_description'),
            }} />

        </motion.main>
    );
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../../locales/${locale}.json`),
        },
    };
}