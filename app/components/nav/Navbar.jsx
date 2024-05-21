'use client'

import Link from 'next/link'

import NavItemDesktop from './NavItemDesktop'
import MenuMobile from './Mobile'

export default function Navbar() {
	

	return (
		<nav className={`  flex justify-between px-4 sm:px-12 xl:px-16 py-4 duration-500 z-50 `}>
			{/*LOGO*/}
			<Link
				href={'/'}
				className='text-3xl font-light text-white mt-1 lg:mt-0 flex justify-center items-center gap-2'
				style={{ wordSpacing: '-10px' }}><img src='/logo--navbar.png' className='w-12 hidden sm:block'/><span>

			
				Willa <span className=' ml-2 font-light'>na <span className='ml-2'>Wzgórzu</span></span>	</span>
			</Link>

			{/*NAV MOBILE*/}

			<MenuMobile />

			{/*NAV DESKTOP*/}
			<ul className='hidden lg:flex justify-center items-center gap-12 xl:gap-12 text-white text-lg'>
				<NavItemDesktop href='/#pokoje'>Pokoje</NavItemDesktop>
				<NavItemDesktop href='/#okolica'>Okolica</NavItemDesktop>
				
				<NavItemDesktop href='/#kontakt'>Kontakt</NavItemDesktop>
				<NavItemDesktop href='https://www.booking.com/hotel/pl/willa-pracus.pl.html'>Rezerwuj</NavItemDesktop>
			</ul>
		</nav>
	)
}
