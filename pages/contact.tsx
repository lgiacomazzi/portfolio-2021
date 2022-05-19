import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Header from "../components/Header";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contato</title>
            </Head>

            <Header />

            <div className="container">
                <h1 className="mt-5">Contato</h1>
            </div>
        </>
    )
}
