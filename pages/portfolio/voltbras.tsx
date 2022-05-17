import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage"
import { Box, Section } from "../../components/Box";
import Image from "next/image";

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Header />

            <section id="header" className="pt-5 pb-5 bk-white">
                <div className='container mb-5'>
                    <h1>O aplicativo de recargas da Voltbras oferece aos usuários a possibilidade de encontrar uma estação  nas proximidades para carregar o seu veículo elétrico. Fiz parte de um projeto que construiu a nova experiência de agendamento em um conector.
                    </h1>
                </div>
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <p>Meu Papel</p>
                            <ul>
                                <li>User research,</li>
                                <li>Prototipagem,</li>
                                <li>Interface Design</li>
                            </ul>
                        </div>
                        <div className="col">
                            <p>Empresa</p>
                            <ul><li>Voltbras</li></ul>
                        </div>
                        <div className="col">
                            <p>Duração</p>
                            <ul><li>4 meses</li></ul>
                        </div>
                        <div className="col">
                            <p>Ferramentas</p>
                            <ul>
                                <li>Figma,</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <HeroImage src="/images/voltbras.png" />

            <section className="pt-5 pb-5 bk-white">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="mb-4">Desafio</h2>
                            <p className="text-body">Um dos pontos de dificuldade dos usuários na hora de viajar longas distâncias era não encontrar estações para carregar o carro e finalizar a viagem.</p>
                            <p className="text-body">Dependendo do trajeto escolhido, podem ou não existir estações compatíveis com o veículo do usuário e se existirem, precisam estar livres para uso.</p>
                            <p className="text-body">Os usuários reportaram que era comum aguardar, muitas vezes em filas, para carregar na única estação disponível da região. </p>
                        </div>
                        <div className="col-lg-6">
                            <img width={500} src="/images/voltbras/map.png" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col col-lg-6">
                        <p className="text-body">Dentro do roadmap de produto, foi priorizado o desenvolvimento de uma funcionalidade para melhor atender esses usuários a viajar e assim realizar mais recargas pelo app.</p>
                    </div>
                    <div className="col col-lg-6">
                        <p className="text-body">Atuei como UX designer no time agile composto por desenvolvedores iOS e Android, um desenvolvedor backend e um product owner. Fui responsável pela execução do projeto de pesquisa e design da experiência.</p>
                    </div>
                </div>
            </section>
        </div >
    );
}