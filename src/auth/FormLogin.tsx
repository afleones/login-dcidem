import React, { useRef } from 'react';
import '../assets/styles/FormLogin.css';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Overlay from '../components/Overlay';
import { makeApiRequest } from '../api/api';

const FormLogin: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSignUpClick = () => {
    containerRef.current?.classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
    containerRef.current?.classList.remove('right-panel-active');
  };

  // Maneja la lógica de registro
  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: '',  // Deberás manejar este estado en el formulario
      email: '',  // Deberás manejar este estado en el formulario
      password: '',  // Deberás manejar este estado en el formulario
    };
    try {
      const response = await makeApiRequest('POST', 'register', data);
      console.log(response);
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className="bodyFormLogin">
        <div className="container" ref={containerRef} id="container">
            <SignInForm />
            <SignUpForm handleSubmit={handleSignUpSubmit} /> 
            <Overlay onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
        </div>
        <span className="nota">powered by D&C IDEM COMUNICACIONES S.A.S ® All rights reserved.</span>
    </div>
  );
};
export default FormLogin;
