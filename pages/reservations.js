import React, { useState } from 'react';
import ReservationForm from '../components/ReservationForm';

const Reservations = () => {
    const [reservationMade, setReservationMade] = useState(false);

    const handleFormSubmit = async (values) => {
        try {
            const response = await fetch('/api/saveReservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setReservationMade(true);
            } else {
                console.error('Error enviando reserva', await response.text());
            }
        } catch (error) {
            console.error('Hubo un error enviando la reserva', error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-deep-blue to-light-turquoise animate-slide-in-from-right">
            <main className="flex-grow p-4 sm:p-8">
                {reservationMade ? (
                    <div className="text-center sm:text-left">Thank you for your reservation!</div>
                ) : (
                    <ReservationForm onSubmit={handleFormSubmit} theme="light" />
                )}
            </main>
        </div>
    );
};

export default Reservations;


/**
 * 
 * Cambios realizados:

Estructura Principal: Usé flex flex-col min-h-screen para asegurarme de que la página ocupe toda la altura de la pantalla, con el Header en la parte superior, el Footer en la parte inferior y el contenido principal (main) en el medio.
Contenido Principal (main): Añadí un poco de padding con p-4 sm:p-8 para darle más espacio en pantallas pequeñas y un poco más en pantallas más grandes (con el breakpoint sm: de Tailwind).
Mensaje de Agradecimiento: Lo centré en pantallas pequeñas y lo alineé a la izquierda en pantallas más grandes.
 */