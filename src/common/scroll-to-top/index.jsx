import React, {useCallback, useEffect, useState} from "react";
import {UpButton} from "./styles";
import { ReactComponent as DoubleArrowUp } from "../../assets/icons/double-up-arrow.svg";

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = useCallback(() => {
            const headerHeight = window.screenY;
            setShowScroll(window.pageYOffset > headerHeight);
        },
        [showScroll],
    );

    useEffect(() => {
            window.addEventListener('scroll', checkScrollTop);
            return () => window.removeEventListener('scroll', checkScrollTop);
        },
        [checkScrollTop],
    );

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <UpButton onClick={scrollTop} className={"d-" + (showScroll ? "flex" : "none")}>
            <i><DoubleArrowUp /></i>
        </UpButton>
    );
};

export default ScrollToTop;
