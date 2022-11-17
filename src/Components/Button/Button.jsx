import { useContext } from "react"
import { ThemeContext } from "../../ThemeContext/ThemeContext"

import styles from "./Button.module.css"
export const Button=({text,handleButton})=>{
    const {newTheme}=useContext(ThemeContext)
    return (
        <button style={{color:`${newTheme.buttonColor}`,background:`${newTheme.linkHover}`}}
        className={styles.buttonComponent}
        onClick={()=>handleButton()}
        ><span>{text}</span>
        </button>
    )

}