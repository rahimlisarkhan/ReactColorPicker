import { Component, Fragment } from "react";
import PalletteContainer from "../../components/PalletteContainer/PalletteContainer";

class Pallette extends Component {
    render() {
        console.log(this.props);
        return(
            <Fragment>
                <PalletteContainer/>
            </Fragment>
        )
    }
}

export default Pallette