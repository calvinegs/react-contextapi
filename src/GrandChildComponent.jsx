import { useContext } from "react";
import { ColorContext } from "./ColorContext";

const GrandChildComponent = () => {
    const { color, setColor} = useContext(ColorContext);

    return (
        <p>Color: {color}</p>
    )
}

export default GrandChildComponent;