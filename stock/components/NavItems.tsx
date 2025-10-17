'use client'

import React from 'react'
import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems: () => Element = () => {
  const pathname:String = usePathname()

  const isActive = (href: String): Boolean => pathname === href
  

  function callbackfn(value: { href: string; label: string }, index: number, array: { href: string; label: string }[]): ReactNode {
    throw new Error('Function not implemented.')
  }

  return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
       {NAV_ITEMS.map( callbackfn:({ href , label}) => (
        <li key={href} >
        <Link href={href} className={`hover:text-yellow-500 transition-colors ${
          isActive(href) ? 'text-grey-500' : ''
        }`}>
        </Link>
        </li>
       )

      
      )}
           
</ul>  )
}

export default NavItems