import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard"
import { Heading6 } from "./Text"

export default function Projects() {
    const project = useTranslations('Home');

    return (
        <section id="portfolio" className="bk-white">
            <Heading6>― Porfolio UX design ―</Heading6>
            <div className="container">
                <ProjectCard content={{
                    type: "UX Deisgn",
                    href: "voltbras",
                    imageUrl: "voltbras.png",
                    name: project('voltbras_case_title'),
                    description: project('voltbras_case_description')
                }} />
                <ProjectCard content={{
                    type: "UX Design",
                    href: "delivery",
                    imageUrl: "freedelivery.png",
                    name: project('delivery_case_title'),
                    description: project('delivery_case_description'),
                }} />
            </div>
        </section>
    )
}