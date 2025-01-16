import style from "./Form.module.css"
import { useState } from "react"
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"


function Form() {

    const { newViaggi, setNewViaggi } = useContext(GlobalContext)
    let newIndex = newViaggi.at(-1).id;

    const initialFormData = {
        id: newIndex + 1,
        localita: "",
        dataPartenza: "",
        dataRitorno: "",
        partecipanti: newViaggi[0].partecipanti
    }


    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(event) {
        const { value, name: propName } = event.target

        setFormData({
            ...formData,
            [propName]: value
        })
    }

    function addTravel(event) {
        event.preventDefault()

        setNewViaggi([...newViaggi, formData])
    }



    return (
        <form action="" onSubmit={addTravel} className={style.form}>
            <div className={style.form_control}>
                <label htmlFor="">Nome Località</label>
                <input type="text" name="localita" id="" onChange={handleFormData} value={formData.localita} />
            </div>
            <div className={style.form_control}>
                <label htmlFor="">Data Partenza</label>
                <input type="date" name="dataPartenza" id="" onChange={handleFormData} value={formData.dataPartenza} />
            </div>
            <div className={style.form_control}>
                <label htmlFor="">Data ritorno</label>
                <input type="date" name="dataRitorno" id="" onChange={handleFormData} value={formData.dataRitorno} />
            </div>
            <button>Aggiungi</button>
        </form>
    )
}

export default Form