'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import NavItemMobile from './NavItemMobile'

export default function NavMenuMobile() {
	const [openMenu, setOpenMenu] = useState(false)

	const menuVariants = {
		hidden: {
			x: '100%',
			opacity: 0,
		},
		show: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: [0.6, 0.01, 0.05, 0.9],
			},
		},
	}

	return (
		<>
			{/* HAMBURGER */}
			<button onClick={() => setOpenMenu(true)} className='lg:hidden' aria-label='otwórz menu'>
				<Image src='/icons/hamburger.svg' alt='' width={48} height={48} className='w-12' />
			</button>
			{/* MOBILE MENU*/}
			<motion.div
				variants={menuVariants}
				initial='hidden'
				animate={openMenu ? 'show' : ''}
				className='fixed inset-0 flex flex-col justify-between items-center py-8 px-4 bg-secondary z-50'>
				{/* Close */}
				<button onClick={() => setOpenMenu(false)} className='self-end' aria-label='zamknij menu'>
					<Image src='/icons/close.svg' alt='' width={24} height={24} className=' w-6' />
				</button>
				{/* Title */}
				<Link
					href={'/'}
					className='text-3xl sm:text-4xl font-thin text-white mt-1 lg:mt-0'
					style={{ wordSpacing: '-10px' }}>
					Chatka <span className=' ml-1 font-normal'>pod Jodłami</span>
				</Link>
				{/* Links */}
				<ul className='flex flex-col justify-center w-full text-3xl font-extralight text-white  '>
					<NavItemMobile onClick={() => setOpenMenu(false)} href='/#wypoczynek'>
						Wypoczynek
					</NavItemMobile>
					<NavItemMobile onClick={() => setOpenMenu(false)} href='/#praca-zdalna'>
						Praca zdalna
					</NavItemMobile>
					<NavItemMobile onClick={() => setOpenMenu(false)} href='/#wyglad'>
						Prezentacja
					</NavItemMobile>
					<NavItemMobile onClick={() => setOpenMenu(false)} href='/#o-nas'>
						O nas
					</NavItemMobile>
					<NavItemMobile onClick={() => setOpenMenu(false)} href='/#kontakt'>
						Kontakt
					</NavItemMobile>
				</ul>
				{/* Book */}
				<div className='mb-4 mx-auto px-6 '>
					<a href='#' className='link-btn'>
						Zarezerwuj 
					</a>
				</div>
			</motion.div>
		</>
	)
}
