import React, { useEffect, useRef } from 'react';

const Location = ({ theme }) => {
    const address = "123 Mariscos St., Ciudad de la Playa, 45678";
    const mapRef = useRef(null);

    useEffect(() => {
        // Función para inicializar el mapa
        const initMap = function() {
            if (window.google && mapRef.current) {
                new google.maps.Map(mapRef.current, {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 15,
                });
            }
        };

        if (window.google) {
            initMap();
        } else {
            // Cargar el script de Google Maps
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJJ614tP_pzSBxWNWS-cW3qYyDy1G3ZSA`;
            document.body.appendChild(script);
            script.onload = initMap;
        }
    }, []);

    return (
        <div className={`location-container ${theme} p-4 md:p-6 animate-slide-in-from-right shadow-lg bg-gradient-to-r from-deep-blue to-light-turquoise min-h-screen flex flex-col items-center`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-luxury-gold">Nuestra Ubicación</h2>
            
            <div className="address-card bg-deep-blue p-4 rounded-lg shadow-md w-full max-w-md mb-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2">
                    <h3 className="font-semibold text-lg text-light-turquoise">Dirección</h3>
                </div>
                <p className="text-base text-aquamarine pl-6">{address}</p>
            </div>

            <div className="map-container rounded-lg overflow-hidden shadow-md w-full max-w-md hover:shadow-lg transition-shadow duration-300" ref={mapRef} style={{ height: '400px' }}></div>
        </div>
    );
};

export default Location;
