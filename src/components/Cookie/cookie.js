import { useState } from 'react';
import './style.css'

export const Cookie = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (cookiesAccepted) {
    return null;
  }

  return (
    <div className={`cookie-banner ${isVisible ? 'visible' : ''}`}>
      <p>
        We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
      </p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};
