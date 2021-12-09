import { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Pages from './pages'
class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
    );
  }
}

export default App;
