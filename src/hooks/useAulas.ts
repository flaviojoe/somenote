import { useEffect, useState } from "react";
import { Aula } from "../@types/aula";
import { ApiService } from "../services/ApiService";

export function useAulas() {
    const [listaAula, setListaAula] = useState<Aula[]>([]);

    useEffect(() => {
        ApiService.get('aulas').then((resposta) => {
            setListaAula(resposta.data);
        })
    }, []);

    return {
        listaAula
    }
}