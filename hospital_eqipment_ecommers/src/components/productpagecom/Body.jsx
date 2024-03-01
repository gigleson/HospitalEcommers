

import React from 'react';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <>
    <div className="grid md:grid-cols-2 gap-8">
          <div>
          
                  <img
                    alt="Product Image"
                    className="aspect-square object-cover rounded-lg"
                    height="500"
                    src="/placeholder.svg"
                    width="500"
                  />

          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Deluxe Hospital Bed</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">$1,200.00</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Our Deluxe Hospital Bed is designed with the comfort of the patient in mind. Equipped with an adjustable
              headrest and footrest, this bed ensures a comfortable and secure environment for the patient.
            </p>
            <button className="mt-6 bg-green-500 text-white">Add to Cart</button>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Customer Reviews</h2>
          <div className="mt-4 space-y-6">
            <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">John Doe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This bed is very comfortable and easy to adjust. Highly recommend!
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">Jane Smith</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Excellent quality and great customer service. Would buy again.
              </p>
            </div>
          </div>
        </div>
    
</>
   
  );
}
export default Body;