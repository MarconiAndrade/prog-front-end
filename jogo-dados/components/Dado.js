import Image from 'next/image';

export default function Dado({valor}){
    return(
        <div className="dado">
            <Image
                className="face"
                src={`/faces/face${valor}.jpeg`}
                alt={`Dado com valor ${valor}`}
                width={120}
                height={100}
            />
        </div>
    )
}