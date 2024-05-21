import Carousel from '../Carousel'

import React from 'react'

function RoomsSecond() {
  return (
	

	<section
		
		className=' lg:h-[95vh]  max:h-[80vh] 2xl:mb-20 px-6  lg:px-16 max:px-12  py-10   '>


		{/* container */}
		<div className='flex flex-col lg:flex-row justify-between  h-full gap-8 md:gap-12 lg:gap-16 2xl:gap-32 '>
			{/* text */}

			<div className='flex flex-col justify-between gap-8 md:gap-16 lg:gap-12 w-full lg:w-[45%] lg:order-1'>
				<div className='space-y-12'>
					<h2 className='heading'>Doskonała Lokalizacja</h2>
					<p className='text'>
						Nasz obiekt znajduje się w spokojnej okolicy Zakopanego, co gwarantuje ciszę i relaks. Bliskość do szlaków
						górskich oraz niewielka odległość od centrum miasta sprawiają, że jest to idealne miejsce dla miłośników
						przyrody i aktywnego wypoczynku.
					</p>
				</div>

				<div className=''>
					<ul className='space-y-5'>
						<li className='flex items-center gap-6'>
							<img src='/icons/trees.svg' alt='' className=' w-8 2xl:w-12' />
							<span className='uppercase font-light text-sm 2xl:font-base'>Bliskość szlaków turystycznych</span>
						</li>
						<li className='flex items-center gap-6'>
							<img src='/icons/mountains.svg' alt='' className=' w-8 2xl:w-12' />
							<span className='uppercase font-light text-sm 2xl:font-base'>Widok na góry</span>
						</li>
						<li className='flex items-center gap-6'>
							<img src='/icons/internet.svg' alt='' className=' w-8 2xl:w-12' />
							<span className='uppercase font-light text-sm 2xl:font-base'>Szybkie WI-FI</span>
						</li>
						<li className='flex items-center gap-6'>
							<img src='/icons/sun.svg' alt='' className=' w-8 2xl:w-12' />
							<span className='uppercase font-light text-sm 2xl:font-base'>Komfortowe warunki</span>
						</li>
					</ul>
				</div>

				<p className='text--small '>
					Goście mogą korzystać z przestronnego ogrodu, wyposażonego w grill oraz zestaw mebli ogrodowych, idealnego
					do spędzania czasu na świeżym powietrzu. To doskonałe miejsce na wieczorne spotkania i relaks po dniu pełnym
					wrażeń.
				</p>
			</div>
			{/* image */}
			<div className=' w-full lg:w-[55%] py-6'>
				<Carousel />
			</div>
		</div>
	</section>
)
}

export default RoomsSecond
