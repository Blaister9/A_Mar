import Navigation from './Navigation';
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'; // si estás utilizando Next.js
import Link from 'next/link';


const Header = ({ title, logo, theme }) => (
    <header className={`header ${theme} px-4 py-2 bg-gradient-to-r from-deep-blue to-light-turquoise shadow-lg min-h-[20vh] transition-all duration-300 ease-in-out animate-slide-in-from-right`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link href="/" legacyBehavior>
                    <a className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Image src={logo} width={500} height={500} alt="Logo Estilizado" className="w-20 md:w-28 lg:w-32" />
                    </a>
                </Link>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-luxury-gold">{title}</h1>
            </div>
            <Navigation />
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
};

export default Header;
