import React from 'react'
import "./App.scss";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function Nav() {

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() =>{
      
    
    gsap.to(".h1", {
      yPercent: -10,
      delay:0.5,
      opacity:1,
      ease:'none',
      scrollTrigger: {
          trigger: '.h1',
      }
  })
 
  gsap.to(".parag", {
    yPercent: -10,
    delay:0.5,
    opacity:1,
    ease:'none',
    stagger:1.4,
    scrollTrigger: {
        trigger: '.parag',
        
    }
})

 


  })
  return (
    <>
    <div className="nav">
      <h1 className='h1'>WHY US</h1>
      <p className='parag'>menjadi satu fakta bahawa pembaca akan terganggu oleh text yang boleh difahami apabila melihat susunan mukasurat. Kegunaan Lorem Ipsum adalah kerana ia mempunyai susunan  yang kelihatan normal, yang lebih menarik berbeza dengan "Contoh disini, contoh disini". Ia menyerupai text yang boleh dibaca dalam bahasa Inggeris. Banyak pakej pencetakan desktop dan editor web sekarang menggunakan Lorem Ipsum sebagai model text, dan satu search "Lorem Ipsum" dapat memperlihatkan sejumlah website yang masih dalam persiapan. Pelbagai versi telah timbul dalam tahun tahun yang lepas, kadangkala secara sepontan, dan kadangkala di sengajakan (seperti selitan lawak jenaka dan sebagainya).</p>
      <br />
      <p className='parag'> banyak versi dari mukasurat-mukasurat Lorem Ipsum yang sedia ada, tetapi kebanyakkannya telah diubahsuai, lawak jenaka diselitkan, atau  yang di sertakan secara rambang yang lansung tidak munasabah. Jika anda ingin menggunakan Lorem Ipsum, anda perlu memastikan bahwa tiada apa yang memalukan akan terselit didalam di tengah tengah kandungan text. Semua injin Lorem Ipsum didalam Internet hanya mengulangi text, sekaligus menjadikan injin kami sebagai yang terunggul dan tepat sekali di Internet. Ia menggunakan kamus yang mengandungi lebih 200 </p>
      <br />
      <p className='parag'>Berbeza dari pendapat umum yang popular, Lorem Ipsum bukan karya text secara rambang. Ia menpunyai asal usul dari secebis sastera klasik Latin dari kurun 45 TM (Tahum Masihi) , menjadikan ia karya berusia lebihBerbeza dari pendapat umum yang popular, Lorem Ipsum bukan karya text secara rambang. Ia menpunyai asal usul dari secebis sastera klasik Latin dari kurun 45 TM (Tahum Masihi) , menjadikan ia karya berusia lebih Berbeza dari pendapat umum yang popular, Lorem Ipsum bukan karya text secara rambang. Ia menpunyai asal usul dari secebis sastera klasik Latin dari kurun 45 TM (Tahum Masihi) , menjadikan ia karya berusia lebih</p>


      <button className='btn'>JOIN US</button>
    </div>

    </>
  )
}
