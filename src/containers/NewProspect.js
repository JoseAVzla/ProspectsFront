import React from 'react';
import ProspectHeader from '../components/ProspectHeader';
import { Link } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";
import '../App.css';

function App() {
  return (
    <div className="App">
      <ProspectHeader  name={"Nuevo Prospecto"} />
      <Segment>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </Segment>
    </div>
  );
}

export default App;
