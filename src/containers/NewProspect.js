import { useState } from "react";
import React from "react";
import ProspectHeader from "../components/ProspectHeader";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { postProspect } from "../actions/ProspectsActions";
import "../App.css";

const NewProspect = props => {
  const [nombre, setNombre] = useState("");
  const [apellidop, setApellidop] = useState("");
  const [apellidom, setApellidom] = useState("");
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [colonia, setColonia] = useState("");
  const [cp, setCp] = useState("");
  const [telefono, setTelefono] = useState("");
  const [rfc, setRfc] = useState("");
  const [documento, setDocumento] = useState("");
  const fileInput = React.createRef();

  const handleProspectSubmit = async () => {
    await props.postProspect(
      nombre,
      apellidop,
      apellidom,
      calle,
      numero,
      colonia,
      cp,
      telefono,
      rfc,
      documento
    );
    setNombre("");
    setApellidop("");
    setApellidom("");
    setCalle("");
    setNumero("");
    setColonia("");
    setCp("");
    setTelefono("");
    setRfc("");
    setDocumento("");
  };

  return (
    <div className="App">
      <ProspectHeader headerTitle={"Agregando nuevo prospecto"} />
      <br />
      <div style={{ width: "80%", margin: "auto" }}>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              required
              control={Input}
              fluid
              label="Nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={event => setNombre(event.target.value)}
            />
            <Form.Field
              required
              control={Input}
              label="Apellido paterno"
              placeholder="Apellido paterno"
              value={apellidop}
              onChange={event => setApellidop(event.target.value)}
            />
            <Form.Field
              control={Input}
              label="Apellido materno"
              placeholder="Apellido materno"
              value={apellidom}
              onChange={event => setApellidom(event.target.value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              required
              control={Input}
              label="Calle"
              placeholder="Calle"
              value={calle}
              onChange={event => setCalle(event.target.value)}
            />
            <Form.Field
              required
              control={Input}
              label="Colonia"
              placeholder="Colonia"
              value={colonia}
              onChange={event => setColonia(event.target.value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              width={5}
              label="Número"
              placeholder="Número"
              value={numero}
              onChange={event => setNumero(event.target.value)}
            />
            <Form.Field
              required
              control={Input}
              width={5}
              label="Código postal"
              placeholder="Código postal"
              value={cp}
              onChange={event => setCp(event.target.value)}
            />
            <Form.Field
              required
              control={Input}
              width={5}
              label="RFC"
              placeholder="RFC"
              value={rfc}
              onChange={event => setRfc(event.target.value)}
            />
            <Form.Field
              required
              control={Input}
              width={5}
              label="Teléfono"
              placeholder="Teléfono"
              value={telefono}
              onChange={event => setTelefono(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <input type="file" width={2} ref={fileInput} />
          </Form.Group>
          <Form.Button
            className="buttoncancel"
            color="red"
            onClick={e => {
              if (
                window.confirm(
                  "Seguro que deseas salir? Se perderá toda la información"
                )
              )
                props.history.push("/");
            }}
          >
            Cancelar
          </Form.Button>
          <Link to={"/"}>
            <Button onClick={handleProspectSubmit} color={"primary"}>Guardar</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postProspect: (nombre, apellidop, apellidom, calle, numero, colonia, cp, telefono, rfc, documento) =>
      dispatch(postProspect(nombre, apellidop, apellidom, calle, numero, colonia, cp, telefono, rfc, documento))
  };
};

export default connect(null, mapDispatchToProps)(NewProspect);
