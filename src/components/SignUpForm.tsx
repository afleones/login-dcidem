import React, { useState } from 'react';
import '../assets/styles/FormLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { makeApiRequest } from '../api/api';

interface SignUpFormProps {
  handleSubmit: (e: React.FormEvent) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    // Datos que se enviarán a la API
    const userData = {
      name,
      email,
      password,
      password_confirmation,
    };

    try {
      const response = await makeApiRequest('api/auth/register', 'POST', userData);  // Llamada a la API
      console.log('Registro exitoso', response);
    } catch (error) {
      console.error('Error al registrar', error);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form className="LoginForm" onSubmit={handleFormSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
          <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
        <span className="spansFormLogin">or use your email for registration</span>
        <input
          className="Inputs"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="Inputs"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="Inputs"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="Inputs"
          type="password"
          placeholder="Password confirmation"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button className="submitButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
