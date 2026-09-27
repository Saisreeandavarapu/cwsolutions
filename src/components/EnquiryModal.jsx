import React, { useEffect } from 'react';
import { X, Wrench } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function EnquiryModal({ isOpen, onClose, selectedProduct }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white w-full max-w-2xl rounded-sm shadow-2xl border border-gray-300 relative overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="bg-industrial-dark text-white px-6 py-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-industrial-steel rounded-full"></div>
            <div>
              <h2 id="modal-title" className="text-sm font-bold uppercase tracking-wider font-mono">
                Request Equipment Quotation
              </h2>
              {selectedProduct ? (
                <p className="text-xs text-gray-300 font-sans mt-0.5">
                  Quotation for: <span className="text-industrial-steel font-semibold">{selectedProduct.name} ({selectedProduct.model})</span>
                </p>
              ) : (
                <p className="text-xs text-gray-400 font-sans mt-0.5">
                  Creative Work Solutions • Hyderabad, Telangana
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-800 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          <EnquiryForm
            initialProduct={selectedProduct}
            onSuccess={() => {
              // keep open for user to review summary or close after delay
            }}
          />
        </div>
      </div>
    </div>
  );
}
