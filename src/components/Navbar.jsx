import React from 'react'

const Navbar = () => {
    return (
        <>
            <header>
                <nav className='flex justify-between'>
                    <h1>Cocoway</h1>
                    <ul className="links flex space-x-4">
                        <li>Home</li>
                        <li>About Us</li>
                        {/* <li></li> */}
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar