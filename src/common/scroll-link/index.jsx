import React from "react";

const ScrollLink = (props) => {
    const {classes, sectionID, children} = props;
    const handleScrollCLick = (e) => {
        e.preventDefault();
        document.getElementById(sectionID)?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <a onClick={handleScrollCLick} className={classes} href="#" role="button">
            {children}
        </a>
    );
};

export default ScrollLink;
