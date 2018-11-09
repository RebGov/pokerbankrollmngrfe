import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
// import SignUp from '../components/SignUp';
// import AllGames from '../components/AllGames'
// import { Link } from 'react-router-dom';
import { getUserData } from '../actions/userActions';
import { getAllBlindsList } from '../actions/blindsNameActions';
import { getAllLocationsList} from '../actions/gameLocationActions';
import { getAllGameNamesList } from '../actions/gameNameActions'
import { getAllNotes } from '../actions/noteActions'


class Home extends Component {
  componentDidMount(){
    this.props.getAllGameNamesList()
    this.props.getAllBlindsList()
    this.props.getAllLocationsList()
    if (this.props.jwt!=="undefined"|| this.props.jwt!== false){
      this.props.getUserData(this.props.jwt)
      this.props.getAllNotes()

    } else {
      console.log("not yet loaded")
    }
  }
  componentWillMount(){
    //this.props.updateUserPlayedGame()
    //this.props.newUserPlayedGame()
  }

  render() {
  // console.log('HomePage: ',this.props.jwt)
  return (
    <div>
    Hello Home
    </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
      jwt: state.jwt,
  }
}
const mapDispatchToProps = {
  getAllNotes: getAllNotes,
  getAllGameNamesList: getAllGameNamesList,
  getAllBlindsList: getAllBlindsList,
  getAllLocationsList: getAllLocationsList,
  getUserData: getUserData
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
