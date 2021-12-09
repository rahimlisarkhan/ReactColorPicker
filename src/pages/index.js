import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PalletteNew from "./PalletteNew/PalletteNew";
import Pallette from "./Pallette/Pallette";

class Pages extends Component {

    render() {
        return (
         <Switch>
            <Route exact path="/pallete"  component={Pallette}/>
            <Route exact path="/pallete/new"  component={PalletteNew}/>
          </Switch>
        )
    }
}

export default Pages