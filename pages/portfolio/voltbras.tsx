import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import HeroImage from "../../components/HeroImage"
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import ImageZoom from "../../components/ImageZoom";
import Router from "next/router";

export default function Portfolio() {
    const variants = {
        hidden: { opacity: 0, x: 200 },
        enter: { opacity: 1, x: 0 },
        exit: { x: 200 },
    }

    const Paragraph = ({ children }) => (
        <p className="text-body">{children}</p>
    )

    return (
        <>
            <Head>
                <title>Agendamento de Recargas | Luciano Giacomazzi </title>
            </Head>


            {/* Introdução */}
            <section id="header" className="pt-2 pb-2">
                <div className='container'>
                    <Button variant="secondary" size="small" onClick={() => Router.back()}><Icon icon="chevron-left" size={16} />Voltar</Button>
                    <motion.h3
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="mt-2 mb-3">A Voltbras oferece um aplicativo para encontrar estações elétricas no mapa e  carregar a bateria de um veículo elétrico. Fiz parte de um projeto que construiu a nova experiência de agendamento de uma recarga.
                    </motion.h3>
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

            <HeroImage src="/images/voltbras.png" />

            {/* Desafio */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <h2 className="mb-2">Como viajar com um veículo elétrico?</h2>
                            <Paragraph>Através do aplicativo whitelabel da Voltbras é possível encontrar estações de recarga próximos da localização do usuário, filtrar por conectores disponíveis para o veículo e iniciar uma recarga diretamente pelo aplicativo ou por cartões RFID*. </Paragraph>
                            <Paragraph>Um grande problema no mundo de recargas elétricas é de chegar a um local e o carregador estar ocupado, ou não poder carregar o veículo em função de problemas técnicos com a estação. </Paragraph>
                            <Paragraph>Essa frustração impede que muitos usuários utilizem seus veículos elétricos por muito tempo ou utilizem para viagens de longa duração.</Paragraph>
                            {/* <Paragraph>Esta funcionalidade já era existente na Europa e era algo estratégico pois poderia ser utilizada ao longo do corredor elétrico entre Rio e São Paulo.</Paragraph> */}
                            <Paragraph>Fui responsável pela execução do projeto de pesquisa e design da experiência do usuário. Atuei juntamente de desenvolvedores Web, Mobile e Backend e um Product Manager. </Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            {/* <Zoom src={"/images/voltbras/conectores.png"} layout="responsive" width={200} height={150} /> */}
                            <ImageZoom src="/images/voltbras/conectores.png" alt="Tipos diferentes de conectores para veículos elétricos." />
                            <ImageZoom src="/images/voltbras/map.png" alt="Aproximadamente 435 quilômetros de distância, a viagem entre Rio e São Paulo requer varias paradas para carregar o veículo." />
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </section>

            {/* Objetivo */}
            <section className="pt-4 pb-4 bk-light">
                <div className="container">
                    <div className="col-lg-6">
                        <h2 className="mb-1">Objetivos</h2>
                        <Paragraph>- Entender a visão dos usuários e as principais dificuldades em viagens com veículos elétricos;</Paragraph>
                        <Paragraph>- Avaliar a proposta de valor da solução e outros problemas ao longo da experiência;</Paragraph>
                        <Paragraph>- Criar uma nova experiência que aumente o engajamento com o app de recargas.</Paragraph>
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
                            <ImageZoom src="/images/voltbras/csd.png" alt="Matriz CSD contendo detalhes do problema a ser explorado" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <h3 className="mb-2">Entrevistas com usuários</h3>
                            <Paragraph>Entramos em contato com alguns usuários para entender melhor os <b>diferentes contextos de recarga</b>, quais os principais desejos, necessidades e frustrações dos usuários e se uma feature de reservas seria algo que trouxesse valor para eles.</Paragraph>
                            <Paragraph>O roteiro buscou validar a necessidade de se <b>planejar para viajar com um veículo</b> entendendo melhor as dificuldades e necessidades durante a jornada. também buscamos identificar quais as <b>ferramentas e soluções que estes usuários utilizam</b> para evitar atrasos e problemas durante uma viagem.</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">Desk Research</h3>
                            <Paragraph>Também <b>revisamos restrições técnicas das estações de recarga e de seus conectores</b> com as equipes de controle e monitoramento.</Paragraph>
                            <Paragraph>Buscamos entender o funcionamento da <b>tecnologia de reservas já existente nas estações</b> (tecnologia OCPP) e quais limitações impactariam na experiência virtual do usuário no aplicativo.</Paragraph>
                            <Paragraph>Analisamos o mercado, principalmente fora do Brasil, para entender como os usuários, com maior infraestutura de carregamento, lidam com este tipo de desafio <b>e como outras empresas já resolveram este problema por lá</b>.</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-4 m-auto">
                            <h3 className="mb-2">Personas</h3>
                            <Paragraph>Construímos personas ao longo do projeto para para <b>criar empatia em nossa equipe</b> e ajudar com a visualização das principais necessidades dos usuários. </Paragraph>
                            <Paragraph>Depois de segmentar tipos diferentes de persona pudemos orientar decisões de produto e priorizar quais os cenários que iríamos nos concentraríamos nos estágios iniciais.</Paragraph>
                        </div>
                        <div className="col-lg-8">
                            <ImageZoom src="/images/voltbras/persona.png" alt="Persona criada para referenciar decisões de design." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">Jornada do usuário</h3>
                            <Paragraph>Usamos técnicas para visualizar e comunicar a experiência completa dos usuários com vários pontos de contato como aplicativo, seu veículo a estação de recarga.</Paragraph>
                            <Paragraph>Mapeamos ansiedades, frustrações e celebrações dos usuários ao longo dessa jornada e focamos nos pontos problemáticos da experiência.</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/voltbras/jornada.png" alt="Jornada do usuário na hora de viajar com um veículo elétrico." />
                        </div>
                    </div>
                </div>
            </section>

            {/* 02 - Definição */}
            {/* <h3 className="mb-2">Key Findings and Insights</h3> */}
            {/* <h3 className="mb-2">Product Scope (User Stories) </h3> */}
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">II - DEFINE</span>
                            <h2 className="mb-2">Definido o produto & quais problemas atacar</h2>
                            <Paragraph>Com estas técnicas, identificamos pontos de atrito na experiência dos usuários que viajam para <b>aumentar o engajamento com as recargas. </b></Paragraph>
                            <Paragraph>Criei diversos cenários imaginando as interações e jornadas ideais dos usuários levando-se em consideração os insights e limitações tecnológicas encontradas nas etapas anteriores.</Paragraph>
                            <Paragraph>Construí <b>fluxos ideais com diferentes níveis de fidelidade</b> tanto para idealizar a solução como um todo mas também para comunicar para os demais membros do time quais seriam as interações necessárias. </Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/voltbras/user-flow.png" alt="Principais tapas de interação da funcionalidade de agendamento de recargas." />
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/voltbras/wire-flow.png" alt="Fluxos de interação da funcionalidade com telas simplificadas de agendamento de recargas." />
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
                            <h2 className="mb-2">Desenhando a Solução</h2>
                            <Paragraph>Após a criação dos fluxos e validação com os stakeholders e o time técnico para antecipar quais quer alterações, imaginei experiências aprendendo com diversas referencias de outros aplicativos e produtos porém com os mesmos modelos mentais dos usuários.</Paragraph>
                            <Paragraph>Através das pesquisas no mercado europeu, era possível estabelecer alguns padrões de como a tecnologia estava evoluindo por lá. Além, as pesquisas mostraram que muitos usuários <b>inclusive já faziam o uso deste tipo de aplicativo em suas viagens e passeios fora do Brasil</b>.</Paragraph>
                            {/* User Flow and Information Architecture */}
                            {/* Wireframes / Prototypes */}
                            {/* User Testing */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-2">Agenda da Estação</h3>
                            <Paragraph>Para conseguir criar uma reserva na estação, trabalhamos no design de uma <b>agenda para cada conector da estação</b>. Algumas podem possuir até três modelos diferentes.</Paragraph>
                            <Paragraph>Através desta agenda, é possível visualizar os horários ocupados e criar um novo agendamento. Também criamos um atalho onde o usuário poderia ter <b>acesso a todos seus horários agendados.</b></Paragraph>
                        </div>
                    </div>
                    <div className="row mb-5 mt-lg-3">
                        <div className="col-lg-12">
                            <ImageZoom src="/images/voltbras/agenda.png" alt="Imagem mostrando telas da estação de recarga reservável, a agenda de um conector, os detalhes de um agendamento." />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">Novos pins</h3>
                            <Paragraph>A pesquisa de usuários mostrou a importância de <b>diferenciar um ponto que aceitasse agendamentos </b> de um ponto de recarga normal </Paragraph>
                            <Paragraph>Através de algumas iterações, encontramos um design de marcador eficiente, garantindo que os usuários pudessem entender o significado e ao mesmo tempo escalável, permitindo a inclusão de representações visuais para outras funções no futuro.</Paragraph>
                            <ImageZoom src="/images/voltbras/pins-evolution.png" alt="Iterações no desenho do pin e seu acessório." />
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/voltbras/pins-app.png" alt="Imagem mostrando todos os possíveis pins e seus diferentes significados." />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h3 className="mb-2">Pushs e Popups</h3>
                            <Paragraph>Mapeamos alguns dos possíveis problemas que poderiam ocorrer entre o momento da criação da reserva e o inicio da recarga na estação.  Criamos algumas notificações push e pop-ups informando o usuário e incentivando-o a dar o próximo passo na sua viagem.</Paragraph>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5">
                        <div className="col-lg-12">
                            <ImageZoom src="/images/voltbras/pushs.png" alt="Combinação pushs e popups utilizadas para conduzir o usuário à recarga." />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-3">
                            <Paragraph>As situações previstas incluíram lembretes sobre reservas próximas, atualizações de indisponibilidade da estação e acompanhamento do status em caso de expiração ou cancelamentos.</Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h3 className="mb-2">Testes de Usabilidade</h3>
                            <Paragraph>Para validar a usabilidade da solução, convidamos alguns usuários para condução de testes de usabilidade. Os testes foram feitos durante o período da pandemia e conduzidas de maneira remota.</Paragraph>
                            <Paragraph>Os participantes interagiram com um protótipo desenvolvido no Figma e seguiram algumas tarefas pré-determinadas. Nosso objetivo era garantir uma experiência fluída e sem atritos ao longo do processo.</Paragraph>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5">
                        <div className="col-lg-8 offset-lg-2">
                            <ImageZoom src="/images/voltbras/usabilidade.png" alt="Captura de tela de teste de usabilidade do aplicativo de reservas." />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-3">
                            <h2 className="mb-2">Resultados</h2>
                            <Paragraph>Este projeto teve como objetivo a criação de uma nova experiência de agendamento de uma recarga para o aplicativo da Voltbras. Foram criados novos fluxos e telas, e foram realizados testes de usabilidade para garantir a qualidade do produto final.</Paragraph>
                            <Paragraph>Como resultado, foi possível criar uma nova experiência de agendamento de recarga mais intuitiva e eficiente para o usuário. Isso garante que o aplicativo continue sendo uma ferramenta útil e eficaz para quem precisa carregar seu veículo elétrico.</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/voltbras/final.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Forward Navigation */}
            <section className="pt-5 pb-5">
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