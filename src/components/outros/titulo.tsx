import { SubTitulo, TituloPage } from "./titulo.style";
interface TituloProps {
    texto: string,
    opcao: number
}

const Titulo = (props: TituloProps) => {
    return (
        <div>
            {props.opcao === 1 ? (
                <TituloPage>{props.texto}</TituloPage>
            ) : (
                <SubTitulo>{props.texto}</SubTitulo>
            )}
        </div>
    )
}

export default Titulo;