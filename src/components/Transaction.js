export default function Transaction(props) {
  return (
    <div className="Trans">
      <span className="cash">{props.cash}</span>
      <span className="date">{props.date}</span>
    </div>
  )
}