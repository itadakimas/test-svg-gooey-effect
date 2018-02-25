import 'core/polyfills';
import SVG4Everybody from 'svg4everybody';
import { TweenMax, Linear } from "gsap";


function animateLoader()
{
  TweenMax.to(document.querySelector("#disc"), 5, {
    ease: Linear.easeNone,
    repeat: -1,
    rotation: "-=360",
    transformOrigin: "50% 50%"
  });
}


SVG4Everybody();
document.addEventListener('DOMContentLoaded', function() {

  animateLoader();
  console.log('main.js loaded');
});
