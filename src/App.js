import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchUsers } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.user.data
})

export default connect(mapStateToProps)(App);
