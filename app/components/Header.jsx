'use client'

import Navbar from './nav/Navbar'

import Marquee from 'react-fast-marquee'
import MarqueeItem from './MarqueeItem'
import Link from 'next/link'

import { useState, useEffect } from 'react'

export default function Header() {
	const [navClass, setNavClass] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset

			if (currentScrollPos > 500) {
				// Scrolling DOWN and more than 500px from the top
				setNavClass('block bg-third transition-all duration-500 ease-in-out')
			} else {
				// Scrolling UP and less than 500px from the top
				setNavClass('bg-transparent duration-500')
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`flex flex-col justify-between w-screen h-[95vh] md:h-screen bg-[url('/img/willa_na_wzgorzu-7.jpg')] bg-no-repeat bg-cover bg-top bg-fixed bg-blend-multiply bg-gray-300 relative`}>
			<div className={`fixed top-0 left-0 right-0 ${navClass} z-50`}>
				{/*MARQUEE*/}
				<Marquee autoFill='true' pauseOnHover='true' className='border-b py-3 text-xs text-white'>
					<MarqueeItem>Górski Relaks</MarqueeItem>
					<MarqueeItem>Odpoczynek w Ciszy</MarqueeItem>
					<MarqueeItem>Komfort w Zakopanem</MarqueeItem>
					<MarqueeItem>Blisko Natury</MarqueeItem>
				</Marquee>
				{/*NAV*/}
				<Navbar />
			</div>

			<h1 className='text-5xl sm:text-6xl text-center font-normal text-white px-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				Willa
				<span className='pt-12 font-extralight ml-3'>tuż przy szlakach górskich!</span>
			</h1>
			<div className='mx-auto px-6 pb-16 absolute bottom-5 left-1/2  transform -translate-x-1/2 '>
				<a href='https://www.booking.com/hotel/pl/willa-pracus.pl.html' className='link-btn'>
					Zarezerwuj
				</a>
			</div>
		</header>
	)
}
