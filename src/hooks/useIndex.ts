import { useEffect, useState } from "react";
import { Professor } from "../@types/professor";
import { ApiService } from "../services/ApiService";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [leftMenu, setLeftMenu] = useState(false);

    useEffect(() => {
        ApiService.get('professores').then((resposta) => {
            setListaProfessores(resposta.data);
        })
    }, []);

    return {
        listaProfessores,
        leftMenu,
        setLeftMenu
    }
}