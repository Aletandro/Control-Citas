import React, { useState } from "react";

const Formulario = () => {
  //Crear State
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handledChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer ivalores inputs
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Submit Form

  const submitCita = () => {
    console.log("subiendo");
  };

  return (
    <>
      <h2>Crear Citas</h2>
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de tu mascota"
          onChange={handledChange}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={handledChange}
          value={propietario}
        />
        <label>Nombre Mascota</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          placeholder=""
          onChange={handledChange}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          placeholder=""
          onChange={handledChange}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handledChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
