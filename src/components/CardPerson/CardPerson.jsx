import style from "./CardPerson.module.css"

function CardPerson({ item = {}, indice }) {

    const { id, nome, cognome, numeroTelefono, email, codiceFiscale } = item


    return (
        <div className={style.card}>
            <h2>{nome} {cognome}</h2>
            {indice === id &&
                <div className="person-info">
                    <span>{numeroTelefono}</span><span>{email}</span><span>{codiceFiscale}</span>
                </div>
            }
        </div >
    )
}

export default CardPerson