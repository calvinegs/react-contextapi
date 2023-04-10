import './App.css'
import { ColorContext } from './ColorContext';

import { useState } from 'react';
import ParentComponent from './ParentComponent';

// const App = () => {
//   return(
//     <ParentClass color= "blue"/>
//   );
// }

// const ParentClass = (props) => (
//   <ChildClass color= {props.color} />
// )

// const ChildClass = (props) => (
//   <GrandChildClass color= {props.color} />
// )

// const GrandChildClass = (props) => (
//   <p>Color: {props.color}</p>
// // )

const App = (props) => {
  const [color, setColor] = useState("blue");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ParentComponent/>
    </ColorContext.Provider>
  )
}

export default App
