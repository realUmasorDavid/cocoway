import React from 'react'
import { FaXTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Contact() {
    return (
        <>
            <section className='font-Poppins bg-gray-200'>
                <div class="grid sm:grid-cols-2 items-start gap-16 px-4 py-10 mx-auto max-w-4xl font-[sans-serif]">
                    <div>
                        <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                        <p class="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                        <div class="mt-12">
                            <h2 class="text-gray-800 text-base font-bold">Email</h2>
                            <ul class="mt-4">
                                <li class="flex items-center">
                                    <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <MdAlternateEmail className='w-6 h-6' />
                                    </div>
                                    <a href="javascript:void(0)" class="text-primary text-sm ml-4">
                                        <small class="block">Mail</small>
                                        <strong>info@example.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-12">
                            <h2 class="text-gray-800 text-base font-bold">Socials</h2>

                            <ul class="flex mt-4 space-x-2">
                                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="">
                                        <FaXTwitter className='w-6 h-6' />
                                    </a>
                                </li>
                                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <FaInstagram className='w-6 h-6' />
                                    </a>
                                </li>
                                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <FaWhatsapp className='w-6 h-6' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form class="ml-auto space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-primary focus:bg-transparent" />
                        <input type='email' placeholder='Email'
                            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-primary focus:bg-transparent" />
                        <input type='text' placeholder='Subject'
                            class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-primary focus:bg-transparent" />
                        <textarea placeholder='Message' rows="6"
                            class="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-primary focus:bg-transparent resize-none"></textarea>
                        <button type='button'
                            class="text-white text-lg bg-primary border-2 border-primary hover:bg-transparent hover:text-primary tracking-wide rounded-md px-4 py-3 w-full !mt-6 duration-300">Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}
