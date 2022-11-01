import { useContext } from "react";
import MonstruosContext from "../context/MonstruosProvider";

const useMonstruos = () => {
    return useContext(MonstruosContext)
}

export default useMonstruos