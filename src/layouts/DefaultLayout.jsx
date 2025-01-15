import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"


function DefaultLayout() {

    return (
        <>

            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout