import { useContext } from "react";
import FansContext from "../context/FansProvider";

const useFans = () => {
    return useContext(FansContext)
}

export default useFans