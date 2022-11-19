/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Aula } from "../@types/aula";
import { ApiService } from "../services/ApiService";

export function useAulas() {
    const [listaAula, setListaAula] = useState<Aula[]>([]);
    const [checked, setChecked] = useState<Aula | null>(null);
    const [selId, setSelId] = useState([]);

    useEffect(() => {
        ApiService.get('aulas').then((resposta) => {
            setListaAula(resposta.data);
        })
    }, []);

    useEffect(() => {
        alterarVal();
    },[checked]);

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
        
        let index = selId.findIndex(item => item === checked?.id);
            let arrSelec = [...selId];
            console.log('inicio array: ' + arrSelec + ' index ' + index);
            if (index !== -1) {
                console.log('se estiver no array: ' + arrSelec);
                console.log('valor encontrado: ' + arrSelec[index])
                console.log('posicao:' + index);
                let newList = arrSelec.filter((item) => item !== arrSelec[index]);
                setSelId(newList);
            } else {
                console.log('senao: ' + arrSelec);
                arrSelec.push(checked?.id);
                setSelId(arrSelec);
            }
            console.log('funfou ' + selId + ' index ' + index);
    }



    return {
        listaAula,
        checked,
        setChecked,
        alterarVal,
        selId,
        setSelId
    }
}