import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section className="pt-4 pb-4 bk-light">
            <div className="container">
                <ProjectCard name="Agendamento de Recargas" href="voltbras"></ProjectCard>
                <ProjectCard name="Dashboard de Operações" href="delivery-much"></ProjectCard>
            </div>
        </section>
    )
}