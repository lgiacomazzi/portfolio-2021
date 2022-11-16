import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage"
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import ImageZoom from "../../components/ImageZoom";
import Router from "next/router";
import BottomNavigation from "../../components/BottomNavigation"
import InlineLink from "../../components/InlineLink";
import { useTranslations } from "next-intl";

export default function Portfolio() {
    const project = useTranslations('Home');

    const delivery = (string: string) => {
        return useTranslations("Delivery").rich(string, {
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
                <title>{delivery('title')} | Luciano Giacomazzi </title>
            </Head>


            {/* Introdução */}
            <section id="header" className="pt-4 pb-4">
                <div className='container'>
                    <Button variant="secondary" size="small" onClick={() => Router.back()}>
                        <Icon icon="chevron-left" size={16} />{delivery('back_button')}
                    </Button>          
                    <motion.h3
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="mt-2 mb-3">{delivery('main')}
                    </motion.h3>
                    <motion.div
                        className="row"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">{delivery('main_company_title')}</p>
                            <ul><InlineLink>Delivery Much</InlineLink></ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">{delivery('main_duration_title')}</p>
                            <ul><li>{delivery('main_duration')}</li></ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">{delivery('main_role_title')}</p>
                            <ul>{delivery('main_role')}</ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">{delivery('main_tools_title')}</p>
                            <ul>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            <HeroImage src="/images/main/freedelivery.png" />

            {/* Desafio */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-2">
                        <h2 className="mb-2">{delivery('h2_overview')}</h2>
                        <div className="col-lg-6">
                            <Paragraph>{delivery('overview_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('overview_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <Paragraph>{delivery('overview_paragraph_03')}</Paragraph>
                            <Paragraph>{delivery('overview_paragraph_04')}</Paragraph>
                            {/* <Zoom src={"/images/voltbras/conectores.png"} layout="responsive" width={200} height={150} /> */}
                        </div>
                    </div>
                    <div className="row">
                        <ImageZoom src="/images/delivery/promo.png" alt="Tipos diferentes de promoções e como elas podem aparecer no app." />
                    </div>
                </div>
            </section>

            {/* Objetivo */}
            <section className="pt-4 pb-4 border-vertical">
                <div className="container">
                    <div className="col-lg-6">
                        <h2 className="mb-1">{delivery('h2_objective')}</h2>
                        <Paragraph>{delivery('objective_paragraph_01')}</Paragraph>
                        <Paragraph>{delivery('objective_paragraph_02')} </Paragraph>
                        <Paragraph>{delivery('objective_paragraph_03')} </Paragraph>
                    </div>
                </div>
            </section>

            {/* 01 - Discovery */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">I - DISCOVER</span>
                            <h2 className="mb-2">{delivery('h2_discovery')}</h2>
                            <Paragraph>{delivery('discovery_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('discovery_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/delivery/csd.png" alt="Matriz CSD contendo detalhes do problema a ser explorado." />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <h3 className="mb-2">{delivery('h3_dinamic')}</h3>
                        <div className="col-lg-6">
                            <Paragraph>{delivery('dinamic_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('dinamic_paragraph_02')}</Paragraph>
                            <Paragraph>{delivery('dinamic_paragraph_03')}</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/delivery/cdm-01.png" alt="" />
                            <ImageZoom src="/images/delivery/cdm-03.png" alt="Foto das dinâmicas realizadas na CDM sobre o fluxo promocional das lojas parceiras" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <h3 className="mb-2">{delivery('h3_interviews')}</h3>
                        <div className="col-lg-6">
                            <Paragraph>{delivery('interviews_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('interviews_paragraph_02')}</Paragraph>
                            <Paragraph>{delivery('interviews_paragraph_03')}</Paragraph>
                            <Paragraph>{delivery('interviews_paragraph_04')}</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <Paragraph>{delivery('interviews_paragraph_05')}</Paragraph>
                            <Paragraph>{delivery('interviews_paragraph_06')}</Paragraph>
                            <Paragraph>{delivery('interviews_paragraph_07')}</Paragraph>
                            <Paragraph>{delivery('interviews_paragraph_08')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <h3 className="mb-2">{delivery('h3_journeys')}</h3>
                            <Paragraph>{delivery('journeys_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('journeys_paragraph_02')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-12 m-auto">
                            <ImageZoom src="/images/delivery/journeys.png" alt="Jornada dos usuários necessária para realizar um pedido com um desconto na entrega." />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <h3 className="mb-2">Benchmarking</h3>
                            <Paragraph>{delivery('benchmarking_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('benchmarking_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/delivery/benchmarking.png" alt="Tabela mostrando aspectos de diferenciação entre o produto da empresa e seus concorrentes." />
                        </div>
                    </div>

                </div>
            </section>

            {/* 02 - Definição */}
            {/* <h3 className="mb-2">Key Findings and Insights</h3> */}
            {/* <h3 className="mb-2">Product Scope (User Stories) </h3> */}
            <section className="pb-5">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">II - DEFINE</span>
                            <h2 className="mb-2">{delivery('h2_define')}</h2>
                            <Paragraph>{delivery('define_paragraph_01')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-12 m-auto">
                            <ImageZoom src="/images/delivery/story-map.png" alt="User Story Map para o projeto de Entregas Promocionais" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <Paragraph>{delivery('define_paragraph_02')}</Paragraph>
                            <Paragraph>{delivery('define_paragraph_03')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-12 m-auto">
                            <ImageZoom src="/images/delivery/product-definition.png" alt="Principais obstáculos de interação na funcionalidade de entrega promocional." />
                        </div>
                    </div>
                </div>
            </section>

            {/* Diamond 2 */}
            {/* 03 - Develop */}
            <section className="bk-white">
                <div className="container">
                    <span className="text-secondary text-small mb-2">III - DESIGN</span>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h2 className="mb-2">{delivery('h2_design')}</h2>
                            <Paragraph>{delivery('design_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('design_paragraph_02')}</Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-2">{delivery('h3_delivery_plans')}</h3>
                            <Paragraph>{delivery('plans_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('plans_paragraph_02')}</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-5 mt-lg-3">
                        <div className="col-lg-12">
                            <ImageZoom src="/images/delivery/plans.png" alt="Um plano de entregas é uma listagem de todos os bairros e áreas de entrega cadastradas em uma dada cidade." />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">{delivery('h3_delivery_banners')}</h3>
                            <Paragraph>{delivery('banner_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('banner_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/delivery/list.png" alt="Imagem mostrando as diferentes visualizações de destaques promocionais no aplicativo." />

                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">{delivery('h3_free_delivery')}</h3>
                            <Paragraph>{delivery('free_delivery_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('free_delivery_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/delivery/minimum-order.png" alt="Item da listagem mostrando como aparece para uma loja quando ela possui entrega grátis disponível." />
                        </div>
                    </div>
                    <div className="row mt-2 mb-4">

                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 mb-3">
                            <h3 className="mb-2">{delivery('h3_billing')}</h3>
                            <Paragraph>{delivery('billing_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('billing_paragraph_02')}</Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h2 className="mb-2">{delivery('h2_usability')}</h2>
                            <Paragraph>{delivery('usability_paragraph_01')}</Paragraph>
                            <Paragraph>{delivery('usability_paragraph_02')}</Paragraph>
                        </div>
                        <div className="col-lg-6 ">
                            <ImageZoom src="/images/delivery/usability.png" alt="Captura de tela de teste de usabilidade do aplicativo de reservas." />
                        </div>
                    </div>
                    <div className="row mt-2 mb-5">

                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-3">
                            <h2 className="mb-2">{delivery('h2_results')}</h2>
                            <Paragraph>{delivery('results_paragraph_01')}</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/delivery/final.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <BottomNavigation content={{
                type: "UX Deisgn",
                href: "voltbras",
                imageUrl: "voltbras.png",
                name: project('voltbras_case_title'),
                description: project('voltbras_case_description')
            }} />

        </motion.main >
    );
}

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../../locales/${locale}.json`),
        },
    };
}