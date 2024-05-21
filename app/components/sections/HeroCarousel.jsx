'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'

import { FreeMode } from 'swiper/modules'

export default function App() {
	return (
		<section  className=' py-10 2xl:py-20'>
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
					<img src='/img/willa_na_wzgorzu-11.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-25.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-65.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-22.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-69.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-16.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-66.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-38.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-64.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-42.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-43.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-48.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='/img/willa_na_wzgorzu-58.jpg' alt='pokój gościnny w Willa na Wzgórzu w Zakopanym' width={1131} height={754} loading='lazy' />
				</SwiperSlide>
			</Swiper>
		</section>
	)
}
