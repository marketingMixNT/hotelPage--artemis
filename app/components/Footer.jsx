import Link from 'next/link'
import React from 'react'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='px-12 md:px-32 py-12 bg-third flex flex-col justify-center items-center xl:justify-start xl:items-start gap-12 xl:gap-0 xl:grid grid-cols-4 text-white'>
			{/* FIRST COL */}
			<div className='col-span-1'>
				<div className='relative flex items-center justify-center max:pl-12'>
					
					<Link href="/" className='flex justify-center items-center'>
						<img src='/logo--white.png' alt='' className=' w-[150px] xl:w-[200px]  max:w-[300px]  ' />
					</Link>
				</div>
			</div>

			{/* SECOND COL */}
			<div className='flex flex-col items-center lg:items-start text-center xl:text-left mx-auto gap-4'>
				<h2 className='uppercase'>Social Media</h2>
				<a href='#' target='_blank' className='link-hover'>
					Instagram
				</a>
				<a href='#' target='_blank' className='link-hover'>
					Facebook
				</a>
			</div>

			{/* THIRD COL */}
			<div className='flex flex-col  text-center xl:text-left mx-auto gap-4'>
				<Link href={'https://maps.app.goo.gl/Ziv89Yi2cS1hckyUA'}>
				<h2 className='uppercase'>Adres</h2>
				<a className='link-hover' href='#'>
					Żywczańskie 22c <br />
					34-500 Zakopane
				</a>
				</Link>
			</div>

			{/* FOURTH COL */}
			<div className='flex flex-col items-end '>
				<div className='flex flex-col justify-center xl:justify-start items-center xl:items-start gap-4 '>
					<h2 className='uppercase'>Kontakt</h2>
					<a className='link-hover' href='mailto:kontakt@willanawzgorzu.pl'>
						kontakt@willanawzgorzu.pl
					</a>
					<a className='link-hover' href='tel:+48795314699'>
						+48 795 314 699
					</a>
				</div>
			</div>

			{/* COPY */}
			<div className='col-span-4 flex flex-col items-center  xl:items-end gap-4 lg:mt-24'>
				<span className='uppercase text-wrap text-center xs:text-left'>© Willa na Wzgórzu {currentYear}</span>
				<a href='https://marketingmix.pl'>
					<img src='/marketingmix.svg' alt='logo wykonawcy - MarketingMix.pl' className='w-28' />
				</a>
			</div>
		</footer>
	)
}
