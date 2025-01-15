import style from "./Card.module.css"
import { Link } from "react-router-dom"

function Card({ item = {} }) {

    const { id, localita, dataPartenza, dataRitorno } = item

    return (
        <Link to={`travel/${id}`}>
            <div className={style.card}>
                <h2>{localita}</h2>
                <span>{dataPartenza} </span><span>- {dataRitorno}</span>
            </div>
        </Link>
    )
}

export default Card