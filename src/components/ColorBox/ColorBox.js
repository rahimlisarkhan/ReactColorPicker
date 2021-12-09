import { Component, Fragment } from "react";
import { ColorBoxContent,ColorBoxTitle } from "./ColorBox.styled";


class ColorBox extends Component {

    render() {
        return(
                <ColorBoxContent color={this.props.color}>
                    <ColorBoxTitle>
                        {this.props.colorName}
                    </ColorBoxTitle>
                </ColorBoxContent>
        )
    }
}

export default ColorBox