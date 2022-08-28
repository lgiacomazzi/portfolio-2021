import Link from "next/link"
import styles from "../styles/components/BrandingProjects.module.css"


function BrandingItem({ img = false, video = false, src }) {
    return (
        <Link href={"/portfolio/" + src.split(".png")[0]} >
            <>
                {img &&
                    <img className={styles.gridItem} src={`./images/branding/${src}`} />}
                {video &&
                    <video width="100%" height="100%" style={{ objectFit: "cover" }} autoPlay muted loop>
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
                <BrandingItem img src="doutorafono.png" />

                <BrandingItem img src="farmshare.png" />

                <BrandingItem img src="fasesefaces.png" />

                <BrandingItem img src="bananas.png" />

                <BrandingItem video src="background.mp4" />

                <BrandingItem img src="saudeaqui.png" />

                <BrandingItem img src="ray2.png" />
            </div>
        </section>
    )
}