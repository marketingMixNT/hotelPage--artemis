'use client'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

// import './styles.css';

// import required modules
import { Navigation, EffectFade } from 'swiper/modules'

export default function CarouselOutdoor() {
	return (
		<>
			<Swiper
				navigation={true}
				effect={'fade'}
				modules={[Navigation, EffectFade]}
				loop={true}
				grabCursor={true}
				className=''>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-1.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-33.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-2.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-34.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-3.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-36.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-4.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-54.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-5.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-55.jpg' alt="widok z zewnątrz w Willa na Wzgórzu w Zakopanym" width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				
				

				
			</Swiper>
		</>
	)
}
