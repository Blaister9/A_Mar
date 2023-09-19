import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = ({ onMessageSubmit, theme }) => (
  <div className="bg-gradient-to-r from-deep-blue to-light-turquoise text-deep-blue min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-slide-in-from-right">
    <div className="max-w-md w-full space-y-8 p-10 bg-gradient-to-r from-deep-blue to-light-turquoise rounded-xl shadow-lg text-white">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Contact Us
        </h2>
      </div>
      <ContactForm/>
    </div>
  </div>
);

export default Contact;
