import Link from "next/link";
import { CabecalhoContainer, Logo } from "./cabecalho.style";

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <Link href="/">
                <Logo src="/images/myteacher.png" />
            </Link>

            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho;