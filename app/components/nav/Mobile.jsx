'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

import MobileNavItem from './NavItemMobile'

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
			<button onClick={() => setOpenMenu(true)} className='lg:hidden'>
				<img src='/icons/hamburger.svg' alt='' className='w-12' />
			</button>

			<motion.div
				variants={menuVariants}
				initial='hidden'
				animate={openMenu ? 'show' : ''}
				className='fixed inset-0 bg-secondary z-50 flex flex-col justify-between items-center py-8 px-4'>
				<button onClick={() => setOpenMenu(false)} className='self-end'>
					<img src='/icons/close.svg' alt='' className=' w-6' />
				</button>

				<Link
					href={'/'}
					className='text-3xl sm:text-4xl font-thin text-white mt-1 lg:mt-0'
					style={{ wordSpacing: '-10px' }}>
					Chatka <span className=' ml-1 font-normal'>pod Jodłami</span>
				</Link>

				<ul className='flex flex-col justify-center  text-white text-3xl font-extralight w-full'>
					<MobileNavItem onClick={()=>setOpenMenu(false)} href='#'>Zostań</MobileNavItem>
					<MobileNavItem onClick={()=>setOpenMenu(false)} href='#'>Pracuj</MobileNavItem>
					<MobileNavItem onClick={()=>setOpenMenu(false)} href='#'>Oczekiwania</MobileNavItem>
					<MobileNavItem onClick={()=>setOpenMenu(false)} href='#'>About</MobileNavItem>
					<MobileNavItem onClick={()=>setOpenMenu(false)} href='#'>Contact</MobileNavItem>
				</ul>

				<div className='px-6 mx-auto'>
					<button className='mb-16 border border-dotted text-white px-12 py-2 rounded-full uppercase font-light bg-transparent hover:bg-secondary duration-500'>
						Zarezerwuj swój wypoczynek
					</button>
				</div>
			</motion.div>
		</>
	)
}
