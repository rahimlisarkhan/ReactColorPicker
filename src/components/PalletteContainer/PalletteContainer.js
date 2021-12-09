import { TransferWithinAStationTwoTone } from "@mui/icons-material";
import { Component, Fragment } from "react";
import PersistentDrawer from '../PersistentDrawer/PersistentDrawer'

class PalletteContainer extends Component {

    constructor(){
        super()
        this.state = {
            favoriteColor:[]
        }
        this.addColorPallette = this.addColorPallette.bind(this)
    }

    addColorPallette(colorInfo){
        this.setState({favoriteColor:[...this.state.favoriteColor, colorInfo]})
    }

    render() {

        console.log(this.state.favoriteColor);
        return(
                <PersistentDrawer favoriteColor={this.state.favoriteColor} addColorPallette={this.addColorPallette} />
        )
    }
}

export default PalletteContainer