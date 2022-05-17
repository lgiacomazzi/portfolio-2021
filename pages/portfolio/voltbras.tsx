import Head from "next/head";
import { motion } from "framer-motion";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Box from "../../components/Box";
import "../../styles/components/PorfolioPage.module.css"

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Portfolio</title>
            </Head>

            <Header />

            <Section background="white">
                <h1>O aplicativo de recargas da Voltbras oferece aos usuários a possibilidade de encontrar uma estação  nas proximidades para carregar o seu veículo elétrico. Fiz parte de um projeto que construiu a nova experiência de agendamento em um conector.
                </h1>
            </Section>

            <Section background="white">
                <Box>
                    <p>Meu Papel</p>
                    <ul>
                        <li>User research,</li>
                        <li>Prototipagem,</li>
                        <li>Interface Design</li>
                    </ul>
                </Box>
                <Box>
                    <p>Empresa</p>
                    <ul><li>Voltbras</li></ul>
                </Box>
                <Box>
                    <p>Duração</p>
                    <ul><li>4 meses</li></ul>
                </Box>
                <Box>
                    <p>Ferramentas</p>
                    <ul>
                        <li>Figma,</li>
                        <li>Adobe XD</li>
                    </ul>
                </Box>
            </Section >

            <Section background="white">
                <img src="/images/voltbras.png" />
            </Section>

            <Section>
                <Box>
                    <h2>Desafio</h2>
                    <p>Um dos pontos de dificuldade dos usuários na hora de viajar longas distâncias era não encontrar estações para carregar o carro e finalizar a viagem.
                        Dependendo do trajeto escolhido, podem ou não existir estações compatíveis com o veículo do usuário e se existirem, precisam estar livres para uso.
                        Os usuários reportaram que era comum aguardar, muitas vezes em filas, para carregar na única estação disponível da região. </p>
                </Box>
                <Box>
                    <img src="/images/voltbras/map.png" />
                </Box>
            </Section>
            <Box>

            </Box>
        </div >
    );
}