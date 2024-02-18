// Write your code here.

import './index.css'

const win = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loose = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WinorLose = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon ? win : loose
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const bestScore = isWon ? 'Best Score' : 'Score'

  return (
    <div className="back_1">
      <div className="back_2">
        <h1>{gameStatus}</h1>
        <p className="scoreColor">{bestScore}</p>

        <p className="number">{score}/12</p>
        <button onClick={onClickPlayAgain} className="yellow" type="button">
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinorLose
