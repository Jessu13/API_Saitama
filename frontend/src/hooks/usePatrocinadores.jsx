import { useContext } from "react";
import PatrocinadoresContext from "../context/PatrocinadoresProvider";

const usePatrocinadores = () => {
    return useContext(PatrocinadoresContext)
}

export default usePatrocinadores