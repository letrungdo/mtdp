export const PrevArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
  <a {...arrowProps} href="#">
    <i className="fad fa-chevron-left fa-2x"></i>
  </a>
);

export const NextArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
  <a {...arrowProps} href="#">
    <i className="fad fa-chevron-right fa-2x"></i>
  </a>
);
