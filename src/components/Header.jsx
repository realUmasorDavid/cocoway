import React from 'react'

export default function Header() {
    return (
        <>
            <section className='bg-hero-pattern bg-cover bg-blend-darken bg-opacity-100 text-white font-Poppins'>
                <div className="text-center py-[10.5rem]">
                    <h1 className='text-3xl'>Welcome to</h1>
                    <h1 className='text-5xl'><span className='text-primary font-bold'>Cocoway</span> Plantain Chips</h1>
                    <p className='py-6 w-2/4 mx-auto text-center'>Indulge in our gourmet plantain chips – the perfect blend of crispy and wholesome. Made from 100% natural, ripe plantains, these gluten-free, vegan snacks offer a guilt-free crunch. Discover why our artisanal, tropical treat is the go-to choice for health-conscious snackers. Try our delicious plantain chips today and elevate your snacking experience!</p>
                    <div className="buttons my-6 space-x-4">
                        <a href=""><button className='bg-primary border-2 border-primary px-4 py-2 rounded-lg hover:bg-transparent hover:text-primary duration-300'>Get Yours Now</button></a>
                        <a href=""><button className='bg-transparent text-primary border-2 border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white duration-300'>Contact Us</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
