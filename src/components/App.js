import React from 'react';

import ListaClienti from './ListaClienti';
import ListaRimborsi from './ListaRimborsi';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron my-4">
          <h3>Facciamo Cose, con Redux</h3>
          <p>Si, è proprio così. Credici.</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <ListaClienti />
          </div>
          <div className="col-md-6">
            <ListaRimborsi />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
