import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section id="portfolio" className="bk-white">
            <div className="container">
                <ProjectCard name="Agendamento de recargas para veículos elétricos" href="voltbras">Desenhando uma experiência de reserva de uma estação para carregar um veículo elétrico na Voltbras.</ProjectCard>
                {/* <ProjectCard disabled name="Branding Redesign na Fases & Faces" href="fasesefaces">Criando uma marca sofisticada para uma clínica estética em Florianópolis, Santa Catarina.</ProjectCard> */}
            </div>
        </section>
    )
}