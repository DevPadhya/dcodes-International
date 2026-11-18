// app/components/FullProtection.tsx
"use client";

import { useEffect } from 'react';

export default function FullProtection() {
  useEffect(() => {
    console.log('🔒 Website protection activated');
    
    // All shortcut keys to block
    const blockedKeys = [
      'F12', 
      'I', 
      'J', 
      'C', 
      'U'  
    ];
    
    // Modifier keys
    const blockedCombinations = [
      { ctrl: true, shift: true, key: 'I' },
      { ctrl: true, shift: true, key: 'J' },
      { ctrl: true, shift: true, key: 'C' },
      { ctrl: true, key: 'U' },
      { ctrl: true, key: 'S' }
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check blocked single keys
      if (blockedKeys.includes(e.key)) {
        // Check if modifier keys are pressed
        if (e.key === 'F12' || (e.ctrlKey || e.shiftKey)) {
          e.preventDefault();
          e.stopPropagation();
          showWarning();
          return false;
        }
      }
      
      // Check blocked combinations
      for (const combo of blockedCombinations) {
        const ctrlMatch = !combo.ctrl || e.ctrlKey;
        const shiftMatch = !combo.shift || e.shiftKey;
        const keyMatch = e.key === combo.key;
        
        if (ctrlMatch && shiftMatch && keyMatch) {
          e.preventDefault();
          e.stopPropagation();
          showWarning();
          return false;
        }
      }
    };
    
    // Right click disable
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      showWarning('Right click is disabled');
      return false;
    };
    
    // Developer tools detection (તમામ બ્રાઉઝર માટે)
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        // DevTools ખુલ્યું છે
        document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:100px;">⚠️ Developer Tools Not Allowed</h1>';
        window.location.reload();
      }
    };
    
    // Warning message દર્શાવવી
    const showWarning = (message?: string) => {
      const warning = document.createElement('div');
      warning.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: #ff4444;
          color: white;
          padding: 15px;
          border-radius: 5px;
          z-index: 99999;
          font-family: Arial;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          animation: fadeIn 0.3s;
        ">
          ⚠️ ${message || 'This action is not allowed!'}
        </div>
      `;
      
      document.body.appendChild(warning);
      setTimeout(() => warning.remove(), 2000);
    };
    
    // Regular check for dev tools
    let checkInterval: NodeJS.Timeout;
    
    // Start protection
    const startProtection = () => {
      // Event listeners
      document.addEventListener('keydown', handleKeyDown, true);
      document.addEventListener('contextmenu', handleContextMenu, true);
      
      // DevTools detection
      checkInterval = setInterval(detectDevTools, 1000);
      
      // Disable text selection (optional)
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
      
      // Disable dragging
      document.addEventListener('dragstart', (e) => e.preventDefault());
    };
    
    // Stop protection (development માટે)
    const stopProtection = () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('contextmenu', handleContextMenu, true);
      clearInterval(checkInterval);
      document.body.style.userSelect = 'auto';
      document.body.style.webkitUserSelect = 'auto';
    };
    
    // Development મોડમાં ન ચલાવવા
    if (process.env.NODE_ENV === 'development') {
      console.log('🛡️ Protection disabled in development mode');
      // stopProtection(); // Development માં બંધ કરવું
    } else {
      startProtection();
    }
    
    return () => {
      stopProtection();
    };
  }, []);

  return null;
}