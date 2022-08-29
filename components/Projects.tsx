import ProjectCard from "./ProjectCard"
import { Heading6 } from "./Text"

export default function Projects() {
    return (
        <section id="portfolio" className="bk-white">
            <Heading6>― Porfolio UX design ―</Heading6>
            <div className="container">
                <ProjectCard content={{
                    type: "UX Deisgn",
                    name: "Agendando recargas para veículos elétricos no aplicativo da Voltbras",
                    href: "voltbras",
                    imageUrl: "voltbras.png",
                    description: "Desenhando uma experiência de reserva de uma estação e um conector para carregar veículos elétricos.",
                }} />
                <ProjectCard content={{
                    type: "UX Design",
                    name: "Criando uma ferramenta de Entrega Grátis no sistema da Delivery Much",
                    href: "delivery",
                    imageUrl: "freedelivery.png",
                    description: "Uma solução para lojas parceiras da Delivery Much poderem cadastrar promoções de entrega grátis no Marketplace.",
                }} />
            </div>
        </section>
    )
}