'use client'
import React from 'react'

export default function MobileNavItem({href,children,onClick}) {
  return (
    <li className=' border-b border-dotted py-8 text-center'>
    <a href={href} onClick={onClick} className='hover:border-b duration-100'>
        {children}
    </a>
</li>
  )
}
