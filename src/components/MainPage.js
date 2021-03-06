import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import CountryDistance from "./CountryDistance";
function MainPage() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar/>
                <div className="container" style={{ maxWidth: "60%", marginTop: 30}}>
                    <Switch>
                        <Route exact path = '/' component = { Dashboard }/>
                        <Route exact path = '/calculateDistance' component = { CountryDistance }/>
                    </Switch>
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default MainPage;