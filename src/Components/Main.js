import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
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
                    <Route exact path="/techKaroPage">
                        <TechKaroPage />
                    </Route>
                    <Route exact path="/registration">
                        <Registration />
                    </Route>
                    <Route exact path="/galleryMainPage">
                        <GalleryMainPage />
                    </Route>
                </Switch>
            </Router >

        </>
    )
}

export default Main;