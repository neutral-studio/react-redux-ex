import React from 'react';

import ListaClienti from './ListaClienti';
import ListaRimborsi from './ListaRimborsi';
import StatoCassa from './StatoCassa';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-md-7">
            <div className="jumbotron">
              <h3>Facciamo Cose, con Redux</h3>
              <p>Si, è proprio così. Credici.</p>
            </div>
          </div>
          <div className="col-md-5">
            <StatoCassa />
          </div>
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
