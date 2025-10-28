import { useState } from 'react';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 bg-foreground text-background px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
            Chat with us!
          </div>
        )}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center bounce-subtle hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
