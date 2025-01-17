import style from "./FormPerson.module.css"
import { useEffect, useState } from "react"
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"


function FormPerson({ person }) {

    const { newViaggi, setNewViaggi } = useContext(GlobalContext)
    let newIndex = person.partecipanti.at(-1).id

    const initialFormData = {
        id: newIndex + 1,
        nome: "",
        cognome: "",
        numeroTelefono: "",
        codiceFiscale: "",
        email: ""
    }


    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(event) {
        const { value, name: propName } = event.target

        setFormData({
            ...formData,
            [propName]: value
        })
    }

    function addPerson(event) {
        event.preventDefault()

        for(let i=0; i<newViaggi.length; i++){
            if(newViaggi[i].id===person.id){
                newViaggi[i].partecipanti.push(formData)
                console.log(newViaggi[i])
            }
        }

        setNewViaggi(newViaggi)

        // setNewViaggi([...newViaggi, formData])
    }
    

    return (
        <div className={style.form_wrapper}>
            <form action="" onSubmit={addPerson} className={style.form}>
                <div className={style.form_control}>
                    <label htmlFor="">Nome</label>
                    <input type="text" name="nome" id="" onChange={handleFormData} value={formData.nome} />
                </div>
                <div className={style.form_control}>
                    <label htmlFor="">Cognome</label>
                    <input type="text" name="cognome" id="" onChange={handleFormData} value={formData.cognome} />
                </div>
                <div className={style.form_control}>
                    <label htmlFor="">Num. Telefono</label>
                    <input type="text" name="numeroTelefono" id="" onChange={handleFormData} value={formData.numeroTelefono} />
                </div>
                <div className={style.form_control}>
                    <label htmlFor="">Cod. Fiscale</label>
                    <input type="text" name="codiceFiscale" id="" onChange={handleFormData} value={formData.codiceFiscale} />
                </div>
                <div className={style.form_control}>
                    <label htmlFor="">email</label>
                    <input type="text" name="email" id="" onChange={handleFormData} value={formData.email} />
                </div>
                <button>Aggiungi</button>
            </form>
        </div>
    )
}

export default FormPerson