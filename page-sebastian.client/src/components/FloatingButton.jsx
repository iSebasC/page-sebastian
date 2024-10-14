import React, { useState } from 'react';
import ChatbotForm from './ChatbotForm';

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Botón flotante */}
            <button
                className="fixed bottom-4 right-4 bg-red-600 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
                onClick={toggleChatbot}
            >
                💬
            </button>

            {/* Componente del Chatbot */}  
            {isOpen && (
                <div className="fixed bottom-16 right-4 w-[360px] h-[748px] bg-white rounded-lg shadow-lg p-4">
                    <ChatbotForm onStart={() => setIsOpen(false)} />
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
