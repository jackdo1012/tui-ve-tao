import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { changeNavbarClass } from "../../slice/componentClassSlice";
import { changeMode } from "../../slice/darkLightSlice";
import styles from "./Navbar.module.scss";
import { useLocation, Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const dark: boolean = useAppSelector(
        (state: RootState) => state.darkLight.dark,
    );
    const darkLightSwitch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMode(e.target.checked));
    };
    useEffect(() => {
        dispatch(changeNavbarClass(styles.navbar));

        if (!localStorage.getItem("dark")) {
            localStorage.setItem("dark", true.toString());
        }
    }, []);

    return (
        <div
            className={`${styles.navbar} ${dark ? styles.dark : styles.light}`}
        >
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link
                        className={
                            location.pathname === "/images"
                                ? styles.selected
                                : ""
                        }
                        to="/images"
                    >
                        Hình ảnh
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={
                            location.pathname === "/about"
                                ? styles.selected
                                : ""
                        }
                        to="/about"
                    >
                        Giới thiệu
                    </Link>
                </li>
                <li className={styles.item}>
                    <input
                        type="checkbox"
                        id={styles.darkLightSwitch}
                        onChange={darkLightSwitch}
                        checked={dark}
                    />
                    <label htmlFor={styles.darkLightSwitch}>
                        <div>
                            <FontAwesomeIcon icon={faMoon} />
                            <FontAwesomeIcon icon={faSun} />
                        </div>
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
