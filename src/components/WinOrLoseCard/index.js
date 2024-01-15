// Write your code here.
import './index.css'

const win = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loose = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WinorLose = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon ? win : loose
  const gameStatus = isWon ? 'You Won' : 'You loose'
  const bestScore = isWon ? 'BestScore' : 'Score'
  return (
    <div>
      <div>
        <h1>{gameStatus}</h1>
        <p>{bestScore}</p>
        <p>{gameStatus}</p>
        <button onClick={onClickPlayAgain}>playAgain</button>
      </div>
      <div>
        <img src={imageUrl} />
      </div>
    </div>
  )
}

export default WinorLose
