import React, { useState } from 'react';

function Formulario() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validar que nombres y apellidos contengan solo letras
    if (!/^[a-zA-Z\s]+$/.test(formValues.firstName)) {
      newErrors.firstName = 'First Name must contain only letters.';
    }

    if (!/^[a-zA-Z\s]+$/.test(formValues.lastName)) {
      newErrors.lastName = 'Last Name must contain only letters.';
    }

    // Validar el correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = 'Invalid email address.';
    }

    // Validar que el número de celular tenga 9 dígitos
    if (!/^\d{9}$/.test(formValues.phone)) {
      newErrors.phone = 'Phone number must be 9 digits.';
    }

    setErrors(newErrors);

    // Retornar true si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Data submitted successfully:\nFirst Name: ${formValues.firstName}\nLast Name: ${formValues.lastName}\nEmail: ${formValues.email}\nPhone: ${formValues.phone}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className='form'>
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default Formulario;
