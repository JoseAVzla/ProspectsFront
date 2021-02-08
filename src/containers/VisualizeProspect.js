import { useEffect } from "react";
import { connect } from "react-redux";
import { getProspect } from "../actions/ProspectsActions";
import { Card, Segment, Button } from "semantic-ui-react";
import ProspectHeader from "../components/ProspectHeader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VisualizeProspect = props => {
  let { id } = useParams();
  const { prospect } = props;
  console.log("Prospecto", props);

  useEffect(() => {
    props.getProspect(id);
  }, []);
  return (
    <div className="App">
      <ProspectHeader
        headerTitle={`Visualizando información de  ${
          prospect ? prospect[0].nombre : "nombre"
        } `}
      />
      <br />
      <br />
      <div style={{ width: "60%", margin: "auto" }}>
        <Segment>
          <Card
            centered
            color={
              prospect
                ? prospect[0].estatus === "R"
                  ? "red"
                  : "green"
                : "grey"
            }
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
            <Card.Content>
              <Card.Header>Observaciones</Card.Header>
              <Card.Description>
                {prospect ? prospect[0].observacion : ""}
              </Card.Description>
            </Card.Content>
          </Card>
        </Segment>

        <Link to={"/"}>
          <Button color="primary">Regresar</Button>
        </Link>
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
    getProspect: id => dispatch(getProspect(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisualizeProspect);
