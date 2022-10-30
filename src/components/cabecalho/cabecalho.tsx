import Link from "next/link";
import { CabecalhoContainer, Logo } from "./cabecalho.style";

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <Link href="/">
                <div>
                    <Logo src="/images/myteacher.png" />
                </div>
            </Link>

            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho;