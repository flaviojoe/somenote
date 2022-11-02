import { useEffect, useState } from "react";
import { Professor } from "../@types/professor";
import { ApiService } from "../services/ApiService";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [leftMenu, setLeftMenu] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [selecProf, setSelecProf] = useState<Professor | null>(null);
    const [msg, setMsg] = useState('');

    
    useEffect(() => {
        ApiService.get('professores').then((resposta) => {
            setListaProfessores(resposta.data);
        })
    }, []);

    useEffect(() => {
        limparForm();
    }, [selecProf])

    function marcarAula(){
        if (selecProf !== null) {
            if (validarDados()){
                ApiService.post('professores/' + selecProf.id + '/aulas/', {
                    "name": nome,
                    "email": email
                }).then(() => {
                    setMsg('Cadastro realizado com sucesso.');
                    setSelecProf(null);
                }).catch((error) => {
                    setMsg(error.response?.data.message);
                });
            } else {
                setMsg('Preencha os dados corretamente.');
            }
        }
        
    }

    function validarDados(){
        return nome.length > 0 && email.length > 0;
    }

    function limparForm(){
        setNome('');
        setEmail('');
    }

    return {
        listaProfessores,
        leftMenu,
        setLeftMenu,
        nome,
        setNome,
        email,
        setEmail,
        selecProf,
        setSelecProf,
        marcarAula,
        msg,
        setMsg
    }
}