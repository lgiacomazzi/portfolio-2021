import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/Toggle.module.css"

const ToggleType = {
    "light": true,
    "dark": false
}

export default function Toggle() {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleChange = (e) => {
        if(theme === "light") {
            setTheme("dark")
        } else setTheme("light");
    };

    // useEffect(() => {
    //     console.log("sliding toggle to " + theme)
    //     if(theme === "dark") {
    //         setChecked(true) } 
    // }, [])

    return (
        // Dark Mode = Checked True
        <label className={styles.switch}>
            <input type="checkbox"
                checked={ToggleType[theme]}
                onChange={handleChange}
                 />
            <span className={styles.slider}></span>
        </label>
    )
}