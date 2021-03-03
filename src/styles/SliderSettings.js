export const PortfolioSliderProps = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 586,
            settings: {
                slidesToShow: 1
            }
        }
    ]
}

export const SkillsSliderProps = {
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
}