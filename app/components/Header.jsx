import Navbar from './nav/Navbar'

import Marquee from 'react-fast-marquee'
import MarqueeItem from './MarqueeItem'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="flex flex-col justify-between w-full h-screen bg-[url('/img/hero--desktop.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-gray-300">
			<div>
				{/*MARQUEE*/}
				<Marquee autoFill='true' pauseOnHover='true' className='border-b py-3 text-xs text-white'>
					<MarqueeItem>Znajdź jasność</MarqueeItem>
					<MarqueeItem>Znajdź sens</MarqueeItem>
					<MarqueeItem>Znajdź nowy początek</MarqueeItem>
					<MarqueeItem>Znajdź odpoczynek</MarqueeItem>
					<MarqueeItem>Znajdź rozkosz</MarqueeItem>
					<MarqueeItem>Znajdź radość</MarqueeItem>
				</Marquee>
				{/*NAV*/}
				<Navbar />
			</div>

			<h1 className='text-5xl sm:text-6xl text-center font-extralight text-white px-6'>
				Remedium
				<span className='ml-5 font-normal'>na hałas.</span>
			</h1>
			<div className='mx-auto px-6 pb-16'>
				<a href='#' className='link-btn'>
					Zarezerwuj swój wypoczynek
				</a>
			</div>
		</header>
	)
}
