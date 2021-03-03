import React, {Suspense} from "react";
import "./styles/App.scss";
import {GlobalStyles} from "./styles/GlobalStyles";
import {Header, Footer, Portfolio, LandingBanner, AboutMe, Contact} from "./components";
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
            <Contact />
            <Footer />
        </Suspense>
);
}

export default App;
