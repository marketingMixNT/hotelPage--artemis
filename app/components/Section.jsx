import React from 'react'

function Section({ children,id }) {
	return (
		<section id={id} className='  2xl:h-[80vh] lg:mb-20 px-8 border '>
			{ children }
		</section>
	)
}

export default Section
