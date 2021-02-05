import React from "react";
import { Segment, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ProspectHeader = ({ name }) => {

  return (
    <div>
      <Segment basic inverted padded="very" vertical>
        <Header as="h1">This is Header for {name} </Header>
        <Header as="h3">This is subheading</Header>
      </Segment>
    </div>
  );
};

export default ProspectHeader;
