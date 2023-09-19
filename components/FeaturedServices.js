import React from 'react';

const FeaturedServices = () => (
  <section className="featured-services-section py-8 md:py-16 bg-gradient-to-r from-deep-blue to-light-turquoise">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-luxury-gold">Nuestros Servicios Especiales</h2>
    <p className="text-lg md:text-xl mb-8 text-center text-luxury-gold">Descubre nuestras experiencias exclusivas en A-Mar</p>

    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="featured-service-card p-4 bg-gradient-to-r from-deep-blue to-light-turquoise shadow-lg rounded-lg text-white">
        <h3 className="text-lg font-bold mb-2">Experiencia de Degustación de Mariscos</h3>
        <p className="text-gray-100 mb-4">
          Disfruta de una experiencia gastronómica única con nuestra degustación de mariscos frescos de temporada.
        </p>
        <button className="bg-luxury-gold text-deep-blue py-2 px-4 rounded hover:bg-modern-rose">Ver detalles</button>
      </div>

      <div className="featured-service-card p-4 bg-gradient-to-r from-deep-blue to-light-turquoise shadow-lg rounded-lg text-white">
        <h3 className="text-lg font-bold mb-2">Cena Romántica junto al Mar</h3>
        <p className="text-gray-100 mb-4">
          Celebra momentos especiales con una cena romántica en nuestra terraza con vista al mar.
        </p>
        <button className="bg-luxury-gold text-deep-blue py-2 px-4 rounded hover:bg-modern-rose">Ver detalles</button>
      </div>

      <div className="featured-service-card p-4 bg-gradient-to-r from-deep-blue to-light-turquoise shadow-lg rounded-lg text-white">
        <h3 className="text-lg font-bold mb-2">Clases de Cocina de Mariscos</h3>
        <p className="text-gray-100 mb-4">
          Aprende a preparar deliciosos platillos de mariscos de la mano de nuestros chefs expertos.
        </p>
        <button className="bg-luxury-gold text-deep-blue py-2 px-4 rounded hover:bg-modern-rose">Ver detalles</button>
      </div>
    </div>
  </section>
);

export default FeaturedServices;
