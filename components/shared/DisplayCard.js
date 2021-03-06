const DisplayCard = ({
  children,
  borderColor,
  narrowHeight = 'h-70vh',
  height = 'h-60vh'
}) => {
  const borderToColor = {
    gray: 'border-gray-500',
    green: 'border-green-700'
  }
  return (
    <div
      className={`flex flex-col justify-around p-10 text-center items-center rounded-2xl border-4 shadow-lg bg-gray-100 w-90vw sm:w-50vw ${narrowHeight} sm:${height} ${borderToColor[borderColor]}`}
    >
      {children}
    </div>
  )
}

export default DisplayCard
