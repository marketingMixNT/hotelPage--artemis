'use client'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade';


// import './styles.css';

// import required modules
import { Navigation,EffectFade } from 'swiper/modules'

export default function App() {
	return (
		<>
			<Swiper navigation={true} effect={'fade'} modules={[Navigation,EffectFade]} loop={true} grabCursor={true} className=''>
				<SwiperSlide>
					<img src='/img/inside-1.jpeg' alt='wnętrze Chatki pod Jodłami' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/inside-2.jpeg' alt='wnętrze Chatki pod Jodłami' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/inside-3.jpeg' alt='wnętrze Chatki pod Jodłami' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/outdoor-1.jpeg' alt='Chatka pod Jodłami' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
