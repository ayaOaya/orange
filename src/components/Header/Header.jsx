import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./style.scss"

export default function Header() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        /* CONTAIN1 */
        gsap.to(".img", {delay:1.2, duration:1, opacity:1 , y:10, scale:1})
        gsap.to(".navbar", {delay:1.4, duration:1, opacity:1 , y:10})
        gsap.to(".title", {delay:1.9, duration:1, opacity:1 , y:-40})
        gsap.to(".title", {duration:0.9, y:10, x:-10, scrollTrigger:{
            trigger:'.title',
            start: "top top",
            end:"bottom top",
            scrub:true
        }})
      
        gsap.to(".headerParag", {delay:2.3, duration:1, opacity:1 , y:-10})

        gsap.to(".headerParag", {duration:1, opacity:0, scrollTrigger:{
            trigger:'.title',
            start: "top top",
            end:"bottom top",
            scrub:true
        }})
        gsap.to(".contain2", {
            yPercent: -100,
            ease:'none',
            scrollTrigger: {
                trigger: '.contain2',
                start:'top bottom',
                /* or end:'bottom top */
                end:'top top',
                scrub:true,
            }
        })       
    })

  return (
    <>
    <div className="contain1">
    <div className="navbar">
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">CONTACT</a></li>
        </ul>
    </div>

    <div className="headerTitle">
        <h1 className='title'>PROFESSIONAL MARKETING AGENCY</h1>

        <p className="headerParag">THE FUTURE IS OURS.</p>

        <div className="headerImg">
            <img className='img' src=".\images\pexels-manuel-michael-14691909 (1).jpg" alt="//" />
           
        </div>
    </div>
    </div>
    <div className="contain2">

    <h1 className='title2'> DIGITAL PROFESSIONAL MARKETING AGENCY</h1>

    <div className="about">
        <h3 className="ab">ABOUT</h3>
        <p className="text">At our design agency, we are passionate about creating stunning and effective designs that truly make an impact. We pride ourselves on our ability to take a client's vision and turn it into a beautiful and functional design that exceeds their expectations. Our team of talented designers is dedicated to staying up-to-date with the latest design trends and technologies, allowing us to create innovative and cutting-edge designs that set our clients apart from the competition. Whether it's a website, logo, or marketing materials, we approach every project with a creative mindset and a commitment to excellence. We believe that great design can change the world, and we're proud to be a part of that change through our work.</p>

    </div>
    </div>
    <div className="contain3">
    </div>
    </>
  )
}

/* READ THE DOCUMENTS,
ADD THE 3D TEXT AND ANIMATION  */