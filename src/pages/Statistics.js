import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterBox from '../stylesProject/FilterBox';
// import getProfit from '../actions/playedGameActions'

class Statistics extends Component {

  // handleClickOpen = () => {
  //    this.setState({ open: true });
  // };


  render(){
    console.log("Stats Page: ", this.props.playedGames)
    // let allGames= this.props.playedGames
    let total =0
    let count = 0
    let profitRow = []

    const style={
      border: "1px solid teal",
      padding: "1rem",
      margin: "1rem"
    };
    return (
      <div style={style}>
        <h1>Ante Up Statistics:</h1>
        <div>
          <h2>Please Select Filters for Played Session Statistics:</h2>
          <h6>If filters not selected, statitics will be for all played sessions.</h6>
          <FilterBox />
          <br/>
          <hr/>
        </div>
      <li>Total Profit: $ {total = this.props.playedGames.reduce( (prev, cur)=> prev + parseInt(cur.profit), 0)
      }</li>
      <li>Games Played: {Object.keys(this.props.playedGames).length}</li>
      <li>Games Won: </li>
      <li>Total Won: $</li>



      </div>



    )
  }

}
const mapStateToProps = ( state ) => {
  return {
    playedGames: state.userPlayedGames.playedGames
  }
}
const mapDispatchToProps = {
  // getProfit: getProfit


}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
