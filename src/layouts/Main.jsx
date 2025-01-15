import Card from "../components/Card/Card.jsx"
import viaggi from "../data/viaggi.js"

function Main() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {viaggi.map(viaggio => (
                        <div key={viaggio.id} className="col-12">
                            <Card item={viaggio} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Main