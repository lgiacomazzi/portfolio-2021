import styles from "../styles/components/ExperienceBubble.module.css"
import Icon from "./Icon";
import InlineLink from "./InlineLink";

export function ExperienceBubble({ content }) {

    return (
        <>

            <div className={styles.experienceBubble}>
                <p className={styles.experienceLocation}><Icon icon="pin" size={14} />{content.location}</p>
                <h5 className={styles.experienceName}>{content.title} - <InlineLink>{content.company}</InlineLink></h5>
                <p className={styles.experiencePeriod}>{content.period}</p>
                <p className={styles.experienceDescription}>{content.description}</p>
            </div>
        </>
    );
}

export function ExperienceContainer({ children }) {

    return (
        <div className={styles.experienceContainer}>
            {children}
        </div>
    );
}