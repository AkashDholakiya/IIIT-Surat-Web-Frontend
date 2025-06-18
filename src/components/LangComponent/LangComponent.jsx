// src/components/LangComponent.jsx
import React, { useEffect, useRef, useState } from 'react';
import './LangComponent.css';

export default function LangComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentLangRef = useRef(null);
  const globeContainerRef = useRef(null);
  const selectorRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);

    // Define global callback
    window.googleTranslateElementInit = () => {
    try{
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,gu',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      }, 'google_translate_element');
    }catch(err){
    console.log("Error")
    };
}

    // Monitor dropdown change
    const observer = setInterval(() => {
      const select = document.querySelector('#google_translate_element select');
      if (select) {
        select.addEventListener('change', () => {
          const value = select.value;
          let lang = 'En';
          if (value.includes('hi')) lang = 'हि';
          else if (value.includes('gu')) lang = 'ગુ';
          currentLangRef.current.textContent = lang;

          setTimeout(() => collapse(), 500);
        });
        clearInterval(observer);
      }
    }, 1000);

    const handleOutsideClick = (e) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target)) {
        collapse();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') collapse();
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const expand = () => {
    setIsExpanded(true);
  };

  const collapse = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div
        className={`language-selector ${isExpanded ? 'expanded' : ''}`}
        ref={selectorRef}
        onClick={(e) => {
          e.stopPropagation();
          if (!isExpanded) expand();
        }}
      >
        <div className={`globe-container ${isExpanded ? 'shifted' : ''}`} ref={globeContainerRef}>
          <div className="globe-icon">🌐</div>
          <div className="language-text" ref={currentLangRef}>En</div>
        </div>
        <div className={`dropdown-container ${isExpanded ? 'show' : ''}`} ref={dropdownRef}>
          <div id="google_translate_element"></div>
        </div>
      </div>
    </>
  );
}
