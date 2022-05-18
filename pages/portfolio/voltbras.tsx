import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage"
import Image from "next/image";
import Button from "../../components/Button";
import Icon from "../../components/Icon";


export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Header />

            {/* Introdução */}
            <section id="header" className="pt-4 pb-4 bk-white">
                <div className='container'>
                    <motion.h2
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="mb-3">O aplicativo de recargas da Voltbras oferece aos usuários a possibilidade de encontrar uma estação  nas proximidades para carregar o seu veículo elétrico. Fiz parte de um projeto que construiu a nova experiência de agendamento em um conector.
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

            <section className="portfolio-section pt-5 pb-5 bk-white">
                <div className="container">
                    <h2 className="mb-2">Desafio</h2>
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <p className="text-body">Um dos pontos de dificuldade dos usuários na hora de viajar longas distâncias era não encontrar estações para carregar o carro e finalizar a viagem.</p>
                            <p className="text-body">Dependendo do trajeto escolhido, podem ou não existir estações compatíveis com o veículo do usuário e se existirem, precisam estar livres para uso.</p>
                            <p className="text-body mb-2">Os usuários reportaram que era comum aguardar, muitas vezes em filas, para carregar na única estação disponível da região. </p>
                        </div>
                        <div className="col-lg-6">
                            <img width={500} src="/images/voltbras/map.png" />
                            <p className="text-center text-small text-secondary mb-2">Aproximadamente 435 quilômetros de distância, a viagem entre Rio e São Paulo requer varias paradas para carregar o veículo.</p>
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
                    <p className="text-secondary mb-2">Objetivo</p>
                    <p className="text-lead">Criar uma experiência para os usuários do aplicativo que diminua a ansiedade na hora de viajar longas distâncias.</p>
                </div>
            </section>

            {/* Discovery */}
            <section className="portfolio-section pt-5 pb-5 bk-white">
                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">01</span>
                            <h2 className="mb-2">Discovery</h2>
                            <p className="text-body">Durante a etapa de pesquisa, realizei conversas com diversos stakeholders para entender mais sobre o domínio do problema e suas as visões para o produto e negócio.</p>
                            <p className="text-body">Levantamos quais as eram as certezas, suposições e dúvidas com relação ao projeto e definimos quais principais aspectos que precisariam ser melhor explorados nas próximas etapas.</p>
                        </div>
                    </div>
                    <h4 className="mb-2">Entrevistas com usuários</h4>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <p className="text-body mb-2">Conduzimos entrevistas com alguns usuários para entender melhor os diferentes contextos de recarga, quais os principais desejos, necessidades e frustrações dos usuários durante o processo.</p>
                            <img width={500} src="/images/voltbras/interview.png" className="mb-2" />
                        </div>
                        <div className="col-lg-6">
                            <p className="text-body mb-2">O roteiro buscou validar a necessidade de se planejar para carregar o veículo entendendo melhor a diferença de comportamento dos usuários entre uma recarga no dia-a-dia e eventual necessidade de recarga durante uma viagem.</p>
                            <p className="text-body mb-2">As entrevistas forneceram insights sobre o que os usuários pensam sobre o assunto e quais as principais dificuldades durante o uso do aplicativo de recarga no contexto de viagens.</p>
                        </div>
                    </div>
                    <h4 className="mb-2">Desk Research</h4>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <p className="text-body mb-2">Também revisamos restrições técnicas da estação de recarga e do conector com as equipes de controle e monitoramento. Buscamos entender o funcionamento da tecnologia de reservas nas estações e quais aspectos precisavam ser levados em consideração ao desenhar a experiência virtual do usuário no aplicativo.  </p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-body">Estudamos o mercado dentro e fora do Brasil, principalmente como os usuários lidam com este tipo de problema em diferentes níveis de maturidade e como outras empresas já resolveram este tipo de desafio.</p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-4">
                        <div className="col-lg-6">
                            <h4 className="mb-2">Personas</h4>
                            <p className="text-body">Construímos personas ao longo do projeto para para criar empatia em nossa equipe e ajudar com a visualização das principais necessidades dos usuários. </p>
                            <p className="text-body mb-2">Depois de segmentar tipos diferentes de persona pudemos orientar decisões de produto e priorizar quais os cenários que iríamos nos concentraríamos nos estágios iniciais.</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img width={500} src="/images/voltbras/persona.png" />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <h4 className="mb-2">Jornada do usuário</h4>
                            <p className="text-body mb-2">Usamos técnicas de mapeamento de experiência para visualizar e comunicar a experiência de ponta a ponta dos usuários em vários pontos de contato como aplicativo, seu veículo e o ponto de carregamento.</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img width={500} src="/images/voltbras/jornada.png" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Definição */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container mb-5">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">01</span>
                            <h2 className="mb-2">Discovery</h2>
                            <p className="text-body">Durante a etapa de pesquisa, realizei conversas com diversos stakeholders para entender mais sobre o domínio do problema e suas as visões para o produto e negócio.</p>
                            <p className="text-body">Levantamos quais as eram as certezas, suposições e dúvidas com relação ao projeto e definimos quais principais aspectos que precisariam ser melhor explorados nas próximas etapas.</p>
                        </div>
                    </div>
                    <h4 className="mb-2">Entrevistas com usuários</h4>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <p className="text-body mb-2">Conduzimos entrevistas com alguns usuários para entender melhor os diferentes contextos de recarga, quais os principais desejos, necessidades e frustrações dos usuários durante o processo.</p>
                            <img width={500} src="/images/voltbras/map.png" className="mb-2" />
                        </div>
                        <div className="col-lg-6">
                            <p className="text-body mb-2">O roteiro buscou validar a necessidade de se planejar para carregar o veículo entendendo melhor a diferença de comportamento dos usuários entre uma recarga no dia-a-dia e eventual necessidade de recarga durante uma viagem.</p>
                            <p className="text-body mb-2">As entrevistas forneceram insights sobre o que os usuários pensam sobre o assunto e quais as principais dificuldades durante o uso do aplicativo de recarga no contexto de viagens.</p>
                        </div>
                    </div>
                    <h4 className="mb-2">Desk Research</h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="text-body">Também revisamos restrições técnicas da estação de recarga e do conector com as equipes de controle e monitoramento. Buscamos entender o funcionamento da tecnologia de reservas nas estações e quais aspectos precisavam ser levados em consideração ao desenhar a experiência virtual do usuário no aplicativo.  </p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-body">Estudamos o mercado dentro e fora do Brasil, principalmente como os usuários lidam com este tipo de problema em diferentes níveis de maturidade e como outras empresas já resolveram este tipo de desafio.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forward Navigation */}
            <section className="pt-5 pb-5 bk-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-center">
                            <Button variant="secondary-white"><Icon icon="arrow-left" />Anterior</Button>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <Button variant="secondary-white">Próximo <Icon icon="arrow-right" /></Button>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}