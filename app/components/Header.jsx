import Navbar from './nav/Navbar'

import Marquee from 'react-fast-marquee'

export default function Header() {
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
				<Navbar />
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
