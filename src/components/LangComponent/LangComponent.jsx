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

    const toObserve=new MutationObserver(()=>{
      var banner=document.querySelector("div.skiptranslate");
      if(banner && banner.style.display==="none"){
        var page=document.querySelector("#whole");
        if(page){
          page.style.marginTop="0px";
        }
      }else{
        var page=document.querySelector("#whole");
        if(page){
          page.style.marginTop="40px";
        }
      }

    });

    toObserve.observe(document.body, {
    childList: true,
    subtree: true,
  });

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
   

    document.body.appendChild(script);

    // Define global callback
    window.googleTranslateElementInit = () => {
    try{
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,gu',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      }, 'google_translate_element');

      const anInterval=setInterval(()=>{
        var im=document.querySelector(".VIpgJd-ZVi9od-l4eHX-hSRGPd img");
        if(im){
            im.style.display="inline";
            console.log("Img found");
            clearInterval(anInterval);
        }
        console.log("Img not found");
      },300);

      const interv=setInterval(()=>{
        var dropdown=document.querySelector(".goog-te-combo");
        if(dropdown){
            var styling=document.createElement("style");
            styling.innerHTML=`/* Google Translate dropdown styling */
.goog-te-combo {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffff;
    border: 1px solid #000000; /* Black border for visibility */
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 12px;
    color: #6c757d;
    min-width: 120px;
    max-width: 140px;
    height: 26px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 6px center;
    background-repeat: no-repeat;
    background-size: 14px;
    padding-right: 26px;
}

.goog-te-combo:hover {
    border-color: #10b981; /* Green on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
    background-color: #fefefe;
}


.goog-te-combo:focus {
    border-color: #10b981; /* Green on focus */
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1), 0 4px 8px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
    background-color: #ffffff;
}

.goog-te-combo:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
`
        document.head.appendChild(styling);
        clearInterval(interv);
        }
        console.log("Dropdown not found!!");


      },300);
      



    }catch(err){
    console.log("Error")
    };
};

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
      toObserve.disconnect();
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
