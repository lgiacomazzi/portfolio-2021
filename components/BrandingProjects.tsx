import Link from "next/link"
import styles from "../styles/components/BrandingProjects.module.css"


function BrandingItem({ src, href = "" }) {
    return (
        <Link href={"/portfolio/" + src.split(".png")[0]} >
            <img className={styles.gridItem} src={`./images/branding/${src}`} />
        </Link>
    )
}

export default function BrandingProjects() {
    return (
        <section id="portfolio" className="pt-4 pb-4 bk-white">
            <div className={styles.gridContainer}>
                <BrandingItem src="doutorafono.png" />
                <BrandingItem src="farmshare.png" />
                <BrandingItem src="fasesefaces.png" />
                <BrandingItem src="joana.png" />
                <BrandingItem src="joana.png" />
                <BrandingItem src="saudeaqui.png" />
                <BrandingItem src="ray2.png" />
            </div>
        </section>
    )
}