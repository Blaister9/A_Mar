import React from 'react';

const Testimonial = ({ quote, author, role }) => (
  <div className="testimonial-card p-4 bg-gradient-to-r from-deep-blue to-light-turquoise shadow-lg rounded-lg">
    <p className="text-base md:text-lg mb-4 text-white">"{quote}"</p>
    <strong className="text-deep-blue">{author}</strong>
    <span className="text-sm block mt-1 text-light-turquoise">{role}</span>
  </div>
);

export default Testimonial;
