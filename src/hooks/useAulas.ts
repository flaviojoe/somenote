/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Aula } from "../@types/aula";
import { ApiService } from "../services/ApiService";

export function useAulas() {
    const [listaAula, setListaAula] = useState<Aula[]>([]);
    const [checked, setChecked] = useState<Aula | null>(null);

    useEffect(() => {
        ApiService.get('aulas').then((resposta) => {
            setListaAula(resposta.data);
        })
    }, []);

    useEffect(() => {
        alterarVal();
    },[alterarVal, checked]);

    function alterarVal(){
        // let index = checked.findIndex(i => i === id);
        // let arrSelec = [...checked];
        // if (index !== -1) {
        //     arrSelec.splice(index, 1);
        // } else {
        //     arrSelec.push(id);
        // }
        // setChecked(arrSelec);
        //alert('valor de checked:' + {checked})
        //console.log('funfou ' + checked?.name + ' id ' + checked?.id);
        
    }

    return {
        listaAula,
        checked,
        setChecked,
        alterarVal
    }
}