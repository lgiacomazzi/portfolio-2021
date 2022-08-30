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

export default function Portfolio() {
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
                <title>Entrega Grátis da Delivery Much | Luciano Giacomazzi </title>
            </Head>


            {/* Introdução */}
            <section id="header" className="pt-4 pb-4">
                <div className='container'>
                    <Button variant="secondary" size="small" onClick={() => Router.back()}><Icon icon="chevron-left" size={16} />Voltar</Button>
                    <motion.h3
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="mt-2 mb-3">Lojas parceiras da Delivery Much podem vender seus produtos pelo marketplace, cadastrar ofertas e oferecer cupons de desconto. Fiz parte de um projeto que construiu a experiência para cadastrar entregas promocionais na plataforma.
                    </motion.h3>
                    <motion.div
                        className="row"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}>
                        <div className="col-6 col-lg-3 mb-3">
                            <p className="text-underline">Empresa</p>
                            <ul><InlineLink>Delivery Much</InlineLink></ul>
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
                        <div className="col-lg-6">
                            <h2 className="mb-2">Por que Entrega Promocional?</h2>
                            <Paragraph>A Delivery Much é uma <b>startup de delivery</b>, onde lojistas oferecem produtos nos cardápios e usuários realizam compras pelo aplicativo ou website.</Paragraph>
                            <Paragraph>Apesar da possibilidade de cadastrar ofertas em produtos e cupons de desconto, <b>não existia uma funcionalidade para configurar descontos na taxa de entrega</b> destes estabelecimentos.</Paragraph>
                            <Paragraph>O processo existente era <b>manual, suscetível à falhas e de difícil previsibilidade</b>, muitos dos históricos de desempenho dessas promoções eram inacessíveis. </Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <Paragraph>Junto da Tribo de Backoffice, participei do projeto para otimizar essa ferramenta atendendo às demandas do negócio e dos principais usuários. Realizei pesquisas exploratórias, design da experiência e conduzi testes de usabilidade internos e externos.</Paragraph>
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
                        <h2 className="mb-1">Objetivos</h2>
                        <Paragraph>1. Mapear o processo de solicitação, cadastro e verificação de resultados com entrega promocional e seus diferentes atores.</Paragraph>
                        <Paragraph>2. Criar uma nova experiência que aumente o engajamento das lojas parceiras com descontos na entrega.</Paragraph>
                        <Paragraph>3. Automatizar processo financeiro de inclusão de descontos na entrega em faturas das lojas parceiras.</Paragraph>
                    </div>
                </div>
            </section>

            {/* 01 - Discovery */}
            <section className="pt-5 pb-5 bk-white">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <span className="text-secondary text-small mb-2">I - DISCOVER</span>
                            <h2 className="mb-2">Entendendo o universo de free delivery</h2>
                            <Paragraph>Durante esta etapa, juntamos o conhecimento de diversos stakeholders para mapear as dificuldades com o produto atual e quais as necessidades para o futuro.</Paragraph>
                            <Paragraph>Entramos em contato com outras tribos envolvidas, Cliente Final e Lojas, para entender quais as eram as certezas, suposições e dúvidas dentro do escopo e definimos quais principais pontos que precisariam ser explorados para cada time.</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/delivery/csd.png" alt="Matriz CSD contendo detalhes do problema a ser explorado." />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <h3 className="mb-2">Dinâmica Presencial</h3>
                        <div className="col-lg-6">
                            <Paragraph><b>Um dos processos de geração de insights foi a CDM 2022</b>, a Convenção Delivery Much. O evento foi realizado presencialmente em março de 2022 e juntou diversos funcionários e franqueados para conversar sobre o futuro dos produtos e da empresa. </Paragraph>
                            <Paragraph>Através de uma dinâmica colaborativa durante um dia do evento os participantes trouxeram quais as <b>principais dores e necessidades ao longo da jornada de cadastro de promoções.</b></Paragraph>
                            <Paragraph>Assim, foi possível elencar as principais dificuldades no processo de gestão de promoções das lojas bem como algumas ideias de possíveis soluções.</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/delivery/cdm-01.png" alt="" />
                            <ImageZoom src="/images/delivery/cdm-03.png" alt="Foto das dinâmicas realizadas na CDM sobre o fluxo promocional das lojas parceiras" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <h3 className="mb-2">Entrevistas com stakeholders</h3>
                        <div className="col-lg-6">
                            <Paragraph>Realizei entrevistas em profundidade com os times responsáveis por operacionalizar promoções de entrega por todo o ecossistema da Delivery Much: </Paragraph>
                            <Paragraph>1. Entrevistamos a área de <b>Operações</b> para entender mais sobre como são acordados e cadastrados os valores de descontos e taxa de entrega,</Paragraph>
                            <Paragraph>2. O time de <b>Marketing</b>, sobre como analisar o desempenho destas ações após a sua conclusão e o retorno sobre o investimento,</Paragraph>
                            <Paragraph>3. E o time <b>Financeiro</b>. Ao final do processo, é necessário descontar ou acrescentar valores nas faturas das lojas. </Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <Paragraph>Também entrevistamos o time de franquias, que havia participado da dinâmica presencial. Selecionamos franquias que se adequavam as métricas pré selecionadas como nível de investimento com promoções e valor transacionado no marketplace:</Paragraph>
                            <Paragraph>1. <b>Franquias que não trabalham com entrega:</b> entender o por que da falta de engajamento com a feature atual bem como poderíamos melhorar</Paragraph>
                            <Paragraph>2. <b>Franquias que trabalham com entregas:</b> queríamos entender o que funciona para eles e como extrair o máximo da ferramenta.</Paragraph>
                            <Paragraph>Através destas conversas, foi possível mapear de ponta a ponta o processo e entender quais os principais  pontos de frustração para cada persona e distribuir ações para cada time conduzir internamente.</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6">
                            <h2 className="mb-2">Jornadas de usuário</h2>
                            <Paragraph>Criamos diferentes jornadas de usuário, um para cada ator do marketplace: Franqueado (Usuário Interno), Loja e Cliente Final..</Paragraph>
                            <Paragraph>Mapeamos cada ação e ponto de contato das lojas com a <b>demanda e a necessidade </b>por promoções, a jornada dos usuários internos e seus <b>cadastros manuais</b> e finalmente a busca e <b>compra do cliente final</b> no app.</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-12 m-auto">
                            <ImageZoom src="/images/delivery/journeys.png" alt="Jornada dos usuários necessária para realizar um pedido com um desconto na entrega." />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <h2 className="mb-2">Benchmarking</h2>
                            <Paragraph>Também revisei produtos de competidores. </Paragraph>
                            <Paragraph>Como o projeto envolvia o design de frontend para conseguir cadastrar estas promoções, busquei encontrar funcionalidades similares nos produtos dos concorrentes.</Paragraph>
                            <Paragraph>Foi possível utilizar estas referências na etapa de design de interação. Porém percebemos que o <b>grau de personalização </b> que a empresa oferecia era um diferencial <b>inexistente em vários dos produtos analisados.</b></Paragraph>
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
                            <h2 className="mb-2">Definido o produto</h2>
                            <Paragraph>Com estas técnicas, identificamos vários pontos de atrito na experiência dos usuários. Utilizamos a técnica de User Story Map para idealizar novos fluxos em cima dos fluxos atuais e também fasear as iniciativas em lançamentos.</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-12 m-auto">
                            <ImageZoom src="/images/delivery/story-map.png" alt="User Story Map para o projeto de Entregas Promocionais" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <Paragraph>Além das necessidades de migração entre os sistemas, era o momento de avaliar cada aspecto da feature original, ver o que poderíamos aproveitar, e então criar uma nova versão atualizada.</Paragraph>
                            <Paragraph>Com isso, pude construir fluxos ideais em diferentes níveis de fidelidade que contemplavam as necessidades de produto esperadas</Paragraph>
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
                            <h2 className="mb-2">Desenhando a Solução</h2>
                            <Paragraph>Após aApós a criação dos fluxos e validação com os stakeholders e o time técnico, criei experiências dentro de ambos os sistemas da empresa: dentro da plataforma de gestão de promoções e dentro do aplicativo para o usuário comprar.</Paragraph>
                            <Paragraph>Apesar de diversas referencias de outros aplicativos e produtos, era necessário respeitar todas as fundações do Design System da companhia, o Marmita Design System.</Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-2">Planos de Entrega</h3>
                            <Paragraph>Para conseguir criar uma promoção nas entregas da loja, expandimos o conceito atual de planos de entrega e trabalhamos no design de um plano de entregas promocional.</Paragraph>
                            <Paragraph>Através do plano, é possível habilitar e desabilitar bairros bem como alterar as taxas de entrega dos mesmos. Também criamos indicadores visuais sobre qual o plano está ativo no momento para auxiliar na visibilidade.</Paragraph>
                        </div>
                    </div>
                    <div className="row mb-5 mt-lg-3">
                        <div className="col-lg-12">
                            <ImageZoom src="/images/delivery/plans.png" alt="Um plano de entregas é uma listagem de todos os bairros e áreas de entrega cadastradas em uma dada cidade." />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">Novos Destaques no Aplicativo</h3>
                            <Paragraph>A pesquisa de usuários mostrou a importância de trazer estas informações para o Cliente final de maneira automatizada.</Paragraph>
                            <Paragraph>Encontramos um layout que trazia ao mesmo tempo a informação que precisávamos e também o destaque apropriado para a entrega grátis abrindo espaço para outras promoções no futuro. </Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/delivery/list.png" alt="Imagem mostrando as diferentes visualizações de destaques promocionais no aplicativo." />

                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 m-auto">
                            <h3 className="mb-2">Entrega Grátis a partir de</h3>
                            <Paragraph>Uma necessidade apontada por muitos dos usuários era trazer a possibilidade de vincular um pedido mínimo à entrega grátis. </Paragraph>
                            <Paragraph>Expandimos a tela de planos de entrega para conter mais uma opção sobre o pedido mínimo para aquele plano.</Paragraph>
                        </div>
                        <div className="col-lg-6">
                            <ImageZoom src="/images/delivery/minimum-order.png" alt="Item da listagem mostrando como aparece para uma loja quando ela possui entrega grátis disponível." />
                        </div>
                    </div>
                    <div className="row mt-2 mb-4">

                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 mb-3">
                            <h3 className="mb-2">Automatização de Faturamento</h3>
                            <Paragraph>Com os fluxos mapeados e a nova UI da solução agora podemos automatizar os descontos vindo das entregas promocionais direto na conta das lojas.</Paragraph>
                            <Paragraph>Este processo auxiliou na redução do esforço necessário pelo time de faturamento e garante escalabilidade para o futuro da empresa.</Paragraph>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <h3 className="mb-2">Testes de Usabilidade</h3>
                            <Paragraph>Para validar a usabilidade da solução, convidamos alguns usuários para condução de testes de usabilidade.</Paragraph>
                            <Paragraph>Os testes foram conduzidos de <b>maneira remota</b>onde os participantes puderam interagir com um <b>protótipo desenvolvido no Figma</b> e seguiram algumas tarefas pré-determinadas. </Paragraph>
                        </div>
                        <div className="col-lg-6 ">
                            <ImageZoom src="/images/delivery/usability.png" alt="Captura de tela de teste de usabilidade do aplicativo de reservas." />
                        </div>
                    </div>
                    <div className="row mt-2 mb-5">

                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-3">
                            <h2 className="mb-2">Resultados</h2>
                            <Paragraph>Este projeto teve como objetivo a criação de uma nova experiência de agendamento de uma recarga para o aplicativo da Voltbras. Foram criados novos fluxos e telas, e foram realizados testes de usabilidade para garantir a qualidade do produto final.</Paragraph>
                            <Paragraph>Como resultado, foi possível criar uma nova experiência de agendamento de recarga mais intuitiva e eficiente para o usuário. Isso garante que o aplicativo continue sendo uma ferramenta útil e eficaz para quem precisa carregar seu veículo elétrico.</Paragraph>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <ImageZoom src="/images/delivery/final.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <BottomNavigation content={{
                type: "UX Deisgn",
                name: "Agendando recargas para veículos elétricos no aplicativo da Voltbras",
                href: "voltbras",
                imageUrl: "voltbras.png",
                description: "Desenhando uma experiência de reserva de uma estação e um conector para carregar veículos elétricos.",
            }} />

        </motion.main >
    );
}