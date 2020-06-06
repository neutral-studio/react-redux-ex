import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import faker from 'faker';

import { creaPolizza } from '../redux/actions';

class ListaClienti extends React.Component {
  onCreate = () => {
    this.props.creaPolizza();
  };

  renderTable = () => {
    return _.values(this.props.clienti).map(cliente => {
      return (
        <tr key={faker.random.uuid()}>
          <td>{cliente.nome}</td>
          <td>+€{cliente.ammontareVersato}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <div
          className="btn btn-primary"
          onClick={
            this.onCreate /* uguale a -> () => this.props.creaPolizza() */
          }
        >
          Nuova Polizza
        </div>
        {/* onClick = () => this.props.onClick(event) */}
        <hr className="my-4" />
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ammontare Versato</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { clienti: state.polizze };
};

export default connect(mapStateToProps, {
  creaPolizza /* uguale a -> creaPolizza: creaPolizza */,
})(ListaClienti);
