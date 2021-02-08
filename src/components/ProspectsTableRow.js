import { Link } from "react-router-dom";
import { Button, Table, Icon } from "semantic-ui-react";
import "../App.css";

const ProspectsTableRow = ({ item }) => {
  return (
    <Table.Row positive={item.estatus === "A"} negative={item.estatus === "R"}>
      <Table.Cell>{item.id}</Table.Cell>
      <Table.Cell>{item.nombre}</Table.Cell>
      <Table.Cell>{item.apellidop}</Table.Cell>
      <Table.Cell>{item.apellidom}</Table.Cell>
      <Table.Cell>
        <Button animated="vertical" size="mini" color={item.estatus === "E" ? "blue" : (item.estatus === "A" ? "green" : "red")}>
          <Button.Content hidden>{ item.estatus }</Button.Content>
          <Button.Content visible centered>
            <Icon name={ item.estatus === "E" ? "send" : (item.estatus === "A" ? "user plus" : "user close")  } />
          </Button.Content>
        </Button>
      </Table.Cell>
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
  );
};

export default ProspectsTableRow;
