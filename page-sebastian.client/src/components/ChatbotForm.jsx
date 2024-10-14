import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes para la validación de props

const ChatbotForm = ({ onStart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && acceptedTerms) {
      onStart(); // Iniciar el chatbot
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  return (
    <div className="fixed bottom-16 right-4 w-[360px] h-[748px] bg-white rounded-lg shadow-lg p-4 border border-gray-300">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-red-600">¡Hola! 👋 Soy tu asistente virtual.</h2>
        <div className="flex">
          <span className="cursor-pointer">🔒</span>
          <span className="cursor-pointer ml-2">❌</span>
        </div>
      </div>
      <p className="text-gray-600">Completa tus datos y dale clic en Comenzar</p>
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
            className="mr-2"
          />
          Acepto los términos y condiciones
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Comenzar
        </button>
      </form>
    </div>
  );
};

// Validación de las props
ChatbotForm.propTypes = {
  onStart: PropTypes.func.isRequired, // Asegurar que onStart es una función requerida
};

export default ChatbotForm;
