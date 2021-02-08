import React from "react";
import { Segment, Header, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const ProspectHeader = ({ headerTitle }) => {
  return (
    <div className={"div-header"}>
      <Segment stacked size={"small"} vertical>
      <Header as="h1" icon textAlign={"center"}>
        <Link to={"/"}>
          <Icon name="users" circular />
        </Link>
        <Header.Content>{headerTitle}</Header.Content>
      </Header>
      </Segment>
      
    </div>
  );
};

export default ProspectHeader;
