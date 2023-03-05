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
        gsap.to(".title", {delay:1.9, duration:1, opacity:1 , y:10})
        gsap.to(".headerParag", {delay:2.3, duration:1, opacity:1 , y:-10})

      /*   gsap.to(".contain1", {
            yPercent: 300,
            ease:'none',
            scrollTrigger: {
                trigger: '.contain2',
                start:'top bottom',
                end:'top top',
                scrub:true,
            }
        }) */

      

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

       /*   gsap.to(".contain3", {
            yPercent: -200,
            ease:'none',
            scrollTrigger: {
                trigger: '.contain2',
                start:'bottom top',
                end:'bottom top',
                scrub:true,
            }
        })  
        */
         



        
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
        <h1 className='title'> DIGITAL PROFESSIONAL MARKETING AGENCY</h1>

        <p className="headerParag">This agency is the next generation of upgrading stuff we like to help people achieve their dream goals and dream websites that what set us apart from the others we are professionals we are awesome.</p>

        <div className="headerImg">
            <img className='img' src=".\images\pexels-manuel-michael-14691909 (1).jpg" alt="//" />
           
        </div>
    </div>
    </div>



    <div className="contain2">

    <h1 className='title2'> DIGITAL PROFESSIONAL MARKETING AGENCY</h1>

    <div className="about">
        <h3 className="ab">ABOUT</h3>
        <p className="text">intresting text ha yes i know anyways balh blah bla qwe rttzu ioooppü aass dddd fffff ggfds  hjkk ll  ööökj mnbv  cxyy intresting text ha yes i know anyways balh blah bla qwe rttzu ioooppü aass dddd fffff ggfds  hjkk ll  ööökj mnbv  cxyy intresting text ha yes i know anyways balh blah bla qwe rttzu ioooppü aass dddd fffff ggfds  hjkk ll  ööökj mnbv  cxyy  intresting text ha yes i know anyways balh blah bla qwe rttzu ioooppü aass dddd fffff ggfds  hjkk ll  ööökj mnbv  cxyyintresting text ha yes i know anyways balh blah bla qwe rttzu ioooppü aass dddd fffff ggfds  hjkk ll  ööökj mnbv  cxyy</p>
    </div>


    </div>




    <div className="contain3">
<p className='qq'>smekmcmc
655px655px655px655px655px655px
vvvv655px655px655px655px655px655px655px655px655px655px</p>
    </div>






    </>
  )
}

/* READ THE DOCUMENTS,
ADD THE 3D TEXT AND ANIMATION  */