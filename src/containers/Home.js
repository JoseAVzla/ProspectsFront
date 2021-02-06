import React from "react";
import { useEffect } from "react";
import ProspectHeader from "../components/ProspectHeader";
import { Link } from "react-router-dom";
import {
  Segment,
  Button,
  Table,
  Icon,
  TableBody,
  TableFooter,
  TableHeader
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { getProspects } from "../actions/ProspectsActions";
import "../App.css";

const Home = props => {
  useEffect(() => {
    props.getProspects();
  }, []);

  return (
    <div className="App">
      <ProspectHeader
        author={"Jose"}
        headerTitle={"Bienvenido a la app de prospectos."}
      />
      <br />
      <div style={{ width: "90%", margin: "auto" }}>
        <Table celled>
          <Table.Header>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido paterno</Table.HeaderCell>
            <Table.HeaderCell>Apellido materno</Table.HeaderCell>
            <Table.HeaderCell width={1}>Estatus</Table.HeaderCell>
            <Table.HeaderCell width={1}></Table.HeaderCell>
            <Table.HeaderCell width={1}></Table.HeaderCell>
          </Table.Header>
          <TableBody>
            {props.prospects.map(item => (
              <Table.Row
                positive={item.estatus === "A"}
                negative={item.estatus === "R"}
              >
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.nombre}</Table.Cell>
                <Table.Cell>{item.apellidop}</Table.Cell>
                <Table.Cell>{item.apellidom}</Table.Cell>
                <Table.Cell>{item.estatus}</Table.Cell>
                <Table.Cell>
                  <Link to={`/visualize${item.id}`}>
                    <Button animated="vertical" size="mini" color="green">
                      <Button.Content hidden>Ver</Button.Content>
                      <Button.Content visible centered>
                        <Icon name="eye" />
                      </Button.Content>
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/evaluate${item.id}`}>
                    <Button animated="vertical" size="mini" color="blue">
                      <Button.Content hidden>Evaluar</Button.Content>
                      <Button.Content visible centered>
                        <Icon name="edit outline" />
                      </Button.Content>
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </TableBody>
          <TableFooter>
            <Table.Row>
              <Table.HeaderCell colSpan="7">
                <Link to={`/new-prospect`}>
                  <Button
                    animated="vertical"
                    size="mini"
                    color="blue"
                    style={{ float: "rigth" }}
                  >
                    <Button.Content hidden>Agregar</Button.Content>
                    <Button.Content visible centered>
                      <Icon name="add" />
                    </Button.Content>
                  </Button>
                </Link>
              </Table.HeaderCell>
            </Table.Row>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    prospects: state.prospects
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProspects: () => dispatch(getProspects())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
