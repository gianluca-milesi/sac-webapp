import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import viaggi from "../data/viaggi.js"
import CardPerson from "../components/CardPerson/CardPerson.jsx"

function DettaglioViaggio() {

    const { id } = useParams()

    const [singoloViaggio] = viaggi.filter(viaggio => (viaggio.id == id))
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
            <Link to="/"> <button>Indietro</button></Link>
            <input type="text" value={search} onChange={handleSearch} />
            <div className="container">
                <div className="row">
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
        </div>
    )

}

export default DettaglioViaggio