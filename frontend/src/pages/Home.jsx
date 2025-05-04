import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import xray1 from '../assets/xray-1.png'
import xray2 from '../assets/xray-2.png'
import xray3 from '../assets/xray-3.png'
import xray4 from '../assets/xray-4.png'
import Navbar from '../components/Navbar';


const images = [xray1, xray2, xray3, xray4];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='w-screen min-h-screen bg-[#f4f6f9] text-center'>
      <Navbar/>
      {/* hero content */}
      <div className="flex flex-col items-center justify-center mt-10 pt-20 py-20 sm:py-10 sm:px-8 md:px-12 gap-10 sm:gap-5">
        <h1 className='text-gray-700 text-2xl sm:text-3xl md:text-4xl text-center'>
          Pneumonia Detection and Analysis Platform
        </h1>
        <p className="text-sm sm:text-md text-gray-700 mb-6 max-w-3xl font-medium px-4 text-center">
          This AI-powered web application enables early detection and analysis of pneumonia from chest X-ray images with high accuracy. Designed to support healthcare professionals and patients, the platform provides instant diagnostic results, visual reports, and intelligent chatbot assistance. By integrating deep learning with a user-friendly interface, it simplifies the diagnosis process and makes healthcare more accessible.
        </p>
        {/* CTA-----------------------> */}
        <Link to="/upload">
          <button className='w-full sm:w-auto flex justify-center items-center gap-3 bg-[#005450] border px-6 py-3 text-white shadow-[6px_5px_1px_rgba(0,0,0,1)] active:shadow-[4px_2px_1px_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-0.5'>
            Detect Now
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="currentColor">
              <path d="M15.5553 0.670898H5.77756C5.53189 0.670898 5.3331 0.86969 5.3331 1.11536C5.3331 1.36102 5.53189 1.55982 5.77756 1.55982H14.4824L0.129975 15.9122C-0.0436504 16.0859 -0.0436504 16.3671 0.129975 16.5407C0.216766 16.6275 0.330516 16.6709 0.444225 16.6709C0.557933 16.6709 0.671641 16.6275 0.758475 16.5407L15.1109 2.18827V10.8931C15.1109 11.1388 15.3097 11.3376 15.5553 11.3376C15.801 11.3376 15.9998 11.1388 15.9998 10.8931V1.11536C15.9998 0.86969 15.801 0.670898 15.5553 0.670898Z" fill="currentColor"></path></svg>

          </button>
        </Link>
        <div className="w-full max-w-xl px-4 mt-5">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center items-center h-[120px]">
                  <img
                    src={src}
                    alt={`X-ray ${i + 1}`}
                    className={`transition-all duration-300 ease-in-out rounded-xl shadow-md object-cover ${i === activeIndex
                        ? 'w-[120px] h-[120px] scale-110 z-20'
                        : 'w-[90px] h-[90px] opacity-60'
                      }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>
      </div>
    </div>
  );
}