import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProspect } from "../actions/ProspectsActions";
import { Card, Segment } from "semantic-ui-react";
import ProspectHeader from "../components/ProspectHeader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VisualizeProspect = props => {
  let { id } = useParams();
  const [idProspect, setIdProspect] = useState(id);

  useEffect(() => {
    props.getProspect(idProspect);
  }, []);

  return (
    <div className="App">
      <ProspectHeader
        headerTitle={`Visualizando información de  ${
          props.prospect ? props.prospect.nombre : "nombre"
        } `}
      />
      <br />
      <div style={{ width: "60%", margin: "auto" }}>
        <Segment>
          <Card
            
            centered
            color={ props.prospect ?  (props.prospect.estatus === "R" ? "red" : "green") : "grey"}
          >
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
            <Card.Content>
                <Card.Header>
                    Observaciones
                </Card.Header>
                <Card.Description>
                    {props.prospect ? props.prospect.observacion : ""}
                </Card.Description>
            </Card.Content>
          </Card>
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
    getProspect: id => dispatch(getProspect(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisualizeProspect);
