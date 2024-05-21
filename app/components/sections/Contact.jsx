'use client'

import React, { useState } from 'react'

export default function Contact() {
	const [result, setResult] = useState('')
	const [sendingForm, setSendingForm] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()
		setSendingForm(true)
		setResult('Wysyłam....')
		const formData = new FormData(event.target)

		formData.append('access_key', '0b6e63ac-b430-4d76-a272-49a995d3b118')

		const object = Object.fromEntries(formData)
		const json = JSON.stringify(object)

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: json,
		})
		const result = await response.json()
		if (result.success) {
			event.target.reset()
			setSendingForm(true)
			setResult('Dzięki za wiadomość!')
		}
	}

	return (
		<section id='kontakt' className='px-6 sm:px-12 md:px-20 py-10  md:py-20 '>
			{/* CONTAINER */}
			<div className='flex flex-col justify-center items-center lg:flex-row gap-12 lg:gap-0 '>
				{/* img */}
				<div className='w-full lg:w-1/2 '>
					<img
						src='/img/willa_na_wzgorzu-10.jpg'
						alt='wnętrze Willa na Wzgórzu w Zakopanym'
						loading='lazy'
						className='h-full max-h-[400px] sm:max-h-[500px] lg:min-h-[600px] 2xl:min-h-[800px] max:min-h-[1000px] w-full object-cover lg:pr-24 max:px-24'
					/>
				</div>
				{/* text */}
				<div className='w-full  lg:w-1/2 flex flex-col justify-between gap-12 max:gap-32'>
					{/* form */}
					<div>
						<h2 className='heading'>Napisz do nas</h2>
						<h3 className='heading'>Z przyjemnością Ci pomożemy</h3>

						<form onSubmit={handleSubmit} className='w-full flex flex-col gap-8 2xl:pr-64 mt-12'>
							<span className={`text-2xl font-bold uppercase ${sendingForm ? '' : 'hidden'}`}>{result}</span>

							<input type="hidden" name="subject" value="Nowa wiadomość ze strony ..."/>
							<input type="hidden" name="from_name" value="Nowa wiadomość"/>

							<input
								type='text'
								name='Imię i nazwisko'
								placeholder='Imię i nazwisko'
								className='w-full border-secondary border rounded-full border-dashed  px-4 py-3 outline-none focus:border-solid'
							/>

							<input
								type='email'
								name='Adres Email'
								placeholder='Adres email'
								className='w-full border-secondary border rounded-full border-dashed px-4 py-3 outline-none focus:border-solid'
							/>

							<textarea
								name='Wiadomość'
								cols='30'
								rows='6'
								className='w-full border-secondary border rounded-3xl border-dashed px-4 py-4 outline-none focus:border-solid'
								placeholder='Wiadomość'></textarea>

							<button type='submit' className='btn-submit'>
								Wyślij
							</button>
						</form>
					</div>
					{/* insta */}
					<div className='flex flex-col items-start gap-6 lg:mt-12 lg:hidden 2xl:flex'>
						<a href='https://instagram.com' target='_blank' className='text-3xl link-hover--dark'>
							@WillaNaWzgorzu
						</a>
						<div className='flex flex-col sm:flex-row justify-center  gap-2 mx-auto'>
							<a href='https://instagram.com' target='_blank' className=' w-full  sm:w-1/3 h-[250px] max:h-[300px]'>
								<img
									src='/img/willa_na_wzgorzu-37.jpg'
									alt=''
									className='w-full h-full object-cover'
									height={300}
									width={300}
									loading='lazy'
								/>
							</a>
							<a href='https://instagram.com' target='_blank' className=' w-full sm:w-1/3 h-[250px] max:h-[300px]'>
								<img
									src='/img/willa_na_wzgorzu-5.jpg'
									alt=''
									className='w-full h-full object-cover'
									height={300}
									width={300}
									loading='lazy'
								/>
							</a>
							<a href='https://instagram.com' target='_blank' className=' w-full sm:w-1/3 h-[250px] max:h-[300px]'>
								<img
									src='/img/willa_na_wzgorzu-41.jpg'
									alt=''
									className='w-full h-full object-cover'
									height={300}
									width={300}
									loading='lazy'
								/>
							</a>
						</div>
						<a href='https://instagram.com' target='_blank' className='link-btn--dark text-center w-full'>
							Śledź nas
						</a>
					</div>
				</div>
			</div>
			{/* insta */}
			<div className='hidden flex-col items-start gap-6 mt-12 lg:flex 2xl:hidden'>
				<a href='https://instagram.com' target='_blank' className='text-3xl link-hover--dark'>
					@WillaNaWzgorzu
				</a>
				<div className='flex flex-col sm:flex-row justify-center  gap-2 mx-auto'>
					<a href='https://instagram.com' target='_blank' className=' w-full  sm:w-1/3 h-[300px]'>
						<img
							src='/img/willa_na_wzgorzu-37.jpg'
							alt=''
							className='w-full h-full object-cover'
							height={300}
							width={300}
							loading='lazy'
						/>
					</a>
					<a href='https://instagram.com' target='_blank' className=' w-full sm:w-1/3 h-[300px]'>
						<img
							src='/img/willa_na_wzgorzu-5.jpg'
							alt=''
							className='w-full h-full object-cover'
							height={300}
							width={300}
							loading='lazy'
						/>
					</a>
					<a href='https://instagram.com' target='_blank' className=' w-full sm:w-1/3 h-[300px]'>
						<img
							src='/img/willa_na_wzgorzu-41.jpg'
							alt=''
							className='w-full h-full object-cover'
							height={300}
							width={300}
							loading='lazy'
						/>
					</a>
				</div>
				<a href='https://instagram.com' target='_blank' className='link-btn--dark text-center w-full'>
					Śledź nas
				</a>
			</div>
		</section>
	)
}
