import { useEffect, useState } from "react";
import { ApiService } from "../services/ApiService";

export function useCadastro(){
    const [nomeProf, setNomeProf] = useState('');
    const [desc, setDesc] = useState('');
    const [valor, setValor] = useState('');
    const [foto, setFoto] = useState('');
    const [msg, setMsg] = useState('');
    const [campoErro, setCampoErro] = useState('')

    function validarDados(){
        return nomeProf.length > 0 && desc.length > 0 && valor.length > 0 && foto.length > 0;
    }

    function insereProf(){
        if(nomeProf.length > 0) {
            if (validarDados()){
                ApiService.post('professores/',{
                    "name": nomeProf,
                    "description": desc,
                    "hour_value": valor,
                    "picture": foto
                }).then(() => {
                    setMsg('Cadastro realizado com sucesso.');
                    limparForm();
                }).catch((error) => {
                    setMsg(error.response?.data.message);
                    setCampoErro(error.response?.data.campo)
                });
            } else {
                setMsg('Preencha os dados corretamente.');
            }
        }
    }

    function limparForm(){
        setNomeProf('');
        setDesc('');
        setValor('');
        setFoto('');
    }

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
        setMsg,
        insereProf,
        campoErro,
        setCampoErro
    }

}