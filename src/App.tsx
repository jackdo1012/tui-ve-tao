import React from "react";
import Images from "./components/Images//Images";
import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
} from "react-router-dom";
import About from "./components/About/About";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import { io, Socket } from "socket.io-client";

const socket: Socket = io(`${process.env.REACT_APP_SERVER_URL}`);

const App: React.FC = () => {
    // const componentsClassName = useAppSelector(
    //     (state: RootState) => state.componentClass
    // )
    // console.log(componentsClassName)

    return (
        <GlobalStyles>
            <div className={styles.app}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Navigate to="/images" />} />
                        <Route
                            path="/images"
                            element={<Images socket={socket} />}
                        />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Router>
            </div>
        </GlobalStyles>
    );
};

export default App;
