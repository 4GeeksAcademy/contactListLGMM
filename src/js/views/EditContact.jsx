import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const results = store.users.filter(
    (item) => item.id == params.idContact
  );
  const currentContact = results[0];
  const [inputFullName, setInputFullName] = useState(currentContact.full_name);
  const [inputEmail, setInputEmail] = useState(currentContact.email);
  const [inputAddress, setInputAddress] = useState(currentContact.address);
  const [inputPhone, setInputPhone] = useState(currentContact.phone);
  // definir todos los estados (de los input) para luego poder controlarlos
  // puedo definir un inputValue generico que se un objeto que contenga claves-valor en donde la clave es el name del input y el valor es el value


  const handleReset = () => {
    navigate("/contact");
  };


  const editContact = (event) => {
    event.preventDefault();
    console.log("Ejecuto Bton");
    // actualizo el store contactSelected, va a ser un objeto con todos los valores de los input
    const contactSelected = {
      full_name: inputFullName,
      email: inputEmail,
      agenda_slug: "spain46",
      address: inputAddress,
      phone: inputPhone,
    };
    actions.editContact(params.idContact, contactSelected);
    navigate("/contact");
    

    // ejecutar el actions que envie los datos a la API
  };

  return (
    <div className="container">
      <h1 className="text-primary">Edit Contact</h1>
      <form onSubmit={editContact}>
        <div className="mb-3">
          <label htmlFor="exampleInputFullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFullName"
            aria-describedby="emailHelp"
            value={inputFullName}
            onChange={(e) => setInputFullName(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPhone"
            value={inputPhone}
            onChange={(e) => setInputPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAddress"
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Save
        </button>
        <button onClick={handleReset} type="reset" className="btn btn-secondary">
          Reset
        </button>
      </form>
    </div>
  );
};
