import Navbar from './nav/Navbar'

import Marquee from 'react-fast-marquee'
import MarqueeItem from './MarqueeItem'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="flex flex-col justify-between w-full h-screen bg-[url('/img/willa_na_wzgorzu-7.jpg')] bg-no-repeat bg-cover bg-top bg-fixed bg-blend-multiply bg-gray-300">
			<div>
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

			<h1 className='text-5xl sm:text-6xl text-center font-normal text-white px-6'>
				Willa  
				<span className='pt-12 font-extralight ml-3'>tuż przy szlakach górskich!</span>
			</h1>
			<div className='mx-auto px-6 pb-16'>
				<a href='#' className='link-btn'>
					Zarezerwuj
				</a>
			</div>
		</header>
	)
}
