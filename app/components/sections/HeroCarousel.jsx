'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'


import { FreeMode } from 'swiper/modules'

export default function App() {
	return (
		<section id='wyglad'>
			<Swiper
				slidesPerView={1}
				breakpoints={{
					1200: {
						slidesPerView: 2,
					},
				}}
				spaceBetween={30}
				freeMode={true}
				grabCursor={true}
				modules={[FreeMode]}
				className='heroSwiper'>
				<SwiperSlide>
					<img src='/img/outdoor-4.jpeg' alt='chatka pod Jodłami' width={1131} height={754} loading='lazy'/>
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/outdoor-7.jpeg' alt='chatka pod Jodłami' width={1131} height={754} loading='lazy'/>
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/outdoor-2.jpeg' alt='chatka pod Jodłami' width={1131} height={754} loading='lazy'/>
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/outdoor-6.jpeg' alt='chatka pod Jodłami' width={1131} height={754} loading='lazy'/>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}
