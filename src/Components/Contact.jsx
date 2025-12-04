import React from 'react';
import '../App.css';

function Contact() {
    return (
        <div id="Contact Us" className="container px-4 py-8 about-txt items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-9 underline underline-offset-1">Contact Us</h1>
            <div className="pl-8 flex gap-80 justify-center contact-section">
                <div className="contact-info">
                    <div className="mb-7 contact">
                        <h2 className="text-2xl font-semibold ">Address</h2>
                        <p>123 Spicy Street, Flavor Town, 98765</p>
                    </div>
                    <div className="mb-7 contact">
                        <h2 className="text-2xl font-semibold ">Phone</h2>
                        <p>(123) 456-7890</p>
                    </div>

                </div>
                <div className="timing-info items-center justify-center contact">
                    <h2 className="text-2xl font-semibold mb-2 ">Opening Hours</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                        <li>Saturday - Sunday: 11:00 AM - 11:00 PM</li>
                    </ul>
                    <div className="mb-7 contact">
                        <h2 className="text-2xl font-semibold ">Email</h2>
                        <p>contact@spicycorner.com</p>
                    </div>
                </div>
            </div>
            <div className='justify-center items-center grid contact '>
                <h2 className="text-2xl font-semibold ">Follow Us</h2>
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-500">Facebook</a>
                    <a href="#" className="text-pink-500">Instagram</a>
                    <a href="#" className="text-blue-400">Twitter</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;