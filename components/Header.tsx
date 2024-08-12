import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropDown from './GenreDropDown'


function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from bg-gray-200/0 via-gray-900/25 to-gray-900">
      <div className="flex items-center">
        <Link href="/" className="mr-10"> 
            <Image
              src="https://links.papareact.com/a943ae" 
              alt="Disney Logo"
              width={120}
              height={100}
              className="cursor-pointer invert-0 dark:invert"
            />
        </Link>
      </div>
      
      <div className='flex space-x-2 items-center'>
        <GenreDropDown/>
        <SearchInput/>
        <ThemeToggler/>
      </div>
    </header>
  )
}

export default Header
