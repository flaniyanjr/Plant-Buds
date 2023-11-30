import { Outlet, useOutletContext } from "react-router-dom";

function Content() {

    const context = useOutletContext();

    return (
        <div className="layout">
            <Outlet context={{...context}} />
        </div>
    )
}

export default Content;