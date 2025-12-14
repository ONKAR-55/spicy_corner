import React from 'react'
import '../App.css'

function About() {
    return (
        <div className='flex flex-col md:flex-row mt-20 gap-10 items-center about-us mb-20 px-4 md:px-10 relative' id='About Us'>
            <div className='text-left about-txt text-xl w-full md:w-1/2'>
                <h1 className='font-bold text-4xl mb-6 underline underline-offset-2 '>About Us</h1>
                <p>Welcome to Spicy Corner! We are passionate about bringing you <br /> the best spicy dishes from around the world. <br /> Our chefs use fresh ingredients and traditional recipes to create flavorful meals <br /> that will tantalize your taste buds.</p>
            <div className='border-2 rounded-lg overflow-hidden w-full md:w-[500px] h-auto hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-amber-500/50 my-6 md:my-0 md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2'>
                <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?semt=ais_hybrid&w=740&q=80" alt="Restaurant_Image" />
            </div>
                <p>At Spicy Corner, we believe that food is more <br /> than just sustenance; it's an experience.<br /> Whether you're a fan of mild heat or crave the fiery intensity of extra spicy dishes, <br /> we have something for everyone.</p>
                <p>Our mission is to provide a warm and inviting atmosphere where you can enjoy <br />delicious food with friends and family. We are committed to excellent service and ensuring that <br /> every visit to Spicy Corner is a memorable one.</p>
                <p>Thank you for choosing Spicy Corner. We look forward to serving you!</p>
            </div>

        </div>
    )
}

export default About
