import { Outlet, useOutletContext } from "react-router-dom";
import footer from "../styling/footer.css"

function Content() {

    const context = useOutletContext();

    return (
        <div className="layout">
            <Outlet context={{...context}} />
        </div>
    )
}

export default Content;