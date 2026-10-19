interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ text, type = "button", onClick, disabled }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

