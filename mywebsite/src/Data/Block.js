import React from 'react';

export default function Block() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between p-6">
        <div className="image-section flex-1 p-6">
          <img className="rounded-lg shadow-lg" src="https://i.pcmag.com/imagery/roundups/003O7Th8cF34FZ1HiYHKAsj-14.jpg" alt="E-commerce" />
        </div>
        <div className="text-section flex-1 p-6">
          <h1 className="text-4xl font-bold mb-4">
            User-Friendly Design:
          </h1>
          <p className="text-lg">
            An e-commerce website should have a user-friendly design that ensures easy navigation and seamless interaction. This involves creating a responsive layout that adjusts well to different devices and screen sizes. A clean and organized interface enhances user experience, allowing visitors to find products quickly and effortlessly.
          </p>
          <p>
            User Authentication and Registration: Users typically need to create an account or sign in to make purchases, track orders, and manage their account information.
          </p>
          <p>
            Shopping Cart: The shopping cart functionality allows users to add products they want to purchase, review them before checkout, and make modifications such as quantity adjustments or removal of items.
          </p>
        </div>
      </div>
    </div>
  );
}
