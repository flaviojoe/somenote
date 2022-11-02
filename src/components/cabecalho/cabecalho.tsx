import Link from "next/link";
import { CabecalhoContainer, ContainerHead, Logo } from "./cabecalho.style";

const Cabecalho = () => {
    return (
        <ContainerHead>
            <CabecalhoContainer>
                <Link href="/">
                    <div>
                        <Logo src="/images/myteacher.png" />
                    </div>
                </Link>

                <p>Encontre o professor perfeito!</p>
            </CabecalhoContainer>
        </ContainerHead>
    )
}

export default Cabecalho;