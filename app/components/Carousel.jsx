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

export default function App() {
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
					<img src='/img/willa_na_wzgorzu-39.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-37.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='/img/willa_na_wzgorzu-17.jpg'
						alt='pokój gościnny w Willa na Wzgórzu w Zakopanym'
						width={1250}
						height={835}
						loading='lazy'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='/img/willa_na_wzgorzu-23.jpg'
						alt='pokój gościnny w Willa na Wzgórzu w Zakopanym'
						width={1250}
						height={835}
						loading='lazy'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='/img/willa_na_wzgorzu-24.jpg'
						alt='pokój gościnny w Willa na Wzgórzu w Zakopanym'
						width={1250}
						height={835}
						loading='lazy'
					/>
				</SwiperSlide>

				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-41.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-44.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-49.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-51.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-31.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-52.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-60.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-62.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1250} height={835} loading='lazy' />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
