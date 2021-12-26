import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 bg-gray-100 text-gray-600 px-32 py-14'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>Now Airbnb works</p>
                <p>Newsroom</p>
                <p>Investor</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
           
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referals accepted</p>
                <p>Explore</p>
            </div>
           
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Help</p>
                <p>Safety Information</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Supporting People with disabilities</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Trust & Safety</p>
                <p>Help Center</p>
                <p>Easter Eggs</p>
                <p>For the wins</p>
                <p>Say Hi Youtube</p>
            </div>
        </div>
    )
}

export default Footer
