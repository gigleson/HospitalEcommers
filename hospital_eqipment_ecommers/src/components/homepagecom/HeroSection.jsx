import React from 'react';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-blue-900 dark:text-white sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Quality Hospital Equipment at Your Fingertips
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore our wide range of medical devices, diagnostic equipment, patient care products, and surgical
                  instruments.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-blue-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    to="/product"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
            <img
  alt="Hero"
  className="mx-auto w-full h-auto rounded-t-xl object-cover"
  src="https://ftslifecare.com/wp-content/uploads/2021/12/banner-medical-equipment.jpg"
/>



          </div>
        </section>
    
  );
}

export default HeroSection;