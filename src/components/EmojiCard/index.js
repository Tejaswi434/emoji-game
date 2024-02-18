import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickingImage} = props
  const {emojiUrl, id, emojiName} = emojiDetails

  const single = () => {
    clickingImage(id)
  }

  return (
    <li className="container">
      <button className="but" onClick={single} type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

