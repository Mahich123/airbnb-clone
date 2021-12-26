import React from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'


function Header() {
    return (
        <header className='sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 p-5'>
        <div className='relative h-10 my-auto flex items-center cursor-pointer'>
            <Image 
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit = "contain"
                objectPosition="left"
            />
        </div>

        {/* Searchbar */}
        <div className='flex items-center rounded-full md:border-2 md:shadow-sm'>
            <input 
                className="flex-grow outline-none pl-5 bg-transparent"
                placeholder="search here"
                type="text"
            />
            <SearchIcon className='cursor-pointer hidden bg-red-400 text-white md:inline-flex rounded-full h-8 p-2 md:mx-2'/>
        </div>

        <div className='flex items-center justify-end space-x-4 text-gray-500'>
            <p className='hidden md:inline'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer'/>

            <div className='flex items-center space-x-2 rounded-full border-2 p-2'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
        </div>
        </header>

    )
}

export default Header
