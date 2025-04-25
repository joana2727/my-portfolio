import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const scrollUp = document.querySelector(".scrollup");

    const handleScroll = () => {
      // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll up smoothly
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scroll behavior
    });
  };

  return (
    <a
      href="#home"
      className="scrollup"
      alt="Scroll Up"
      aria-label="Click to Scroll Up to the Top of the Page"
      onClick={scrollToTop} // Trigger scroll when clicked
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
