'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import NavItemDesktop from './NavItemDesktop'
import MenuMobile from './Mobile'

export default function Navbar() {
	const [navClass, setNavClass] = useState('')
	const [scrollPos, setScrollPos] = useState(0)

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const currentScrollPos = window.pageYOffset;

	// 		if (currentScrollPos < scrollPos) {
	// 			// Scrolling UP
	// 			setNavClass('fixed top-0 bg-red-500 duration-500')
	// 		} else {
	// 			// Scrolling DOWN
	// 			setNavClass('duration-500')
	// 		}
	// 		setScrollPos(currentScrollPos)
	// 	}

	// 	window.addEventListener('scroll', handleScroll)

	// 	return () =>{
	// 		window.removeEventListener('scroll',handleScroll)
	// 	}
	// },[scrollPos])

	return (
		<nav className={`  flex justify-between px-4 sm:px-12 xl:px-20 py-4 duration-500 z-50 ${navClass}`}>
			{/*LOGO*/}
			<Link
				href={'/'}
				className='text-3xl sm:text-4xl font-thin text-white mt-1 lg:mt-0'
				style={{ wordSpacing: '-10px' }}>
				Willa <span className=' ml-2 font-normal'>na <span className='ml-2'>Wzgórzu</span></span>
			</Link>

			{/*NAV MOBILE*/}

			<MenuMobile />

			{/*NAV DESKTOP*/}
			<ul className='hidden lg:flex justify-center items-center gap-12 xl:gap-20 text-white text-lg'>
				<NavItemDesktop href='/#pokoje'>Pokoje</NavItemDesktop>
				<NavItemDesktop href='/#okolica'>Okolica</NavItemDesktop>
				<NavItemDesktop href='/#galeria'>Galeria</NavItemDesktop>
				<NavItemDesktop href='/#o-nas'>O nas</NavItemDesktop>
				<NavItemDesktop href='/#kontakt'>Kontakt</NavItemDesktop>
			</ul>
		</nav>
	)
}
