import Link from "next/link"
import styles from "../styles/components/BrandingProjects.module.css"


function BrandingItem({ img = false, video = false, src }) {
    return (
        <Link href={"/portfolio/" + src.split(".png")[0]} >
            <>
                {img &&
                    <img className={styles.gridItem} src={`./images/branding/${src}`} />}
                {video &&
                    <video className={styles.gridItem} autoPlay playsInline muted loop>
                        <source src={`./images/branding/${src}`} type="video/mp4"></source>
                    </video>
                }</>
        </Link>
    )
}

export default function BrandingProjects() {
    return (
        <section id="portfolio" className="pt-4 pb-4 bk-white">
            <div className={styles.gridContainer}>
                <BrandingItem img src="saudeaqui.png" />

                <BrandingItem img src="farmshare.png" />

                <BrandingItem img src="fasesefaces.png" />

                <BrandingItem video src="background.mp4" />

                <BrandingItem video src="bananas.mp4" />

                <BrandingItem img src="joana.gif" />

                <BrandingItem img src="losninos.png" />

                <BrandingItem video src="doutorafono.mp4" />

            </div>
        </section>
    )
}