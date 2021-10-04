import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ButtonRules from "./components/ButtonRules";
import HeaderScore from "./components/HeaderScore";
import ChooseYourFighter from "./pages/ChooseYourFighter";
import Fight from "./pages/Fight";

export function Routes() {
    return (
        <Fragment>
            <HeaderScore />
            <Router>
                <Switch>
                    <Route component={ChooseYourFighter} exact path="/" />
                    <Route component={Fight} path="/fight" />
                </Switch>
            </Router>
            <ButtonRules />
        </Fragment>
    )
}