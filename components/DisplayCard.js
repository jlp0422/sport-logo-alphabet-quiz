const DisplayCard = ({ children, borderColor }) => {
  return (
    <div
      className={`flex flex-col justify-around p-10 text-center items-center rounded-2xl border-2 shadow-lg border-${borderColor}-500 bg-gray-100 sm:w-50vw sm:h-50vh w-80vw h-60vh`}
    >
      {children}
    </div>
  )
}

export default DisplayCard
