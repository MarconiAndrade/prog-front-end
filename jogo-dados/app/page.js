import Image from "next/image";
import JogoDados from "@/components/JogoDados";

export default function Home(){
    return(
        <div>
            <JogoDados />
            Exemplo de expressão: {5**3}
        </div>
    )
}