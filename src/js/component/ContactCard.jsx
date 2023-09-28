import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTrashCan,
  faPen,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { EditContact } from "../views/EditContact.jsx";

export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);

  const deleteContact = (id) => {
    actions.deleteContact(id);
    // hay que renderizar el componente Contact, se puede usar el useNavigate
  };


  return (
    <div className="card mb-3 d-flex justify-content-between">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEavjLeilDVtW5NRdrwnNd4DEs1FPUvf8ArDiboObLA&s"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              <FontAwesomeIcon icon={faLocationDot} /> {props.address}
            </p>
            <p className="card-text">
              <FontAwesomeIcon icon={faPhone} /> {props.phone}
            </p>
            <p className="card-text">
              {" "}
              <FontAwesomeIcon icon={faAt} /> {props.email}
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-danger m-1"
            onClick={() => deleteContact(props.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <Link to={"/edit-contact/" + props.id}>
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faPen} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
