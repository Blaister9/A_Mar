import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    
    // Validación para el nombre
    if (!values.name) {
        errors.name = 'Required';
    }

    // Validación para la fecha
    if (!values.date) {
        errors.date = 'Required';
    } else {
        const currentDate = new Date();
        const inputDate = new Date(values.date);
        if (inputDate < currentDate) {
            errors.date = 'Date cannot be in the past';
        }
    }

    // Validación para la hora
    if (!values.time) {
        errors.time = 'Required';
    }

    // Validación para el número de invitados
    if (values.guests < 1) {
        errors.guests = 'Must be at least 1 guest';
    }

    return errors;
};

const ReservationForm = ({ onSubmit, initialValues, theme }) => {
    const [submitted, setSubmitted] = React.useState(false);
    const formik = useFormik({
        initialValues: initialValues || {
            name: '',
            date: '',
            time: '',
            guests: 1
        },
        validate,
        onSubmit: values => {
            setSubmitted(true);
            onSubmit(values);
        }
    });

    // Usar useEffect para restablecer el estado después de 5 segundos
    React.useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 5000); // 5 segundos
            // Limpiar el temporizador si el componente se desmonta
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    if (submitted) {
        return <div className="text-green-500">Thank you for your reservation! We're looking forward to serving you.</div>;
    }

    return (
        <form onSubmit={formik.handleSubmit} className={`reservation-form ${theme} p-4 md:p-6`}>
            <div className="form-group mb-4">
                <label htmlFor="name" className="block text-lg mb-2">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className={`w-full p-2 border rounded ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500 mt-1">{formik.errors.name}</div>
                ) : null}
            </div>

            <div className="form-group mb-4">
                <label htmlFor="date" className="block text-lg mb-2">Date</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    className={`w-full p-2 border rounded ${formik.touched.date && formik.errors.date ? 'border-red-500' : ''}`}
                />
                {formik.touched.date && formik.errors.date ? (
                    <div className="text-red-500 mt-1">{formik.errors.date}</div>
                ) : null}
            </div>
            
            <div className="form-group mb-4">
                <label htmlFor="time" className="block text-lg mb-2">Time</label>
                <input
                    id="time"
                    name="time"
                    type="time"
                    onChange={formik.handleChange}
                    value={formik.values.time}
                    className={`w-full p-2 border rounded ${formik.touched.time && formik.errors.time ? 'border-red-500' : ''}`}
                />
                {formik.touched.time && formik.errors.time ? (
                    <div className="text-red-500 mt-1">{formik.errors.time}</div>
                ) : null}
            </div>
            
            <div className="form-group mb-4">
                <label htmlFor="guests" className="block text-lg mb-2">Number of Guests</label>
                <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    onChange={formik.handleChange}
                    value={formik.values.guests}
                    className={`w-full p-2 border rounded ${formik.touched.guests && formik.errors.guests ? 'border-red-500' : ''}`}
                />
                {formik.touched.guests && formik.errors.guests ? (
                    <div className="text-red-500 mt-1">{formik.errors.guests}</div>
                ) : null}
            </div>
            
            <button type="submit" className="w-full md:w-auto bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-200">Make Reservation</button>
        </form>
    );
};

export default ReservationForm;
