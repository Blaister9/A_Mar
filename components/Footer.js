import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ copyright, theme }) => (
    <footer className={`py-4 bg-mystic-blue text-luxury-gold sm:py-6 md:py-8 ${theme}`}>
        <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                    {copyright}
                </div>
                <div className="flex space-x-4">
                    <a href="#about" className="hover:text-sophisticated-bronze transition-colors duration-200">About</a>
                    <a href="#terms" className="hover:text-sophisticated-bronze transition-colors duration-200">Terms & Conditions</a>
                    <a href="#privacy" className="hover:text-sophisticated-bronze transition-colors duration-200">Privacy Policy</a>
                </div>
                <div className="mt-4 sm:mt-0">
                    <a href="mailto:contact@restaurant.com" className="hover:text-sophisticated-bronze transition-colors duration-200">contact@restaurant.com</a>
                </div>
            </div>
        </div>
    </footer>
);

Footer.propTypes = {
    copyright: PropTypes.string.isRequired,
    theme: PropTypes.string,
};

export default Footer;



/**
 * 
Realicé las siguientes mejoras en el componente Footer:

Enlaces: Agregué enlaces ficticios a "Acerca de", "Términos y Condiciones" y "Política de Privacidad". Estos enlaces tienen estilos de hover para mejorar la interactividad.
Diseño del Contenido: Utilicé un diseño flex para organizar el contenido del pie de página. En dispositivos móviles, los elementos se apilan verticalmente, pero en pantallas más grandes, se distribuyen en una sola fila.
Contacto: Agregué una dirección de correo electrónico ficticia como ejemplo de información de contacto.
Estilos: Mejoré el espaciado y la organización general del pie de página para que sea más legible y estéticamente agradable.
 */