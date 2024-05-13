import React from 'react'

export default function NavItemDesktop({children,href}) {
	return (
		<li>
			<a href={href} className='hover:border-b duration-100'>
				{children}
			</a>
		</li>
	)
}
