import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/Toggle.module.css"

const ToggleType = {
    "light": true,
    "dark": false
}

export default function Toggle({ helperText = false }) {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = (e) => {
        if (theme === "light") {
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
        <div className={styles.switchCase}>
            <label className={styles.switch}>
                <input type="checkbox"
                    checked={ToggleType[theme]}
                    onChange={handleChange}
                />
                <span className={styles.slider}></span>
            </label>
            {helperText && <p className={styles.switchTitle}>{theme === "light" ? "Light Mode" : "Dark Mode"}</p>}
        </div>
    )
}