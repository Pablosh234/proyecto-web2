import './Card.css'
export default function Card({titulo,anios,urlImagen}){
    return(
        <div className="tarjeta-trofeo">
            <img 
                src={urlImagen} 
                alt={titulo} 
                className="imagen-trofeo" 
            />
            <div className="detalles-trofeo">
                <h2>{titulo}</h2>
                <p>{anios}</p>
            </div>
        </div>
    );
}