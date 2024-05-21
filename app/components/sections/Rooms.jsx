import Section from '../Section'

export default function Rooms() {
	return (
		<section
			id='pokoje'
			className=' lg:h-[95vh]  max:h-[80vh] 2xl:mb-20 px-10 lg:px-16 max:px-12 pt-20 lg:pt-32 2xl:pb-10 md:py-10 2xl:py-20   '>
			{/* container */}
			<div className='flex flex-col lg:flex-row justify-between  h-full gap-8 md:gap-12 lg:gap-16 2xl:gap-32 max:gap-64'>
				{/* text */}

				<div className='flex flex-col justify-between gap-8 md:gap-16 lg:gap-12 w-full lg:w-[40%]'>
					<div className='space-y-12'>
						<h2 className='heading '>Pokoje Gościnne na Wzgórzu</h2>
						<p className='text'>
							Nasze pokoje gościnne wyposażone są w łóżka małżeńskie lub dwa pojedyncze, telewizor z płaskim ekranem
							oraz zestaw do parzenia kawy i herbaty. W każdym wnętrzu znajduje się stolik z fotelami, idealny do
							relaksu po górskich wędrówkach. Prywatne łazienki z prysznicem zapewniają komfort i wygodę.
						</p>
					</div>
					<p className='text--small'>
						Na parterze obiektu znajduje się ogólnodostępna, w pełni wyposażona kuchnia, gdzie można przygotować
						posiłki. Goście mogą również korzystać z salki z dużym telewizorem, idealnej do wspólnego spędzania czasu i
						relaksu.
					</p>
				</div>
				{/* image */}
				<div className=' w-full lg:w-[60%] py-6'>
					<img
						src='/img/willa_na_wzgorzu-51.jpg'
						alt='wnętrze pokoju w Willa na Wzgórzu w Zakopanym'
						width='1280'
						height='780'
						loading='lazy'
						className='w-full h-full   object-cover '
					/>
				</div>
			</div>
		</section>
	)
}
