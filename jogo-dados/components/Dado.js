import { getImageUrl } from "@/utils";

export default function Dado({valor}){
    return (
        <div className="dado">
            <img
                className="face"
                src={getImageUrl(valor)}
                alt={valor.face}
                width={100}
                height={100}
            />
        </div>
    )
}