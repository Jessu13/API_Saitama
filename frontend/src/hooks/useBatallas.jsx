import { useContext } from "react";
import BatallasContext from "../context/BatallasProvider";

const useBatallas = () => {
    return useContext(BatallasContext)
}

export default useBatallas