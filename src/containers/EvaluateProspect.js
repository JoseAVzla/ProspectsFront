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
  const [estatus, setEstatus] = useState("E");
  const [observacion, setObservacion] = useState("");
  const { prospect } = props;

  useEffect(() => {
    props.getProspect(id);
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
          prospect ? prospect[0].nombre : "nombre"
        } `}
      />
      <br />
      <div style={{ width: "60%", margin: "auto" }}>
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Card
                className={"vertical-center"}
                centered
                color={estatus === "R" ? "red" : "green"}
              >
                <Card.Content>
                  <Card.Header>
                    {prospect
                      ? prospect[0].nombre +
                        " " +
                        prospect[0].apellidop +
                        " " +
                        prospect[0].apellidom
                      : ""}
                  </Card.Header>
                  <Card.Meta>
                    {prospect ? "Tel: " + prospect[0].telefono : ""}
                  </Card.Meta>
                  <Card.Description align="left">
                    <strong>Dirección: </strong>
                    {prospect
                      ? prospect[0].calle +
                        " " +
                        prospect[0].numero +
                        ", " +
                        prospect[0].colonia +
                        ", " +
                        "cp " +
                        prospect[0].cp +
                        "."
                      : ""}
                  </Card.Description>
                  <Card.Description align="left">
                    <strong>RFC: </strong>
                    {prospect ? prospect[0].rfc + "." : ""}
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
                    disabled={estatus === "A" ? true : false}
                    label="Observaciones"
                    placeholder="Observaciones"
                    onChange={event => setObservacion(event.target.value)}
                  />
                </Form.Group>
              </Form>
              <Link to={"/"}>
                <Button
                  disabled={estatus === "E" ? true : false}
                  color="primary"
                  onClick={e => handleUpdateProspect(id, estatus, observacion)}
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
