import React from 'react';
import MenuItem from '../components/MenuItem';
import menuItems from '../components/menuData';

const Menu = ({ theme }) => {
    return (
        <div className={`menu-item ${theme} w-full p-4 bg-gradient-to-r from-deep-blue to-light-turquoise animate-slide-in-from-right min-h-screen`}> 
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {menuItems.map(item => (
                    <MenuItem key={item.id} item={item} theme={theme} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
