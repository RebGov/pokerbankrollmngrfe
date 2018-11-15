
totalTime = () => {
  let total = 0
  total = this.props.playedGames.reduce( (prev, cur) => prev + parseInt(cur.minutes),0)
  return total

}
converToHoursAndMintues = (totalTime) => {
  let hours= this.totalTime() / 60
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + " hour(s) and " + rminutes + " minute(s)."
}
totalProfit = () => {
  let total =0
  total = this.props.playedGames.reduce( (prev, cur)=> prev + parseInt(cur.profit), 0)
  return total.toFixed(2)
}
totalGames = () => {
  return Object.keys(this.props.playedGames).length
}
numGamesWon = () => {
  let wonCount = 0
  let wonGames = this.props.playedGames.map(game => {
    if (game.won_game === true){
      wonCount += 1
    }
  })
  return wonCount
}
numGamesLost = (numGamesWon, totalGames) => {
  let gamesLost = this.totalGames() - this.numGamesWon()
  return gamesLost
}
totalWon = () => {
  let amountWon = 0
  this.props.playedGames.map(game => {
    if (game.won_game === true) {
      amountWon += parseInt(game.profit)
    }
  })
  return amountWon.toFixed(2)
}
totalLost = () => {
  let amountLost = 0
  this.props.playedGames.map(game => {
    if (game.won_game === false) {
      amountLost += parseInt(game.profit)
    }
  })
  return amountLost.toFixed(2)
}

averageWin =(totalWon, numGamesWon) => {
  let average = this.totalWon()/this.numGamesWon()
  return average.toFixed(2)
}
averageLoss = (totalLost, numGamesLost) => {
  let average = this.totalLost()/this.numGamesLost()
  return average.toFixed(2)
}
percentOfWins = (totalGames, numGamesWon) => {
  let percentageWins = (this.numGamesWon() * 100)/this.totalGames()
  return percentageWins.toFixed(2)
}
percentOfLosses = (totalGames, numGamesLost) => {
  let percentageWins = (this.numGamesLost() * 100)/this.totalGames()
  return percentageWins.toFixed(2)
}
