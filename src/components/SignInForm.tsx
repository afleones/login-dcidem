import React, { useState } from 'react';
import '../assets/styles/FormLogin.css';
import logo from '../assets/img/logo.jpg';
import { makeApiRequest } from '../api/api'; // Asegúrate de tener esta función para hacer la solicitud API
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);  // Para manejar posibles errores de login
  const navigate = useNavigate();  // Inicializa navigate

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    const userData = {
      email,
      password,
    };

    const endpoint = 'login';

    const method = 'POST';

    try {
      const response = await makeApiRequest(endpoint, method, userData);  // Llamada a la API de login
      console.log('Inicio de sesión exitoso', response);
      
      // Después de un inicio de sesión exitoso, redirige a dashboard
      navigate('/dashboard');  // Redirecciona a la página de Dashboard
    } catch (error) {
      setError('Credenciales incorrectas.');  // Manejo de errores
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form className="LoginForm" onSubmit={handleFormSubmit}>
        <div className="social-container">
        <img src={logo} alt="Logo" className="logo" />
        </div>
        
        {error && <p className="error-message">{error}</p>} {/* Mostrar error si existe */}
        <input 
          className="Inputs"
          type="email"
          placeholder="Correo o Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Actualizar el valor del email
        />
        <input
          className="Inputs"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Actualizar el valor de la contraseña
        />
        {/*<a href="#">Forgot your password?</a>*/}
        <button className="submitButton" type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
};

export default SignInForm;
