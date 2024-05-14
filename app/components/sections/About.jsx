'use client'

import { useState } from 'react'
export default function About() {
	const [open, setOpen] = useState('hidden')

	return (
		<section className='bg-secondary text-white px-20 py-20 '>
			<div className='lg:w-3/4 max:w-1/2 flex flex-col gap-12'>
				<span className='text-lg font-light uppercase'>Nasza historia</span>
				<h2 className='text-4xl xl:text-6xl font-normal leading-snug'>
					We exist to make <span className='font-extralight'>time in nature</span> a regular part of modern life.
				</h2>

				<button
					className='self-start uppercase font-light'
					onClick={() => setOpen(prevOpen => (prevOpen === 'hidden' ? '' : 'hidden'))}>
					Czytaj +
				</button>
				<p className={`${open} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quasi, in assumenda consequuntur, nam alias ducimus impedit accusamus cupiditate inventore minus corrupti eveniet aliquid nostrum quis molestiae doloremque tempora!
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus voluptates rem nisi eum, repellat consectetur provident facilis quas quos obcaecati, ad, at tempore excepturi aperiam veritatis. Ratione, officia molestias.
				</p>
			</div>
		</section>
	)
}
