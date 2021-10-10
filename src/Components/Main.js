import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
// import NavBar from "./NavBar";
import GalleryMainPage from "./Pages/GalleryMainPage";
import Registration from "./Pages/Registration";
import TechKaroPage from "./Pages/TechKaroPage";


function Main() {
    return (
        <>
            < Router >
                {/* <div>
                    <NavBar />
                </div> */}


                <Switch>
                    {/* <Route exact path="/">
                        {<Redirect to="/home" />}
                    </Route> */}
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="./TechKaroPage">
                        <TechKaroPage />
                    </Route>
                    <Route path="./Registration">
                        <Registration />
                    </Route>
                    <Route path="./GalleryMainPage">
                        <GalleryMainPage />
                    </Route>
                </Switch>
            </Router >

        </>
    )
}

export default Main;