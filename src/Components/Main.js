import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import GalleryMainPage from "./Pages/GalleryMainPage";
import Registration from "./Pages/Registration";
import TechKaroPage from "./Pages/TechKaroPage";


function Main() {
    return (
        <>
            < Router >
                <div>
                    <NavBar />
                </div>
                <Switch>
                    <Route exact path="/">
                        {<Redirect to="/home" />}
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/techkaropage">
                        <TechKaroPage />
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                    <Route path="/gallerymainpage">
                        <GalleryMainPage />
                    </Route>
                </Switch>
            </Router >

        </>
    )
}

export default Main;