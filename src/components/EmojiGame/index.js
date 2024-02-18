import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinorLoss from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    isGameProgress: true,
    renderingList: [],
  }

  resetGame = () => {
    const {topScore, score} = this.state
    if (score > topScore) {
      this.setState({renderingList: [], isGameProgress: true, topScore: score})
    }
    this.setState({renderingList: [], isGameProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {renderingList} = this.state
    const isWon = emojisList.length === renderingList.length
    return (
      <WinorLoss
        isWon={isWon}
        score={renderingList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  finishGame = clickedImageLength => {
    const {topScore} = this.state
    let valueOne = topScore
    if (topScore <= clickedImageLength) {
      valueOne = clickedImageLength
    }
    this.setState({topScore: valueOne, isGameProgress: false})
  }

  clickingImage = id => {
    const {emojisList} = this.props
    const {renderingList} = this.state

    const isPresent = renderingList.includes(id)
    const clickedImageLength = renderingList.length
    if (isPresent) {
      this.finishGame(clickedImageLength)
    } else {
      if (clickedImageLength === emojisList.length - 1) {
        this.finishGame(emojisList.length)
      }
      this.setState(prevState => ({
        renderingList: [...prevState.renderingList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderingTheImages = () => {
    const data = this.shuffledEmojisList()
    return (
      <ul className="row_wise">
        {data.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            clickingImage={this.clickingImage}
            currentScore={each.currentScore}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGameProgress, renderingList} = this.state
    return (
      <div className="main-container">
        <div>
          <NavBar topScore={topScore} currentScore={renderingList.length} />
        </div>
        <ul className="emojiCard">
          {isGameProgress ? this.renderingTheImages() : this.renderScoreCard()}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
