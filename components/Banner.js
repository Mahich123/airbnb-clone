import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[500px] lg:h-[600px] xl:h-[600px]'>
            <Image 
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectfill = "cover"
            />

            <div className='absolute text-center top-1/2 w-full'>
                <p>Not sure where to go? Perfect.</p>
                <button className='text-purple-600  px-10 py-4 bg-slate-100 shadow-md rounded-full my-3 hover:shadow-xl active:scale-150 transition duration=150'>I'm flexible</button>
            </div>
        </div>
    )

}

export default Banner
