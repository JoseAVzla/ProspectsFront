import React from "react";
import { useEffect, useState } from "react";
import ProspectHeader from "../components/ProspectHeader";
import ProspectsTableRow from "../components/ProspectsTableRow";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  Icon,
  TableBody,
  TableFooter,
  Pagination
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { getProspects } from "../actions/ProspectsActions";
import "../App.css";

const Home = props => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { prospects, totalItems } = props;
  useEffect(() => {
    props.getProspects(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const handleChangePage = (event, data) => {
    setPage(data.activePage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

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
            {prospects ? (
              prospects.map(item => <ProspectsTableRow item={item} />)
            ) : (
              <div />
            )}
          </TableBody>
          <TableFooter>
            <Table.HeaderCell colSpan={7}>
              <Table.Row>
                <Pagination
                  boundaryRange={0}
                  defaultActivePage={1}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={1}
                  onPageChange={(event, data) => handleChangePage(event, data)}
                  totalPages={Math.ceil(totalItems / rowsPerPage)}
                />
              </Table.Row>
            </Table.HeaderCell>

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
    prospects: state.prospects.prospects,
    totalItems: state.prospects.totalItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProspects: (page, rowsPerPage) =>
      dispatch(getProspects(page, rowsPerPage))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
