import React from 'react';
import { Instagram, Mail } from 'lucide-react';

/**
 * FooterProps:
 * @typedef {Object} FooterProps
 * @property {boolean} [showTermsAndPrivacy=true]
 * @property {function} [onOpenTerms]
 * @property {function} [onOpenPrivacy]
 */

function Footer({ showTermsAndPrivacy = true, onOpenTerms, onOpenPrivacy }) {
  return (
    <footer className="bg-[#FC2406] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/ivo.tmonteiro" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4d00] transition-colors flex items-center gap-2"
            >
              <Instagram /> Instagram
            </a>
            <a 
              href="mailto:ivosmonteiro@gmail.com"
              className="hover:text-[#ff4d00] transition-colors flex items-center gap-2"
            >
              <Mail /> Email
            </a>
          </div>
          {showTermsAndPrivacy && onOpenTerms && onOpenPrivacy && (
            <div className="flex gap-8">
              <button 
                onClick={onOpenTerms}
                className="hover:text-[#ff4d00] transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={onOpenPrivacy}
                className="hover:text-[#ff4d00] transition-colors"
              >
                Política de Privacidade
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
