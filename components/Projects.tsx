import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section id="portfolio" className="pt-4 pb-4 bk-light">
            <div className="container">
                <ProjectCard name="Agendamento de Recargas" href="voltbras">A Voltbras é uma empresa de mobilidade elétrica que oferece praticidade na hora de carregar um veículo elétrico através do seu app. Participei do projeto com objetivo de desenhar uma nova experiência de agendamento de recargas.</ProjectCard>
                <ProjectCard name="Dashboard de Operações" href="delivery-much">Redesign da experiência de gerir e cadastrar os produtos e adicionais de uma loja na Delivery Much.</ProjectCard>
                <ProjectCard name="Joana Brum Website" disabled></ProjectCard>
            </div>
        </section>
    )
}