import React from 'react'
import products from '../assets/cocowayprod.jpg'

export default function About() {
    return (
        <>
            <section className='font-Poppins py-8 px-10'>
                <div className="flex align-middle items-center">
                    <div className="left w-2/4">
                        <h1 className='text-4xl font-bold my-6'>About <span className='text-primary'>Cocoway</span></h1>
                        <p className='text-xl w-3/4'>Cocoway Ltd. crafts delicious, crunchy plantain chips using premium, locally-sourced plantains. Our unique production process preserves the fruit's natural flavors and nutrients, resulting in a satisfying, healthier snack alternative. Perfect for on-the-go munching or as a party favorite, Cocoway's plantain chips come in various exciting flavors to suit every palate. Gluten-free and vegan-friendly, our chips cater to diverse dietary needs. Experience the tropical taste of Cocoway – where tradition meets innovation in every crispy bite. Snack smart, snack Cocoway!</p>
                    </div>
                    <div className="w-2/4">
                        <img className='w-full h-[40rem]' src={products} alt="Image of Cocoway Product" />
                    </div>
                </div>
            </section>
        </>
    )
}
