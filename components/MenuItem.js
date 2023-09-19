import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ item, theme }) => (
    <div className={`menu-item ${theme} p-4 md:p-6 bg-white bg-opacity-90 shadow-md rounded-md hover:shadow-lg transition-shadow duration-200`}>
        {item.image && <img src={item.image} alt={item.name} className="w-full rounded-t-md mb-4" />}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{item.name}</h2>
        <p className="text-base md:text-lg mb-2">{item.description}</p>
        <p className="text-sm md:text-base font-semibold">{item.price}</p>
        {item.vegetarian && <span className="text-green-500 ml-2">Vegetarian</span>}
    </div>
);

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    theme: PropTypes.string.isRequired,
};

export default MenuItem;
