import React from 'react';
import '../assets/styles/FormLogin.css';

interface OverlayProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onSignInClick, onSignUpClick }) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1 className="h1">Welcome Back!</h1>
          <p className="parrafo">To keep connected with us please login with your personal info</p>
          <button className="ghostSIgnIn" onClick={onSignInClick}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1 className="h1">Hola!</h1>
          <p className="parrafo">Ingresa tu email o nombre de usuario para iniciar sesion</p>
          {/* <button className="ghostSIgnUp" onClick={onSignUpClick}>Sign Up</button> */}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
