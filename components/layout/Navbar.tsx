'use client';

import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import SignInModal from '../auth/SignInModal';
import UserNav from '../auth/UserNav';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-white border-t-4 border-brand-green shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
           <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={20}
            height={30}
          />
          <h1 className="text-xl font-bold text-gray-800">
            RDMC Repository
          </h1>
        </Link>
          </div>

          <div className="hidden md:flex md:justify-center md:flex-1">
            <nav className="flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-dark-gray transition-colors">
                Dataset Communities & Collections
              </Link>
              <Link href="#" className="text-gray-600 hover:text-dark-gray transition-colors">
                All RDMC Datasets
              </Link>
              <Link href="#" className="text-gray-600 hover:text-dark-gray transition-colors">
                Statistics
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-dark-gray bg-gray-100">
              <Search size={20} />
            </button>
            {session ? <UserNav /> : <SignInModal />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
