import React from 'react';
import { Link } from 'react-router-dom';
import { a } from '../pages/signIn_page';

function navbar() {
  return (
    <>
    <header className="px-4 lg:px-6 h-14 flex items-center bg-blue-900 dark:bg-white">
<Link className="flex items-center justify-center" to="/ad">
  <HotelIcon className="h-6 w-6 text-white dark:text-blue-900" />
  <span className="sr-only">MediEquip</span>
</Link>
<nav className="ml-auto flex gap-4 sm:gap-6">
  <Link
    className="text-sm font-medium text-white dark:text-blue-900 hover:underline underline-offset-4"
    to="/"
  >
    Home
  </Link>
  <Link
    className="text-sm font-medium text-white dark:text-blue-900 hover:underline underline-offset-4"
    to="/shop"
  >
    Products
  </Link>
  <Link
    className="text-sm font-medium text-white dark:text-blue-900 hover:underline underline-offset-4"
    to="/cart"
  >
    <ShoppingCartIcon className="h-5 w-5" />
  </Link>
  
  {a === 0 ? (
            <Link
              className="text-sm font-medium text-white dark:text-blue-900 hover:underline underline-offset-4"
              to="/signIn"
            >
              Sign In/Sign Up
            </Link>
          ) : a === 1 ? (
            <Link
              className="text-sm font-medium text-white dark:text-blue-900 hover:underline underline-offset-4"
              to="/ot"
            >
              Dashboard
            </Link>
          ) :(
            <Link
              className="text-sm font-medium text-white dark:text-blue-900 hover:underline underline-offset-4"
              to="/ct"
            >
              Dashboard
            </Link>
          )}
  
</nav>
</header>
</>
   
  );
}
function HotelIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
        <path d="M8 7h.01" />
        <path d="M16 7h.01" />
        <path d="M12 7h.01" />
        <path d="M12 11h.01" />
        <path d="M16 11h.01" />
        <path d="M8 11h.01" />
        <path d="M10 22v-6.5m4 0V22" />
      </svg>
    )
  }
  function ShoppingCartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }

export default navbar;