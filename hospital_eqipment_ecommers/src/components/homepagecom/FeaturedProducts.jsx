import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedProducts() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-blue-900">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-900 dark:text-white sm:text-5xl">
                  Featured Products
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover our range of high-quality hospital equipment across various categories.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
              <div className="grid gap-1">
                <img
                  alt="Medical Devices"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="text-lg font-bold text-blue-900 dark:text-white">Medical Devices</h3>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-blue-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="/product"
                >
                  View Products
                </Link>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Diagnostic Equipment"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="text-lg font-bold text-blue-900 dark:text-white">Diagnostic Equipment</h3>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-blue-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="/product"
                >
                  View Products
                </Link>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Patient Care"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="text-lg font-bold text-blue-900 dark:text-white">Patient Care</h3>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-blue-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="/product"
                >
                  View Products
                </Link>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Surgical Instruments"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="text-lg font-bold text-blue-900 dark:text-white">Surgical Instruments</h3>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-blue-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="/product"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>
    );
  }
  
  export default FeaturedProducts;