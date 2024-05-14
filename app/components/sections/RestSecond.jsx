
import Carousel from '../Carousel'

export default function Rest() {
	return (
		<section >
			{/* CONTAINER */}
			<div className='grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-y-0 px-8 lg:px-20 py-20  h-full '>
				{/* text */}
				<div className='lg:col-span-2 2xl:col-span-1 flex flex-col justify-between gap-8 lg:gap-0'>
					<div className='flex flex-col gap-8 lg:gap-12'>
						<h2 className='text-lg font-light uppercase '>Nasze przesłanie</h2>
						<p className='text-3xl'>
							Sanctuary is more than a weekend getaway — more than just a transient place to be outside.
						</p>
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
				{/* img */}
				<div className=' lg:col-start-3 lg:col-end-6 xl:ml-6 py-6 2xl:py-12  max-h-[950px]'>
					<Carousel/>
				
				</div>
			</div>
			
		</section>
		
	)
}
