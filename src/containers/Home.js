import React from "react";
import ProspectHeader from "../components/ProspectHeader";
import { Link } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";

import "../App.css";

function Home() {
  return (
    <div className="App">
      <ProspectHeader author={"Jose"} name={"Home"} />
      <Segment>
        <Link to="/new-prospect">
          <Button>Add Prospect</Button>
        </Link>
      </Segment>
    </div>
  );
}

export default Home;
