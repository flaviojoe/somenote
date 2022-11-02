import { useState } from "react";

export function useCadastro(){
    const [nomeProf, setNomeProf] = useState('');
    const [desc, setDesc] = useState('');
    const [valor, setValor] = useState('');
    const [foto, setFoto] = useState('');
    const [msg, setMsg] = useState('');

    return {
        nomeProf,
        setNomeProf,
        desc,
        setDesc,
        valor,
        setValor,
        foto,
        setFoto,
        msg,
        setMsg
    }

}