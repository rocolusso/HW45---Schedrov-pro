import React from "react";
import Card from "./Card";
import { toRenderProps } from "../utils/dataToRender";

class App extends React.Component {
  render() {
    return (
      <div>
        {toRenderProps.map((prop) => (
          <Card key={prop.id} title={prop.title} text={prop.text} />
        ))}
      </div>
    );
  }
}

export default App;
