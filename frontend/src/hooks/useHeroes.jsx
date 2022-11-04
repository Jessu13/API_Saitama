import { useContext } from "react";
import HeroesContext from "../context/HeroesProvider";

const useHeroes = () => {
    return useContext(HeroesContext)
}

export default useHeroes