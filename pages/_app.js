import '../app/globals.css';
import React from 'react';
import Header from '../components/Header'; // Asegúrate de ajustar la ruta si es necesario
import Footer from '../components/Footer'; // Asegúrate de ajustar la ruta si es necesario
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header title="A-mar" logo="/a-mar.jpg" theme="light" />
      <Component theme="light" {...pageProps} />
      <Footer copyright="©2023 a_mar" theme="light" />
    </div>
  );
}

export default MyApp;