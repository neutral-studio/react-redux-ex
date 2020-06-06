import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { rimborsa } from '../redux/actions';

class ListaRimborsi extends React.Component {
  renderTable = () => {
    return _.values(this.props.rimborsi).map(rimborso => {
      return (
        <tr>
          <td>{rimborso.nome}</td>
          <td>-€{rimborso.ammontareDaRimborsare}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="btn btn-primary" onClick={() => this.props.rimborsa()}>
          Nuovo Rimborso
        </div>
        <hr className="my-4" />
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Anagrafica</th>
                <th>Ammontare Rimborsato</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { rimborsi: state.rimborsi };
};

export default connect(mapStateToProps, { rimborsa })(ListaRimborsi);
