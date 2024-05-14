'use client'

import React from 'react'
import Link from 'next/link'

import NavItemDesktop from './NavItemDesktop'
import MenuMobile from './Mobile'

export default function Navbar() {
	return (
		<nav className='flex justify-between px-4 sm:px-12 xl:px-20 py-4'>
			{/*LOGO*/}
			<Link
				href={'/'}
				className='text-3xl sm:text-4xl font-thin text-white mt-1 lg:mt-0'
				style={{ wordSpacing: '-10px' }}>
				Chatka <span className=' ml-1 font-normal'>pod Jodłami</span>
			</Link>

			{/*NAV MOBILE*/}

			<MenuMobile />

			{/*NAV DESKTOP*/}
			<ul className='hidden lg:flex justify-center items-center gap-12 xl:gap-20 text-white text-lg'>
				<NavItemDesktop href='/#wypoczynek'>Wypoczynek</NavItemDesktop>
				<NavItemDesktop href='/#praca-zdalna'>Praca zdalna</NavItemDesktop>
				<NavItemDesktop href='/#wyglad'>Wygląd</NavItemDesktop>
				<NavItemDesktop href='/#o-nas'>O nas</NavItemDesktop>
				<NavItemDesktop href='/#kontakt'>Kontakt</NavItemDesktop>
			</ul>
		</nav>
	)
}
