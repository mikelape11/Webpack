
import gsap from 'gsap';
import './input.scss';

gsap.to(".cuadrado1", {duration: 2, x:480});
gsap.to(".cuadrado2", {duration: 3, x:980});
gsap.to(".cuadrado3", {duration: 4, x:1480});

gsap.set(".cuadrado1 .cuadrado2, .cuadrado3", {transformOrigin: "50% 50%"});
gsap.to(".cuadrado1 .cuadrado2, .cuadrado3", {duration: 10, rotation: 100000});

