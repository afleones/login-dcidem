export const makeApiRequest = async (
  endpoint: string,
  method: string,
  body?: any
) => {
  const API_URL = 'https://api.dcidem.com.co/v1/';
  const url = `${API_URL}${endpoint}`; // Combina la base de la URL con el endpoint

  // Configuración de las cabeceras para solicitudes de login
  const headers: HeadersInit = {
    'Content-Type': 'application/json', // Especificamos que los datos serán JSON
  };

  try {
    // Realizar la solicitud
    const response = await fetch(url, {
      method: method,
      headers: headers, // Agrega las cabeceras
      body: method === 'POST' || method === 'PUT' ? JSON.stringify(body) : undefined,
      credentials: 'include',  // Asegúrate de incluir las cookies
    });

    // Intenta convertir la respuesta a JSON
    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error('Error parsing response JSON');
    }

    // Verifica si la respuesta es válida
    if (!response.ok) {
      throw new Error(data?.message || `HTTP error! Status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error;
  }
};
