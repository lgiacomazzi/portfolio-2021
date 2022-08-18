import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage"
import Image from "next/image";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Link from "next/link";

export default function Portfolio() {
    const variants = {
        hidden: { opacity: 0, x: 200 },
        enter: { opacity: 1, x: 0 },
        exit: { x: 200 },
    }

    return (
        <>
            <Head>
                <title>Agendamento de Recargas | Luciano Giacomazzi </title>
            </Head>

            <Header />

            {/* Introdução */}
            <section id="header" className="pt-4 pb-4 bk-volt">
                <div className='container'>
                    <motion.h2
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="mb-3">A Voltbras oferece um aplicativo para encontrar estações elétricas no mapa e  carregar a bateria de um veículo elétrico. Fiz parte de um projeto que construiu a nova experiência de agendamento de uma recarga.
                    </motion.h2>
                    <motion.div
                        className="row"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">Empresa</p>
                            <ul><li>Voltbras</li></ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">Duração</p>
                            <ul><li>4 meses</li></ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">Meu Papel</p>
                            <ul>
                                <li>User research,</li>
                                <li>Prototipagem,</li>
                                <li>Interface Design</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">Ferramentas</p>
                            <ul>
                                <li>Figma,</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            <HeroImage src="/images/voltbras/voltbras.png" />

            {/* Desafio */}
            <section className="portfolio-section pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <h2 className="mb-2">como viajar com um veículo elétrico?</h2>
                            <p className="text-body">Através do aplicativo whitelabel da Voltbras é possível encontrar estações de recarga próximos da localização do usuário, filtrar por conectores disponíveis para o veículo e iniciar uma recarga diretamente pelo aplicativo ou por cartões RFID*. </p>
                            <p className="text-body">Um grande problema no mundo de recargas elétricas é de chegar a um local e o carregador estar ocupado, ou não poder carregar o veículo em função de problas técnicos com a estação. </p>
                            <p className="text-body">Essa frustração impede que muitos usuários utilizem seus veículos elétricos por muito tempo ou utilizem para viagens de longa duração.</p>
                            {/* <p className="text-body">Esta funcionalidade já era existente na Europa e era algo estratégico pois poderia ser utilizada ao longo do corredor elétrico entre Rio e São Paulo.</p> */}
                            <p className="text-body">Fui responsável pela execução do projeto de pesquisa e design da experiência do usuário. Atuei juntamente de desenvolvedores Web, Mobile e Backend e um Product Manager. </p>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <img src="/images/voltbras/map.png" />
                            <p className="text-center text-small text-secondary mb-2">Aproximadamente 435 quilômetros de distância, a viagem entre Rio e São Paulo requer varias paradas para carregar o veículo.</p>
                        </div>
                    </div>
                    <div className="row">
                        
                    </div>
                </div>
            </section>

            {/* Objetivo */}
            <section className="pt-4 pb-4 bk-light">
                <div className="container">
                    <h2 className="mb-1">Objetivos</h2>
                    <p className="text-body">- Entender a visão dos usuários e as principais dificuldades em viagens com veículos elétricos;</p>
                    <p className="text-body">- Avaliar a proposta de valor da solução e outros problemas ao longo da experiência;</p>
                    <p className="text-body">- Criar uma nova experiência que aumente o engajamento com o app com recargas.</p>
                </div>
            </section>

            {/* 01 - Discovery */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">I - DISCOVER</span>
                            <h2 className="mb-2">entendendo o contexto e descobrindo problemas</h2>
                            <p className="text-body">Durante esta etapa, conversamos com diversos stakeholders para entender mais sobre as visões para o produto e <b>benefícios para os usuários.</b></p>
                            <p className="text-body">Levantamos quais as eram as certezas, suposições e dúvidas dentro do escopo do projeto e definimos quais principais pontos que precisariam ser explorados com pesquisas. </p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 m-auto">
                           <h4 className="mb-2 mt-5">Entrevistas com usuários</h4>
                            <p className="text-body">Entramos em contato com alguns usuários para entender melhor os diferentes contextos de recarga, quais os principais desejos, necessidades e frustrações dos usuários e se uma feature de reservas seria algo que trouxesse valor para eles.</p>
                            <p className="text-body">O roteiro buscou validar a necessidade de se planejar para viajar com um veículo entendendo melhor as dificuldades e necessidades durante a jornada. também buscamos identificar quais as ferramentas e soluções que estes usuários utilizam para evitar atrasos e problemas durante uma viagem.</p>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <img src="/images/voltbras/map.png" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                           <h4 className="mb-2">Desk Research</h4>
                           <p className="text-body">Também revisamos restrições técnicas da estação de recarga e de seus conectores com as equipes de controle e monitoramento.</p>
                           <p className="text-body">Buscamos entender o funcionamento da tecnologia de reservas já existente nas estações (tecnologia OCPP) e quais limitações impactariam na experiência virtual do usuário no aplicativo.</p>
                           <p className="text-body">Analisamos o mercado, principalmente fora do Brasil, para entender como os usuários em países com maior infraestutura de carregamento lidam com este tipo de desafio e como outras empresas já resolveram este problema por lá.</p>
                       </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 m-auto">
                            <h4 className="mb-2">Personas</h4>
                            <p className="text-body mb-2">Construímos personas ao longo do projeto para para criar empatia em nossa equipe e ajudar com a visualização das principais necessidades dos usuários. </p>
                            <p className="text-body mb-3">Depois de segmentar tipos diferentes de persona pudemos orientar decisões de produto e priorizar quais os cenários que iríamos nos concentraríamos nos estágios iniciais.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/images/voltbras/persona.png" className="zoom mb-2" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <h4 className="mb-2">Jornada do usuário</h4>
                            <p className="text-body mb-2">Usamos técnicas de mapeamento para visualizar e comunicar a experiência de ponta a ponta dos usuários em vários pontos de contato como aplicativo, seu veículo e ponto de carregamento.</p>
                            <p className="text-body mb-2">Mapeamos emoções como ansiedades, frustrações e celebrações dos usuários ao jogo da sua jornada o que nos permitiu visualizar os pontos problemáticos da experiência.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/images/voltbras/jornada.png" className="zoom mb-2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 02 - Definição */}
            {/* <h4 className="mb-2">Key Findings and Insights</h4> */}
            {/* <h4 className="mb-2">Product Scope (User Stories) </h4> */}
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-6">
                        <span className="text-secondary text-small mb-2">II - DEFINE</span>
                        <h2 className="mb-2">definido o produto, quais problemas atacar</h2>
                            <p className="text-body">Com estas técnicas, identificamos pontos de atrito na experiência dos viajam que  melhorados para aumentar o engajamento com as recargas. </p>
                            <p className="text-body">Criei diversos cenários imaginando as interações e jornadas ideais dos usuários levando-se em consideração as informações e limitações tecnológicas encontradas nas etapas anteriores.</p>
                            <p className="text-body">Construí fluxos ideais com diferentes níveis de fidelidade tanto para idealizar a solução como um todo mas também para comunicar para os demais membros do time quais seriam as interações necessárias. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <img src="/images/voltbras/user-flow.png" className="zoom mb-2" />
                            <p className="text-center text-small text-secondary mb-2">Principais tapas de interação da funcionalidade de agendamento de recargas.</p>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <img src="/images/voltbras/wire-flow.png" className="zoom mb-2" />
                            <p className="text-center text-small text-secondary mb-2">Fluxos de interação da funcionalidade com telas simplificadas de agendamento de recargas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diamond 2 */}
            {/* 03 - Develop */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                <span className="text-secondary text-small mb-2">III - DESIGN</span>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            {/* Concept Exploration */}
                            <h2 className="mb-2">desenhando a solução</h2>
                            <p className="text-body">Após a criação dos fluxos e validação com o time técnico para antecipar quais quer alterações, imaginei experiências ideais olhando diversas referencias de outros aplicativos e produtos porém com os mesmos modelos mentais idealizados.</p>
                            <p className="text-body">Através das pesquisas no mercado europeu, era possível estabelecer alguns padrões de como a tecnologia estava evoluindo por lá. Além, as pesquisas mostraram que muitos usuários inclusive já faziam o uso deste tipo de aplicativo em suas viagens e passeios fora do Brasil.</p>
                            {/* User Flow and Information Architecture */}
                            {/* Wireframes / Prototypes */}
                            {/* User Testing */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h4 className="mb-2">Agenda da Estação</h4>
                            <p className="text-body">Para conseguir criar uma reserva na estação, trabalhamos no design de uma <b>agenda para cada conector da estação</b>. Algumas podem possuir até três modelos diferentes.</p>
                            <p className="text-body">Através desta agenda, é possível visualizar os horários ocupados e criar um novo agendamento. Também criamos um atalho onde o usuário poderia ter <b>acesso a todos seus horários agendados.</b></p>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5">
                        <div className="col-lg-12">
                            <img src="/images/voltbras/agenda.png" className="zoom" />
                            <div className="col-lg-6 offset-lg-6">
                                <p className="text-right text-small text-secondary mb-2">Imagem mostrando telas da estação de recarga reservável, a agenda de um conector, os detalhes de um agendamento.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 m-auto">
                            <h4 className="mb-2">Novos pins</h4>
                            <p className="text-body">A pesquisa de usuários mostrou a importância de <b>diferenciar um ponto que aceitasse agendamentos </b> de um ponto de recarga normal </p>
                            <p className="text-body">Através de algumas iterações, encontramos um design de marcador eficiente, garantindo que os usuários pudessem entender o significado e ao mesmo tempo escalável, permitindo a inclusão de representações visuais para outras funções no futuro.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/images/voltbras/pins-app.png" className="zoom mb-2" />
                            <p className="text-right text-small text-secondary mb-2 text-center">Imagem mostrando todos os possíveis pins e seus diferentes significados.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h4 className="mb-2">Pushs e Popups</h4>
                            <p className="text-body">Mapeamos alguns dos possíveis problemas que poderiam ocorrer entre o momento da criação da reserva e o inicio da recarga na estação.  Criamos algumas notificações push e pop-ups informando o usuário e incentivando-o a dar o próximo passo na sua viagem.</p>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5">
                        <div className="col-lg-12">
                            <img src="/images/voltbras/pushs.png" className="zoom" />
                            <div className="col-lg-6 offset-lg-6">
                                <p className="text-right text-small text-secondary mb-2">Combinação pushs e popups utilizadas para conduzir o usuário à recarga.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-3">
                            <p className="text-body">As situações previstas incluíram lembretes sobre reservas próximas, atualizações de indisponibilidade da estação e acompanhamento do status em caso de expiração ou cancelamentos.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h4 className="mb-2">Testes de Usabilidade</h4>
                            <p className="text-body">Para validar a usabilidade da solução, convidamos alguns usuários para condução de testes de usabilidade. Os testes foram feitos durante o período da pandemia e conduzidas de maneira remota.</p>
                            <p className="text-body">Os participantes interagiram com um protótipo desenvolvido no Figma e seguiram algumas tarefas pré-determinadas. Nosso objetivo era garantir uma experiência fluída e sem atritos ao longo do processo.</p>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5">
                        <div className="col-lg-8 offset-lg-2">
                            <img src="/images/voltbras/usabilidade.png" className="zoom mb-1" />
                            <p className="text-center text-small text-secondary mb-2">Captura de tela de teste de usabilidade do aplicativo de reservas.</p>
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
        </>
    );
}