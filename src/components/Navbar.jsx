import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className='bg-primary'>
                <nav className='flex items-center justify-between p-6 text-white font-Poppins'>
                    <h1 className='text-2xl'>Coco<span className='text-secondary'>way</span></h1>
                    <ul className="links hidden lg:flex space-x-8 text-lg">
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>About Us</li>
                        <li className='cursor-pointer'>Contact Us</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar