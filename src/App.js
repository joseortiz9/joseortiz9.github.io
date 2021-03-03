import React, {Suspense} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import {GlobalStyles} from "./styles/GlobalStyles";
import {Header, Footer, Portfolio, LandingBanner, AboutMe} from "./components";
import ScrollToTop from "./common/scroll-to-top";

function App() {
    return (
        <Suspense fallback={"Loading"}>
            <GlobalStyles />
            <ScrollToTop />
            <Header />
            <LandingBanner />
            <Portfolio />
            <AboutMe />
            <Footer />
        </Suspense>
);
}

export default App;
