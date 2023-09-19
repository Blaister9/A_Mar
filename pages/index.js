import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Testimonial from '../components/Testimonial';
import FeaturedServices from '../components/FeaturedServices';

const dishImages = [
    "/dishes/0552381a-b2eb-4755-a1da-36535543106f.JPG",
    "/dishes/1aea651e-b752-464d-9716-a9b67119b442.JPG",
    "/dishes/333d9b44-15eb-426f-82c5-feb3c2198cdf.JPG",
    "/dishes/66ce091b-575f-43bf-a406-cae8e7f19116.JPG",
    "/dishes/81b10c35-137e-46f8-a832-234b9b65c8db.JPG",
    "/dishes/855ea730-6afe-47d0-97a5-a9e8973d7555.JPG",
    "/dishes/85f0805e-332f-42f6-b8b9-f699a107aac4.JPG",
    "/dishes/acfe159a-5b8d-4309-8410-2dabaa5ee23b.JPG",
    "/dishes/b0306a36-d6c6-4591-ad96-236f49b212bc.JPG",
    "/dishes/bf2a12b2-6bbd-4cd3-bbf5-04402d4f0f67.JPG",
    "/dishes/c422dd26-06be-4c7f-8c4b-99209885308c.JPG",
    "/dishes/cf145935-776b-4e63-8ef8-bfa19d55d3e9.JPG",
    "/dishes/d2d48fbe-1098-4020-9099-3099ba41fd3d.JPG"
  ];
  

  const Home = () => (
    <div className="bg-gradient-to-r from-deep-blue to-light-turquoise min-h-screen text-luxury-gold animate-slide-in-from-right">
        {/* Introducción */}
        <section className="intro-section p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Bienvenido a A-mar</h1>
            <p className="text-lg md:text-xl">Del océano a tu mesa. Disfruta de las delicias del mar en un ambiente acogedor.</p>
        </section>

        {/* Llamado a la Acción */}
        <section className="cta-section flex flex-col md:flex-row justify-between p-4 md:p-8">
            <button className="bg-luxury-gold text-deep-blue py-2 px-4 rounded mb-4 md:mb-0 md:mr-4 hover:bg-modern-rose"><a href="/reservations">Reserva tu mesa</a></button>
            <button className="bg-luxury-gold text-deep-blue py-2 px-4 rounded mb-4 md:mb-0 md:mr-4 hover:bg-modern-rose"><a href="/menu">Ver nuestro menú</a></button>
        </section>

        {/* Galería de Imágenes */}
        <section className="gallery-section py-8 md:py-16 from-deep-blue to-light-turquoise">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Nuestros Platos Destacados</h2>
            <p className="text-lg md:text-xl mb-8 text-center">Una muestra de lo que ofrecemos</p>
            <div className="flex justify-center">
                <ImageCarousel images={dishImages} />
            </div>
        </section>

        {/* Testimonios */}
        <section className="testimonials-section py-8 md:py-16 from-deep-blue to-light-turquoise">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Lo que nuestros clientes dicen</h2>
        <p className="text-lg md:text-xl mb-8 text-center">Experiencias reales de personas que han disfrutado en A-mar</p>
        
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <Testimonial
            quote="La comida en A-mar es simplemente deliciosa. El ambiente es inigualable y el servicio es de primera. Definitivamente volveré con mi familia."
            author="María González"
            role="Visitante frecuente"
            />

            <Testimonial
            quote="Jamás había probado mariscos tan frescos y exquisitos. A-mar ha elevado mi estándar de lo que es una buena cena marina."
            author="Javier Paredes"
            role="Crítico culinario"
            />

            <Testimonial
            quote="Celebré mi aniversario en A-mar y fue una experiencia inolvidable. Desde el platillo de entrada hasta el postre, todo fue perfecto."
            author="Carolina Vélez"
            role="Cliente satisfecho"
            />
        </div>
        </section>

        {/* Servicios Especiales Destacados */}
        <FeaturedServices />
    </div>
);


export default Home;
