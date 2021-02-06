import React from "react";
import { Segment, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ProspectHeader = ({ headerTitle }) => {

  return (
    <div>
      <Segment basic inverted padded="very" vertical>
        <Header as="h1">{headerTitle} </Header>
      </Segment>
    </div>
  );
};

export default ProspectHeader;
