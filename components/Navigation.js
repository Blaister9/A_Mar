import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navigation() {
  const router = useRouter();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/contact', label: 'Contact' },
    { href: '/location', label: 'Location' },
    { href: '/reservations', label: 'Reservations' }
  ];

  return (
    <nav className="bg-transparent p-4 shadow-md">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <div className={`
                ${router.pathname === link.href ? 'text-indigo-500' : 'text-luxury-gold'}
                hover:text-gray-300 transition-colors duration-200
                text-xl md:text-2xl font-semibold font-serif
              `}>
                {link.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
