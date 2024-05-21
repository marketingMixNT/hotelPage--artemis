import React from 'react'
import CarouselOutdoor from '../CarouselOutdoor'

export default function RemoteWork() {
	return (
		<section id='okolica' className=' '>
			{/* CONTAINER */}
			<div className='grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-y-0 px-8 lg:px-20 py-10 lg:py-20  h-full '>
				{/* img */}
				<div className=' lg:col-start-1 lg:col-end-4 xl:ml-6 py-6 2xl:py-12  max-h-[950px] mr-20 w-full lg:w-auto'>
					<CarouselOutdoor />
				</div>
				{/* text */}
				<div className='lg:col-start-4 lg:col-end-6 flex flex-col items-center justify-around gap-8 lg:gap-0 lg:ml-12 lg:mr-20 max:mr-80'>
					<div className='flex flex-col gap-8 lg:gap-12'>
						<h2 className='heading'>Piękna Okolica
</h2>
						<p className='text'>Nasz obiekt znajduje się w malowniczej okolicy Zakopanego, blisko pięknych szlaków górskich. To idealne miejsce dla miłośników przyrody, którzy cenią sobie spokój i łatwy dostęp do atrakcji turystycznych.

</p>
					
					</div>

					<p className='text--small'>
					Bliskość szlaków górskich oraz niewielka odległość od centrum Zakopanego zapewniają komfortowy wypoczynek. Goście mogą cieszyć się zarówno urokami natury, jak i atrakcjami miejskimi.
					</p>
				</div>
			</div>
		</section>
	)
}
