import React from 'react'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='px-12 md:px-32 py-12 bg-third flex flex-col justify-center items-center xl:justify-start xl:items-start gap-12 xl:gap-0 xl:grid grid-cols-4 text-white'>
			{/* FIRST COL */}
			<div className='col-span-1'>
				<div className='relative flex items-center justify-center'>
					<img src='/text.png ' alt='' className='w-[60%] max:w-[40%] animate-spin-slow' />

					<img src='/logo.png' alt='' className='absolute w-[25%] max:w-[15%] mb-5' />
				</div>
			</div>

			{/* SECOND COL */}
			<div className='flex flex-col text-center xl:text-left mx-auto gap-4'>
				<h2 className='uppercase'>Follow</h2>
				<a href='#' target='_blank' className='link-hover'>
					Instagram
				</a>
				<a href='#' target='_blank' className='link-hover'>
					TikTok
				</a>
				<a href='#' target='_blank' className='link-hover'>
					Facebook
				</a>
				<a href='#' target='_blank' className='link-hover'>
					YouTube
				</a>
			</div>

			{/* THIRD COL */}
			<div className='flex flex-col  text-center xl:text-left mx-auto gap-4'>
				<h2 className='uppercase'>Praca</h2>
				<a className='link-hover' href='mailto:praca@chatkajodla.pl'>
					praca@chatkajodla.pl
				</a>
			</div>

			{/* FOURTH COL */}
			<div className='flex flex-col items-end '>
				<div className='flex flex-col justify-center xl:justify-start items-center xl:items-start gap-4 '>
					<h2 className='uppercase'>Kontakt</h2>
					<a className='link-hover' href='mailto:kontakt@chatkajodla.pl'>
						kontakt@chatkajodla.pl
					</a>
					<a className='link-hover' href='mailto:rezerwacja@chatkajodla.pl'>
						rezerwacja@chatkajodla.pl
					</a>
					<a className='link-hover' href='tel:+48876345733'>
						+48 876-345-733
					</a>
				</div>
			</div>

			{/* COPY */}
			<div className='col-span-4 flex flex-col items-center  xl:items-end gap-4 mt-4'>
				<span className='uppercase text-wrap text-center xs:text-left'>© Chatka pod Jodłami {currentYear}</span>
				<a href='https://marketingmix.pl'>
					<img src='/marketingmix.svg' alt='logo wykonawcy - MarketingMix.pl' className='w-28' />
				</a>
			</div>
		</footer>
	)
}
