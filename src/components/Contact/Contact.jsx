import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  let navigate = useNavigate();
  const initialState = {
    name: '',
    email: '',
  };
  //*estados del componente
  //estado del formulario
  const [data, setData] = useState(initialState);
  //data anyName   setAnyName     -> in this order  useState -> always the same name

  //estado del botón disabled
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState('');

  const handleInputChange = event => {
    // console.log(event.target.name); //nombre del input en el que escribo
    // console.log(event.target.value); //lo que escribo
    setData({
      ...data, //para que no borre los valores que ya había
      [event.target.name]: event.target.value,
    });
    if (data.name.length + 1 < 3) {
      setMessage('Name must be at least 3 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  //funcion que limpia el formulario
  const clearForm = () => {
    setData(initialState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    //acciones formularios
    console.log('Datos formulario', data);
    localStorage.setItem('form', JSON.stringify(data));
    //limpiamos formulario
    clearForm();
    setMessage('Formulario enviado con éxito');
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={data.name}
          onChange={handleInputChange}
          name="name"
        />
        <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={handleInputChange}
          name="email"
        />
        <input
          type="number"
          placeholder="age"
          value={data.age}
          onChange={handleInputChange}
          name="age"
        />
        <input
          type="tel"
          placeholder="tel"
          value={data.tel}
          onChange={handleInputChange}
          name="tel"
        />
        <button type="submit" disabled={btnDisabled}>
          Enviar
        </button>
        {message}
      </form>
    </div>
  );
};

export default Contact;
