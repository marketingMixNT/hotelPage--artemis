import React from 'react'
import Carousel from '../Carousel'

export default function RemoteWork() {
	return (
		<section id='praca-zdalna' className=' '>
			{/* CONTAINER */}
			<div className='grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-y-0 px-8 lg:px-20 py-20  h-full '>
				{/* img */}
				<div className=' lg:col-start-1 lg:col-end-4 xl:ml-6 py-6 2xl:py-12  max-h-[950px] mr-20 w-full lg:w-auto'>
					<Carousel />
				</div>
				{/* text */}
				<div className='lg:col-start-4 lg:col-end-6 flex flex-col items-center justify-between gap-8 lg:gap-0 ml-12 mr-20 max:mr-80'>
					<div className='flex flex-col gap-8 lg:gap-12'>
						<h2 className='text-lg font-light uppercase '>Nasze przesłanie</h2>
						<p className='text-3xl'>An island of modern life in the middle of the natural world.</p>
						<div>
							<ul className='space-y-5'>
								<li className='flex items-center gap-6'>
									<img src='/icons/trees.svg' alt='' className='w-12' />
									<span className='uppercase font-light '>Praca wśród drzew</span>
								</li>
								<li className='flex items-center gap-6'>
									<img src='/icons/mountains.svg' alt='' className='w-12' />
									<span className='uppercase font-light '>Widok na góry</span>
								</li>
								<li className='flex items-center gap-6'>
									<img src='/icons/internet.svg' alt='' className='w-12' />
									<span className='uppercase font-light '>Szybkie WI-FI</span>
								</li>
								<li className='flex items-center gap-6'>
									<img src='/icons/sun.svg' alt='' className='w-12' />
									<span className='uppercase font-light '>Komfortowe warunki</span>
								</li>
							</ul>
						</div>
					</div>

					<p>
						We offer a return to the natural world: an innate force within us – something we’ve only just rediscovered,
						something we’ve for too long ignored.
					</p>
				</div>
			</div>
		</section>
	)
}
