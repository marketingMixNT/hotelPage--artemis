import Image from 'next/image'

export default function Rest() {
	return (
		<section id='wypoczynek' className='  2xl:h-[80vh]'>
			{/* CONTAINER */}
			<div className='grid lg:grid-cols-5 gap-y-12 lg:gap-y-0 px-8 lg:px-20 py-20  h-full '>
				{/* text */}
				<div className='lg:col-span-2 2xl:col-span-1 flex flex-col justify-between gap-8 lg:gap-0'>
					<div className='flex flex-col gap-8 lg:gap-12'>
						<h2 className='text-lg font-light uppercase '>Nasze przesłanie</h2>
						<p className='text-3xl'>
							Sanctuary is more than a weekend getaway — more than just a transient place to be outside.
						</p>
					</div>

					<p>
						We offer a return to the natural world: an innate force within us – something we’ve only just rediscovered,
						something we’ve for too long ignored.
					</p>
				</div>
				{/* img */}
				<div className='lg:col-start-3 lg:col-end-6  py-6 2xl:py-12 '>
					<Image
						src={'/img/cottage.jpeg'}
						width={1280}
						height={780}
						loading='lazy'
						className='w-full h-full lg:ml-20 2xl:pr-12 max:pr-60 object-cover '
					/>
				</div>
			</div>
		</section>
	)
}
