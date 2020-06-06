import React from 'react';
import { connect } from 'react-redux';

import { creaPolizza } from '../redux/actions';

class ListaClienti extends React.Component {
  onCreate = () => {
    this.props.creaPolizza();
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
        ListaClienti
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
