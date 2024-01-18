// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickingImage} = props
  const {emojiUrl, id} = emojiDetails

  const single = () => {
    clickingImage(id)
  }

  return (
    <li className="container">
      <button className="but" onClick={single}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
