import { useState } from "react";
import { ColorContext } from "./ColorContext";

function ColorProvider(props) {
    const [color, setColor] = useState("red");
  
    return (
      <div>
        <ColorContext.Provider value={{ color, setColor }}>
          {props.color}
        </ColorContext.Provider>
      </div>
    );
  }

  export { ColorProvider };