'use client'

import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
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
		<header className="flex flex-col justify-between w-full h-screen bg-[url('/img/hero--desktop.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-gray-300">
			<div>
				{/*MARQUEE*/}
				<Marquee autoFill='true' pauseOnHover='true' className='border-b py-3 text-xs text-white'>
					<span className='mr-16'>Find Clarity</span>
					<span className='mr-16'>Find Meaning</span>
					<span className='mr-16'>Find New Beginings</span>
					<span className='mr-16'>Find Pause</span>
					<span className='mr-16'>Find Bliss</span>
					<span className='mr-16'>Find Joy</span>
				</Marquee>
				{/*NAV*/}
				<nav className='flex justify-between px-4 sm:px-12 xl:px-20 py-4'>
					{/*LOGO*/}

					<Link
						href={'/'}
						className='text-3xl sm:text-4xl font-thin text-white mt-1 lg:mt-0'
						style={{ wordSpacing: '-10px' }}>
						Chatka <span className=' ml-1 font-normal'>pod Jodłami</span>
					</Link>

					{/*NAV MOBILE*/}
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
							<li className='border-t border-b border-dotted py-8 text-center'>
								<a href='#' className='hover:border-b duration-100'>
									Zostań
								</a>
							</li>
							<li className=' border-b border-dotted py-8 text-center'>
								<a href='#' className='hover:border-b duration-100'>
									Pracuj
								</a>
							</li>
							<li className=' border-b border-dotted py-8 text-center'>
								<a href='#' className='hover:border-b duration-100'>
									Oczekiwania
								</a>
							</li>
							<li className=' border-b border-dotted py-8 text-center'>
								<a href='#' className='hover:border-b duration-100'>
									About
								</a>
							</li>
							<li className='border-t border-b border-dotted py-8 text-center'>
								<a href='#' className='hover:border-b duration-100'>
									Contact
								</a>
							</li>
						</ul>

						<div className='px-6 mx-auto'>
							<button className='mb-16 border border-dotted text-white px-12 py-2 rounded-full uppercase font-light bg-transparent hover:bg-secondary duration-500'>
								Zarezerwuj swój wypoczynek
							</button>
						</div>
					</motion.div>

					{/*NAV DESKTOP*/}
					<ul className='hidden lg:flex justify-center items-center gap-12 xl:gap-20 text-white text-lg'>
						<li>
							<a href='#' className='hover:border-b duration-100'>
								Zostań
							</a>
						</li>
						<li>
							<a href='#' className='hover:border-b duration-100'>
								Pracuj
							</a>
						</li>
						<li>
							<a href='#' className='hover:border-b duration-100'>
								Oczekiwania
							</a>
						</li>
						<li>
							<a href='#' className='hover:border-b duration-100'>
								About
							</a>
						</li>
						<li>
							<a href='#' className='hover:border-b duration-100'>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<h1 className='text-5xl sm:text-6xl text-center font-extralight text-white px-6'>
				A remedy
				<span className='ml-5 font-normal'>to the noise.</span>
			</h1>
			<div className='px-6 mx-auto'>
				<button className='mb-16 border border-dotted text-white px-12 py-2 rounded-full uppercase font-light bg-transparent hover:bg-secondary duration-500'>
					Zarezerwuj swój wypoczynek
				</button>
			</div>
		</header>
	)
}
