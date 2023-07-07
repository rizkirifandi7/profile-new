import React from 'react'
import './scrollup.css'

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        // ketika scroll lebih tinggi dari 560 tinggi viewport, tambahkan show-scroll class pada tag a dengan top scroll-top
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp