import style from "./CardPerson.module.css"

function CardPerson({ item = {}, indice }) {

    const { id, nome, cognome, numeroTelefono, email, codiceFiscale } = item


    return (
        <div className={style.card}>
            <div className={style.title}>
                <h2>{nome} {cognome}</h2>
                <svg className={style.icon} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
            </div>
            {indice === id &&
                <div className={style.person_info}>
                    <p><strong>Numero: </strong>{numeroTelefono}</p>
                    <p><strong>e-mail: </strong>{email}</p>
                    <p><strong>Cod. Fiscale: </strong>{codiceFiscale}</p>
                </div>
            }
        </div >
    )
}

export default CardPerson