import ProjectCard from "./ProjectCard";
import styles from "../styles/components/BottomNavigation.module.css";
import { Heading6 } from "./Text";

export default function BottomNavigation({ content, disabled = false }) {
    return (
        <section className={styles.bottomNavigationContainer} >
            <div className="container">
                <Heading6>Outros cases:</Heading6>
                <ProjectCard disabled={disabled} content={content} />
            </div>
        </section >

    )
}