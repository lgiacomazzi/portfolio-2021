import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section id="portfolio" className="bk-white">
            <div className="container">
                <ProjectCard name="Agendamento de recargas para veículos elétricos" href="voltbras">O aplicativo da Voltbras oferece praticidade na hora de carregar um veículo elétrico.</ProjectCard>
                <ProjectCard name="Dashboard de Operações" href="delivery-much">Redesign da experiência de gerir e cadastrar os produtos e adicionais de uma loja na Delivery Much.</ProjectCard>
                <ProjectCard name="Joana Brum Website" disabled></ProjectCard>
                <ProjectCard name="Joana Brum Website" disabled></ProjectCard>
            </div>
        </section>
    )
}