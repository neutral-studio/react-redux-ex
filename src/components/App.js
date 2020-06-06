import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron my-4">
          <h3>Facciamo Cose, con Redux</h3>
          <p>Si, è proprio così. Credici.</p>
        </div>
        <div>
          <div className="btn btn-primary mr-3">Nuova Polizza</div>
          <div className="btn btn-primary">Chiedi Rimborso</div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">Lista Clienti</div>
          <div className="col-md-6">Rimborsi</div>
        </div>
      </div>
    );
  }
}

export default App;
