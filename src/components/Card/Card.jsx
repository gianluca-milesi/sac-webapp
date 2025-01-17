import style from "./Card.module.css"
import { Link } from "react-router-dom"

function Card({ item = {} }) {

    const { id, localita, dataPartenza, dataRitorno } = item

    function formatDate(date) {
        const dateIt = new Date(date).toLocaleDateString('IT-it')
        return dateIt
    }

    return (
        <Link to={`travel/${id}`}>
            <div className={style.card}>
                <h2>{localita}</h2>
                <span>{formatDate(dataPartenza)} </span><span>- {formatDate(dataRitorno)}</span>
            </div>
        </Link>
    )
}

export default Card