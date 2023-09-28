import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [inputFullName, setInputFullName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  // definir todos los estados (de los input) para luego poder controlarlos

  const handleReset = () => {
    navigate("/contact");
  };

  const handleAddContact = (event) => {
    event.preventDefault();
    console.log("Ejecuto Bton");
    const user = {
      full_name: inputFullName,
      email: inputEmail,
      agenda_slug: "spain46",
      address: inputAddress,
      phone: inputPhone,
    };
    actions.addContact(user);
    navigate("/contact");

    // ejecutar el actions que envie los datos a la API
  };

  return (
    <div className="container">
      <h1 className="text-primary">Add Contact</h1>
      <form onSubmit={() => addContact()}>
        <div className="mb-3">
          <label htmlFor="exampleInputFullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFullName"
            aria-describedby="emailHelp"
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
            onChange={(e) => setInputAddress(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleAddContact}
          className="btn btn-primary m-1"
        >
          Save
        </button>
        <button
          onClick={handleReset}
          type="reset"
          className="btn btn-secondary"
        >
          Reset
        </button>
      </form>
    </div>
  );
};
