
import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-blue-900">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MediEquip. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-blue-900 dark:text-white hover:underline underline-offset-4" to="/product">
            Terms of Service
          </Link>
          <Link className="text-xs text-blue-900 dark:text-white hover:underline underline-offset-4" to="/product">
            Privacy
          </Link>
          <Link className="text-xs text-blue-900 dark:text-white hover:underline underline-offset-4" to="/product">
            Contact
          </Link>
        </nav>
      </footer>
  );
}

export default Footer;