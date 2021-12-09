import { Component, Fragment } from 'react';
import { SketchPicker } from 'react-color';
import { ColorButton, ColorContent, TextInput } from './ColorPicker.styled'


class ColorPicker extends Component {

  constructor() {
    super()

    this.state = {
      background: '',
      colorName: ''
    }
    this.handleCompleted = this.handleCompleted.bind(this)
  }

  handleChangeColor = (color) => {
    this.setState({ background: color.hex });
  };

  handleChangeValue = (e) => {
    this.setState({ colorName: e.target.value });
  };

  handleCompleted() {

    let colorData = {
      colorName: this.state.colorName,
      background: this.state.background,
    }

    if (this.state.colorName && this.state.background) {
      this.props.addColorPallette(colorData)
      this.setState({ colorName:'', background: '' });
    }

  }

  render() {
    return (
      <Fragment>
        <ColorContent>
          <SketchPicker
            color={this.state.background}
            onChange={this.handleChangeColor}
          />
          <TextInput
            id="outlined-multiline-flexible"
            // label="Multiline"
            multiline
            placeholder='Color name'
            maxRows={4}
            value={this.state.colorName}
            onChange={this.handleChangeValue}
          />
          <ColorButton variant="contained" onClick={this.handleCompleted} color="success">Secondary</ColorButton>
        </ColorContent>
      </Fragment>
    );
  }
}

export default ColorPicker