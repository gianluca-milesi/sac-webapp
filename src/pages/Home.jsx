import Card from "../components/Card/Card.jsx"
import Form from "../components/Form/Form.jsx"
import { useState } from "react"
import GlobalContext from "../contexts/GlobalContext.js"
import { useContext } from "react"

function Home() {

    const [isFormActive, setIsFormActive] = useState(false)
    const { newViaggi } = useContext(GlobalContext)


    function addTravelOnClick() {
        if (isFormActive === true) setIsFormActive(false)
        if (isFormActive === false) setIsFormActive(true)
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    {newViaggi.map(viaggio => (
                        <div key={viaggio.id} className="col-12">
                            <Card item={viaggio} />
                        </div>
                    ))}
                </div>
                <div className="add-travel-button">
                    <button onClick={addTravelOnClick}>Aggiungi viaggio</button>
                </div>
            </div>

            <div className="container">
                {isFormActive && <Form />}
            </div>
        </main>
    )
}

export default Home