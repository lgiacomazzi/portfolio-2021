import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section id="portfolio" className="bk-white">
            <div className="container">
                <ProjectCard name="Agendamento de recargas para veículos elétricos" href="voltbras">Desenhando uma experiência de reserva de uma estação para carregar um veículo elétrico na Voltbras.</ProjectCard>
                <ProjectCard name="Entrega Grátis a partir de R$ 60" href="delivery">Criando uma ferramenta para promoções de entrega grátis para lojas no Marketplace da Delivery Much.</ProjectCard>
            </div>
        </section>
    )
}