import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage"
import Image from "next/image";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Header />

            <section id="header" className="pt-4 pb-4 bk-white">
                <div className='container'>
                    <motion.h2 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5 }} className="mb-3">O aplicativo de recargas da Voltbras oferece aos usuários a possibilidade de encontrar uma estação  nas proximidades para carregar o seu veículo elétrico. Fiz parte de um projeto que construiu a nova experiência de agendamento em um conector.
                    </motion.h2>
                    <motion.div
                        className="row"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-undeline">Empresa</p>
                            <ul><li>Voltbras</li></ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-undeline">Duração</p>
                            <ul><li>4 meses</li></ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-undeline">Meu Papel</p>
                            <ul>
                                <li>User research,</li>
                                <li>Prototipagem,</li>
                                <li>Interface Design</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-undeline">Ferramentas</p>
                            <ul>
                                <li>Figma,</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            <HeroImage src="/images/voltbras.png" />

            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <h2 className="mb-2">Desafio</h2>
                            <p className="text-body">Um dos pontos de dificuldade dos usuários na hora de viajar longas distâncias era não encontrar estações para carregar o carro e finalizar a viagem.</p>
                            <p className="text-body">Dependendo do trajeto escolhido, podem ou não existir estações compatíveis com o veículo do usuário e se existirem, precisam estar livres para uso.</p>
                            <p className="text-body">Os usuários reportaram que era comum aguardar, muitas vezes em filas, para carregar na única estação disponível da região. </p>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-5">
                            <img width={500} src="/images/voltbras/map.png" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <p className="text-body">Dentro do roadmap de produto, foi priorizado o desenvolvimento de uma funcionalidade para melhor atender esses usuários a viajar e assim realizar mais recargas pelo app.</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-body">Atuei como UX designer no time agile composto por desenvolvedores iOS e Android, um desenvolvedor backend e um product owner. Fui responsável pela execução do projeto de pesquisa e design da experiência.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objetivo */}
            <section className="pt-4 pb-4 bk-light">
                <div className="container">
                    <h4 className="mb-2">Objetivo</h4>
                    <p className="text-lead">Criar uma experiência para os usuários do aplicativo que diminua a ansiedade na hora de viajar longas distâncias.</p>
                </div>
            </section>

            {/* Discovery */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <h2 className="mb-2">Discovery</h2>
                            <p className="text-body">Durante a etapa de pesquisa, realizei conversas com diversos stakeholders para entender mais sobre o domínio do problema e suas as visões para o produto e negócio.</p>
                            <p className="text-body">Levantamos quais as eram as certezas, suposições e dúvidas com relação ao projeto e definimos quais principais aspectos que precisariam ser melhor explorados nas próximas etapas.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="text-body mb-4">Dentro do roadmap de produto, foi priorizado o desenvolvimento de uma funcionalidade para melhor atender esses usuários a viajar e assim realizar mais recargas pelo app.</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-body">Atuei como UX designer no time agile composto por desenvolvedores iOS e Android, um desenvolvedor backend e um product owner. Fui responsável pela execução do projeto de pesquisa e design da experiência.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}