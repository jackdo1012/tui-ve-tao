import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { changeAboutClass } from "../../slice/componentClassSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import styles from "./About.module.scss"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { RootState } from "../../app/store"

const About: React.FC = () => {
    const dispatch = useAppDispatch()
    const dark: boolean = useAppSelector(
        (state: RootState) => state.darkLight.dark
    )
    useEffect(() => {
        dispatch(changeAboutClass(styles.about))
    }, [])
    return (
        <div className={`${styles.about} ${dark ? styles.dark : styles.light}`}>
            <p className={styles.title}>Giới thiệu</p>
            <p className={styles.description}>Vẽ táo...</p>
            <ul className={styles.list}>
                <li
                    className={styles.item}
                    onClick={() =>
                        window.open(
                            "https://www.facebook.com/tui.ve.tao",
                            "_blank"
                        )
                    }
                    style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                    https://www.facebook.com/tui.ve.tao
                </li>
                <li className={styles.item}>
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    dominhtrijack@gmail.com
                </li>
                <li className={styles.item}>
                    <FontAwesomeIcon icon={faPhone} /> (+84)938647913
                </li>
            </ul>
        </div>
    )
}

export default About
