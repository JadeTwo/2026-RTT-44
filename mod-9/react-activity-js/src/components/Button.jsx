export default function Button({ text, type = "button", onClick, disabled }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
