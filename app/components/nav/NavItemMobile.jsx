'use client'
import React from 'react'

export default function MobileNavItem({href,children,onClick}) {
  return (
    <li className=' py-2 xs:py-4 text-center border-b border-dotted '>
    <a href={href} onClick={onClick} className='hover:border-b duration-100'>
        {children}
    </a>
</li>
  )
}
