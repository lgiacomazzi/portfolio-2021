import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section id="portfolio" className="bk-white">
            <div className="container">
                <ProjectCard content={{
                    type: "UX Deisgn",
                    name: "Agendando recargas para veículos elétricos no aplicativo da Voltbras",
                    href: "voltbras",
                    imageUrl: "voltbras.png",
                    description: "Desenhando uma experiência de reserva de uma estação e um conector para carregar veículos elétricos.",
                }} />
                <ProjectCard disabled content={{
                    type: "UX Design",
                    name: "Criando uma ferramenta de Entrega Grátis no sistema da Delivery Much",
                    href: "fasesefaces",
                    imageUrl: "freedelivery.png",
                    description: "Uma solução para lojas parceiras da Delivery Much poderem cadastrar promoções de entrega grátis no Marketplace.",
                }} />
                <ProjectCard disabled content={{
                    type: "Branding",
                    name: "Branding Redesign na Fases & Faces",
                    href: "fasesefaces",
                    imageUrl: "fasesefaces.png",
                    description: "Criando uma marca sofisticada para uma clínica estética em Florianópolis, Santa Catarina.",
                }} />
            </div>
        </section>
    )
}