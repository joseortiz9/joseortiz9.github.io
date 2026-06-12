import {Suspense} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/App.scss";
import {GlobalStyles} from "./styles/GlobalStyles";
import {Header, Footer, Portfolio, LandingBanner, AgentSystems, AboutMe, Contact} from "./components";
import {ScrollToTop, LoadingSpinner} from "./common";

function App() {
    return (
        <Suspense fallback={LoadingSpinner}>
            <GlobalStyles />
            <ScrollToTop />
            <Header />
            <main>
                <LandingBanner />
                <AgentSystems />
                <AboutMe />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </Suspense>
);
}

export default App;
