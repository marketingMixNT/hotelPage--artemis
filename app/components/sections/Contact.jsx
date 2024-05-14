'use client'

import React, { useState } from 'react'

export default function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const onSubmit = async (e) => {
		e.preventDefault()
	
	}

	return (
		<section className='wrapper '>
			{/* CONTAINER */}
			<div className='flex flex-col justify-center items-center lg:flex-row gap-12 lg:gap-0 '>
				{/* img */}
				<div className='w-full lg:w-1/2 '>
					<img
						src='/img/campfire.jpeg'
						alt='ognisko nieopodal Chatka pod Jodłami'
						loading='lazy'
						className='h-full max-h-[400px] sm:max-h-[500px] lg:max-h-[1200px] w-full object-cover lg:pr-24 max:px-24'
					/>
				</div>
				{/* text */}
				<div className='w-full  lg:w-1/2 flex flex-col justify-between gap-12 max:gap-32'>
					{/* form */}
					<div>
						<h2 className='text-3xl'>Napisz do nas</h2>
						<h3 className='text-3xl'>Z przyjemnością Ci pomożemy</h3>

						<form onSubmit={onSubmit} className='w-full flex flex-col gap-8 2xl:pr-64 mt-12'>
							<input
								type='text'
								value={name}
								onChange={e => setName(e.target.value)}
								placeholder='Imię i nazwisko'
								className='w-full border-secondary border rounded-full border-dashed px-4 py-1 outline-none focus:border-red'
							/>

							<input
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder='Adres email'
								className='w-full border-secondary border rounded-full border-dashed px-4 py-1 outline-none focus:border-red'
							/>

							<textarea
								value={message}
								onChange={e => setMessage(e.target.value)}
								cols='30'
								rows='6'
								className='w-full border-secondary border rounded-3xl border-dashed px-4 py-2 outline-none focus:border-red'
								placeholder='Wiadomość'></textarea>

							<button type='submit' className='btn-submit'>
								Wyślij
							</button>
						</form>
					</div>
					{/* insta */}
					<div className='flex flex-col items-start gap-6 mt-12 '>
						<a href='https://instagram.com' target='_blank' className='text-3xl link-hover--dark'>
							@ChatkaPodJodlami
						</a>
						<div className='flex flex-col sm:flex-row justify-center  gap-2 mx-auto'>
							<a href='https://instagram.com' target='_blank' className=' w-full  sm:w-1/3 h-[300px]'>
								<img
									src='/img/inside-1.jpeg'
									alt=''
									className='w-full h-full object-cover'
									height={300}
									width={300}
									loading='lazy'
								/>
							</a>
							<a href='https://instagram.com' target='_blank' className=' w-full sm:w-1/3 h-[300px]'>
								<img
									src='/img/inside-2.jpeg'
									alt=''
									className='w-full h-full object-cover'
									height={300}
									width={300}
									loading='lazy'
								/>
							</a>
							<a href='https://instagram.com' target='_blank' className=' w-full sm:w-1/3 h-[300px]'>
								<img
									src='/img/inside-3.jpeg'
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
		</section>
	)
}
