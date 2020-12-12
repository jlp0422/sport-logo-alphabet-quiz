const DisplayCard = ({ children, borderColor }) => {
  const borderToColor = {
    gray: 'border-gray-500',
    green: 'border-green-500',
  }
  return (
    <div
      className={`flex flex-col justify-around p-10 text-center items-center rounded-2xl border-2 shadow-lg bg-gray-100 w-90vw sm:w-50vw h-60vh sm:h-50vh ${borderToColor[borderColor]}`}
    >
      {children}
    </div>
  )
}

export default DisplayCard
