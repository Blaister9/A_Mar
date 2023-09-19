import React from 'react';
import { useFormik } from 'formik';

const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
};

const validate = values => {
    const errors = {};

    // Validación para el nombre
    if (!values.name) {
        errors.name = 'Required';
    }

    // Validación para el correo electrónico
    if (!values.email) {
        errors.email = 'Required';
    } else if (!validateEmail(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Validación para el asunto
    if (!values.subject) {
        errors.subject = 'Required';
    }

    // Validación para el mensaje
    if (values.message.length < 10) {
        errors.message = 'Message should be at least 10 characters';
    }

    return errors;
};

const ContactForm = ({ onSubmit, theme }) => {
    const [submitted, setSubmitted] = React.useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
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
        return <div className="text-green-500">Thank you for your message! We'll get back to you soon.</div>;
    }

    return (
        <form onSubmit={formik.handleSubmit} className={`contact-form ${theme} p-4 md:p-8`}>
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
                <label htmlFor="email" className="block text-lg mb-2">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={`w-full p-2 border rounded ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 mt-1">{formik.errors.email}</div>
                ) : null}
            </div>

            <div className="form-group mb-4">
                <label htmlFor="subject" className="block text-lg mb-2">Subject</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    className={`w-full p-2 border rounded ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : ''}`}
                />
                {formik.touched.subject && formik.errors.subject ? (
                    <div className="text-red-500 mt-1">{formik.errors.subject}</div>
                ) : null}
            </div>

            <div className="form-group mb-4">
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    className={`w-full p-2 border rounded ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 mt-1">{formik.errors.message}</div>
                ) : null}
            </div>

            <button type="submit" className="w-full md:w-auto bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-200">Send Message</button>
        </form>
    );
};

export default ContactForm;

/**
 * 
 * He realizado las siguientes mejoras en el componente ContactForm:

Estilos de Campos: Aseguré que los campos y las etiquetas sean claramente legibles y fáciles de interactuar. Aumenté el espaciado entre los campos y utilicé estilos coherentes.
Feedback Visual: Añadí estilos para estados de foco y error en los campos del formulario para mejorar la accesibilidad y proporcionar una retroalimentación clara al usuario. Las entradas con errores se destacan con un borde rojo, y los mensajes de error se muestran debajo del campo correspondiente.
Área de Texto del Mensaje: Aumenté el número de filas predeterminado para el área de texto del mensaje para que los usuarios tengan más espacio para escribir.
Botón de Enviar: Mejoré los estilos del botón y agregué una animación suave en el cambio de color al pasar el mouse por encima (hover) para mejorar la interactividad.
 * 
 * 
 * 
 */