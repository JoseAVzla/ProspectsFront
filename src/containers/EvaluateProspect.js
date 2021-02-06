import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateProspect, getProspect } from "../actions/ProspectsActions";
import {
  Form,
  Card,
  Grid,
  Segment,
  Dropdown,
  Divider,
  Button,
  Menu
} from "semantic-ui-react";
import ProspectHeader from "../components/ProspectHeader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EvaluateProspect = props => {
  let { id } = useParams();
  const [idProspect, setIdProspect] = useState(id);
  const [estatus, setEstatus] = useState("E");
  const [observacion, setObservacion] = useState("");

  useEffect(() => {
    props.getProspect(idProspect);
  }, []);

  const handleUpdateProspect = async (idProspect, estatus, observacion) => {
    await props.updateProspect(idProspect, estatus, observacion);
  };

  const options = [
    { key: 1, text: "Aprobado", value: "A" },
    { key: 2, text: "Rechazado", value: "R" }
  ];

  return (
    <div className="App">
      <ProspectHeader
        headerTitle={`Evaluando a  ${
          props.prospect ? props.prospect.nombre : "nombre"
        } `}
      />
      <br />
      <div style={{ width: "60%", margin: "auto" }}>
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Card className={"vertical-center"} centered color={ estatus === "R" ? "red" : "green" }>
                <Card.Content>
                  {/* <Image
                    floated="right"
                    size="mini"
                    src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  /> */}
                  <Card.Header>
                    {props.prospect
                      ? props.prospect.nombre +
                        " " +
                        props.prospect.apellidop +
                        " " +
                        props.prospect.apellidom
                      : ""}
                  </Card.Header>
                  <Card.Meta>
                    {props.prospect ? "Tel: " + props.prospect.telefono : ""}
                  </Card.Meta>
                  <Card.Description align="left">
                    <strong>Dirección: </strong>
                    {props.prospect
                      ? props.prospect.calle +
                        " " +
                        props.prospect.numero +
                        ", " +
                        props.prospect.colonia +
                        ", " +
                        "cp " +
                        props.prospect.cp +
                        "."
                      : ""}
                  </Card.Description>
                  <Card.Description align="left">
                    <strong>RFC: </strong>
                    {props.prospect ? props.prospect.rfc + "." : ""}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Form widths={"equal"}>
                <Form.Group>
                  <Menu compact>
                    <Dropdown
                      selection
                      options={options}
                      placeholder={"Estatus"}
                      simple
                      item
                      onChange={(event, data) => setEstatus(data.value)}
                    />
                  </Menu>
                </Form.Group>
                <Form.Group>
                  <Form.TextArea
                    label="Observaciones"
                    placeholder="Observaciones"
                    onChange={event => setObservacion(event.target.value)}
                  />
                </Form.Group>
              </Form>
              <Link to={"/"}>
                <Button
                  color="primary"
                  onClick={e =>
                    handleUpdateProspect(idProspect, estatus, observacion)
                  }
                >
                  Evaluar
                </Button>
              </Link>
              <Button
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
              </Button>
            </Grid.Column>
          </Grid>

          <Divider vertical>Evaluar</Divider>
        </Segment>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    prospect: state.prospect
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProspect: id => dispatch(getProspect(id)),
    updateProspect: (id, estatus, observacion) =>
      dispatch(updateProspect(id, estatus, observacion))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EvaluateProspect);
