import React from "react";

// import components
import { Header } from "../../components/Header";

// import page sections
import HomePage from "../HomePage";
import AboutMe from "../AboutMe";

// import styles
import * as Style from './style';

const FullPage: React.FC = () => {
    return (
        <Style.Container>
            <Header/>
            <HomePage/>
            <AboutMe/>
        </Style.Container>
    )
}

export default FullPage;