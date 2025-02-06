// src/components/booking/ContactForm.tsx
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface ContactFormProps {
  onSubmit: () => void; // Define the onSubmit prop type
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  comments: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('1. Starting form submission');
    await fetch('/api/save-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    console.log('2. Submission successful');
    setIsSubmitted(true);
    onSubmit(); // Redirect to Calendly
    setIsSubmitting(false); // Reset submitting state
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold mb-6">¡Gracias por tu interés!</h3>
        <p className="mb-8">Tu información ha sido guardada. Ahora puedes programar tu cita.</p>
        <button
          onClick={onSubmit} // Redirect to Calendly
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          Programa tu Cita
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Comienza Ahora</h2>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black text-black"
            placeholder="Ingresa tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-black">
            Número de Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black text-black"
            placeholder="Ingresa tu número de teléfono"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
            Dirección de Correo Electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black text-black"
            placeholder="Ingresa tu dirección de correo electrónico"
          />
        </div>

        <div>
          <label htmlFor="comments" className="block text-sm font-medium mb-2 text-black">
            Comentarios o Preguntas
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black h-32 text-black"
            placeholder="Comparte cualquier pregunta o requisito específico"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-8 text-white font-medium ${
            isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
          } transition-colors`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Información'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;