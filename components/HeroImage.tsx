import Image from "next/image";

export default function HeroImage({ src }) {
    return (
        <section id="hero" className="container-fluid">
            <Image layout="fill" src={src} />
        </section>
    )
}