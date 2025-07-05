interface Props {
    text: string;
    onClick : () => void;
    className?: string;
}

const Button = ({ text, onClick}: Props) => {
  return (
    <button
      className="flex min-w-21 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-blue-200 text-gray-900 text-sm font-bold leading-normal tracking-wide"
      onClick={onClick}
    >
      <span className="truncate">{ text }</span>
    </button>
  )
}

export default Button