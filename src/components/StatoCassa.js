import React from 'react';
import { connect } from 'react-redux';

class StatoCassa extends React.Component {
  renderValue() {
    const style = this.props.cassa > 0 ? 'success' : 'danger';
    return (
      <h4 className={`text-${style}`}>
        {/* uguale a -> 'text-' + style */}
        <strong>€{this.props.cassa.toFixed(2)}</strong>
      </h4>
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4>Cassa</h4>
        </div>
        <div className="card-body">
          Denaro attualmente disponibile...
          <hr className="my-3" />
          {this.renderValue()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cassa: state.cassa };
};

export default connect(mapStateToProps)(StatoCassa);
