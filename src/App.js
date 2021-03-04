import React, {Suspense} from "react";
import "./styles/App.scss";
import {GlobalStyles} from "./styles/GlobalStyles";
import {Header, Footer, Portfolio, LandingBanner, AboutMe, Contact} from "./components";
import {ScrollToTop, LoadingSpinner} from "./common";

function App() {
    return (
        <Suspense fallback={LoadingSpinner}>
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
