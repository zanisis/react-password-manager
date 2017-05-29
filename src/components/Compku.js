import React from 'react';
import {connect} from 'react-redux'

export class Compku extends React.Component {
  render() {
    return (
      <div>
        <h1>
          A
        </h1>
        <p>x</p>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  listPassword : state.passList
})

const mapDispatchToProps = dispatch => ({
  deletePassword : id => dispatch(deletePassword(id)),
  editPassword : data => dispatch(editPassword(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Compku)