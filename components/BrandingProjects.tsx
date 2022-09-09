import Link from "next/link"
import styles from "../styles/components/BrandingProjects.module.css"
import { Heading6 } from "./Text"


function BrandingItem({ img = false, video = false, src }) {
    return (
        // <Link href={"/portfolio/" + src.split(".")[0]} >
            <div>
                {img &&
                    <img className={styles.gridItem} src={`./images/branding/${src}`} />}
                {video &&
                    <video className={styles.gridItem} autoPlay playsInline muted loop>
                        <source src={`./images/branding/${src}`} type="video/mp4"></source>
                    </video>
                }
            </div>
        // </Link>
    )
}

export default function BrandingProjects() {
    return (
        <section id="portfolio" className="pt-4 pb-4 border-vertical">
            <Heading6>― Porfolio Branding ―</Heading6>
            <div className={styles.gridContainer}>
                <BrandingItem img src="saudeaqui.png" />

                <BrandingItem img src="farmshare.png" />

                <BrandingItem img src="fasesefaces.png" />

                <BrandingItem img src="losninos.png" />

                <BrandingItem video src="bananas.mp4" />

                <BrandingItem img src="joana.gif" />

                <BrandingItem video src="background.mp4" />

                <BrandingItem video src="doutorafono.mp4" />

            </div>
        </section>
    )
}