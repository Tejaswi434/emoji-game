// Write your code here.

import './index.css'

const NavBar = props => {
  const {topScore, currentScore} = props
  return (
    <div className="emojiLogo">
      <div className="rowing">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="whiteColor">Emoji Game</h1>
      </div>

      <div className="rowing">
        <p className="score">Score :{currentScore} </p>
        <p className="topScore">TopScore:{topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
