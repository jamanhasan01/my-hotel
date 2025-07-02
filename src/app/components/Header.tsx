'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Globe, Search, ChevronDown } from 'lucide-react'
import logo from '../../../public/logo.png'

const Header = () => {
  return (
    <header className='bg-[var(--secondary)] py-4 px-4 sm:px-8 lg:px-16  sticky top-0 z-40'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Left: Logo & Navigation */}
        <div className='flex items-center space-x-8'>
          <Link href='/'>
            <Image src={logo} width={100} height={30} alt='Logo' />
          </Link>

          <nav className='hidden md:flex items-center space-x-6'>
            <Link href='/' className='text-[var(--main)] font-semibold'>
              Home
            </Link>
            <Link href='/hotels' className='text-gray-600 hover:text-blue-600'>
              Hotels
            </Link>
            <Link href='/about' className='text-gray-600 hover:text-blue-600'>
              About Us
            </Link>
            <Link href='/contact' className='text-gray-600 hover:text-blue-600'>
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right: Controls */}
        <div className='flex items-center space-x-4'>
          {/* Language Selector */}
          <div className='hidden sm:flex items-center space-x-1 text-gray-600'>
            <Globe className='w-5 h-5' />
            <span>🇪🇸</span>
            <ChevronDown className='w-4 h-4' />
          </div>

          {/* List your property */}
          <Link href='/list-property'>
    
            <button className='btn-outline'>List your property</button>
          </Link>

          {/* Search icon (mobile only) */}
          <Button variant='outline' size='icon' className='md:hidden'>
            <Search className='w-5 h-5' />
          </Button>

          {/* User avatar with initial */}
          <div className='w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold shadow-md'>
            J
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
