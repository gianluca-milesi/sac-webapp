import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import CardPerson from "../components/CardPerson/CardPerson.jsx"
import GlobalContext from "../contexts/GlobalContext.js"
import { useContext } from "react"
import FormPerson from "../components/FormPerson/FormPerson.jsx"


function DettaglioViaggio() {

    const { id } = useParams()

    const { newViaggi } = useContext(GlobalContext)

    const [singoloViaggio] = newViaggi.filter(viaggio => (viaggio.id == id))
    const [search, setSearch] = useState("")
    const [index, setIndex] = useState(0)

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    function openOnClick(i) {
        setIndex(i)
        if (i === index) {
            setIndex(0)
        }
    }


    return (
        <div className="container">
            <div className="inputs">
                <Link to="/"> <button>Indietro</button></Link>
                <input type="text" placeholder="Cerca" value={search} onChange={handleSearch} />
            </div>
            <div className="container">
                <div className="row">
                    <h1>{singoloViaggio.localita}</h1>
                    {search ? singoloViaggio.partecipanti.filter(obj => (obj.nome + " " + obj.cognome).toLowerCase().includes(search.toLowerCase())).map((partecipante, i) => {
                        return (
                            <div key={i} className="col-12" onClick={() => openOnClick(partecipante.id)}>
                                <CardPerson item={partecipante} indice={index} />
                            </div>
                        )
                    }) :
                        singoloViaggio.partecipanti.map((partecipante, i) => {
                            return (
                                <div key={i} className="col-12" onClick={() => openOnClick(partecipante.id)}>
                                    <CardPerson item={partecipante} indice={index} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <FormPerson person={singoloViaggio} /> */}
        </div>
    )
}

export default DettaglioViaggio