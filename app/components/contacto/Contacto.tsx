import { useState } from "react"; 
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import CustomInput from "./CustomImput";
import CountrySelect from "./CountrySelect";

const ContactSection = () => {
    const [errors, setErrors] = useState<any>([]);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const lastname = formData.get('lastname');
        const email = formData.get('email');
        const country = formData.get('country');
        const message = formData.get('message');

        const errorList = [];

        if (!name || name === "") {
            errorList.push({
                field: 'name',
                message: 'El nombre es obligatorio.'
            });
        }

        if (!lastname || lastname === "") {
            errorList.push({
                field: 'lastname',
                message: 'El apellido es obligatorio.'
            });
        }

        if (!email || email === "") {
            errorList.push({
                field: 'email',
                message: 'El correo electrónico es obligatorio.'
            });
        }

        if (!country || country === "") {
            errorList.push({
                field: 'country',
                message: 'Debes seleccionar un país.'
            });
        }

        if (!message || message === "") {
            errorList.push({
                field: 'message',
                message: 'El mensaje o comentario es obligatorio.'
            });
        }

        if (errorList.length > 0) {
            Swal.fire({
                title: "Completa todos los campos",
                text: "Por favor, revisa los campos del formulario.",
                icon: "warning",
            });

            setErrors(errorList);
            return;
        }

        setErrors([]);

        Swal.fire({
            title: '¡Mensaje enviado!',
            text: `Gracias por contactarnos, ${name}! Te responderemos pronto.`,
            icon: 'success',
        });

        event.target.reset();
    };

    return (
        <section id="contacto" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        ¡Contáctanos!
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Estamos aquí para ayudarte. Envíanos tus dudas, comentarios o solicitudes y te responderemos lo antes posible.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Contact Information & Map */}
                    <div className="space-y-6">
                        {/* Contact Info Cards */}
                        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Información de Contacto
                            </h3>
                            
                            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                                <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 text-xl mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Dirección</h4>
                                    <p className="text-gray-600 text-sm">San Salvador, El Salvador</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                                <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-xl mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                                    <a href="tel:+50312345678" className="text-blue-600 hover:text-blue-700 text-sm">
                                        +503 1234-5678
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-xl mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <a href="mailto:info@empresa.com" className="text-blue-600 hover:text-blue-700 text-sm">
                                        info@empresa.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden h-80">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.251046615355!2d-89.14760729999999!3d13.703239400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633745e33e7379%3A0x28df8dc2b46233dc!2sTicongle%20Hub!5e0!3m2!1ses!2ssv!4v1765312345501!5m2!1ses!2ssv" 
                                className="w-full h-full"
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de la empresa"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Envíanos un Mensaje
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name and Lastname Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <CustomInput
                                        type="text"
                                        label="Nombre"
                                        id="name"
                                        name="name"
                                        placeholder="Tu nombre"
                                        errors={errors}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        type="text"
                                        label="Apellido"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Tu apellido"
                                        errors={errors}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <CustomInput
                                    type="email"
                                    label="Correo Electrónico"
                                    id="email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    errors={errors}
                                />
                            </div>

                            {/* Country */}
                            <div>
                                <CountrySelect
                                    label="País"
                                    id="country"
                                    name="country"
                                    errors={errors}
                                    required={true}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <CustomInput
                                    type="textarea"
                                    label="Mensaje"
                                    id="message"
                                    name="message"
                                    placeholder="Escribe tu mensaje aquí..."
                                    errors={errors}
                                />
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span>Enviar Mensaje</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;