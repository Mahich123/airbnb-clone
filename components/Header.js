import React, { useState } from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function Header() {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuest, setNoOfGuest] = useState(1)

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }
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
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)}
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
        {searchInput &&  (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    rangeColors={["#FD5B61"]}
                    minDate={new Date()}
                  />

                <div className='flex items-center border-b mb-4'>
                    <h2 className='flex-grow text-2xl font-semibold'>Number of Guests</h2>
                    <UsersIcon className='h-5'/>
                    <input 
                        type="number" 
                        className="w-12 pl-2 text-lg outline-none text-red-400"
                        value={noOfGuest}
                        min={1}
                        onChange={(e) => setNoOfGuest(e.target.value)}
                   />
                </div>
                <div className='flex'> 
                    <button  onClick={resetInput} className='flex-grow'>Cancel</button>
                    <button className='flex-grow text-red-400'>Search</button>
                </div>
            </div> 
             
        )}
       
        </header>

    )
}

export default Header
