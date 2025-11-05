'use client'

import Link from "next/link"
import { JSX } from "react"

import React from 'react'
import { NAV_ITEMS } from '@/lib/constants'
import path from "path"
import { usePathname } from 'next/navigation'

const NavItems: () => JSX.Element = () => {
  const pathname:String = usePathname();

  //  const isActive = (path: String) => boolean = (path : string) => {
  //   if(path ==='/') return pathname === '/';
  //   return pathname.startsWith(path);
  //  }

const isActive = (path: string): boolean => {
  if (path === '/') return pathname === '/';
  return pathname.startsWith(path);
};


  return (
      <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {NAV_ITEMS.map(({ href, title }) => (
        <li key={href} >
        <Link href={href} className={`hover:text-yellow-500 transition-colors ${
          isActive(href) ? 'text-grey-500' : ''
        }`}>
          {title}
        </Link>
        </li>
       )

      
      )}                                                      
      
      </ul>
  )
}

export default NavItems